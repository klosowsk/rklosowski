// Build-time image optimizer for the blog.
//
// Converts any PNG/JPG dropped under public/blog/images into WebP (capped at
// 1600px wide, quality 85), deletes the original, and rewrites the references
// in content/blog/*.md. Existing .webp files are left untouched, so the step is
// idempotent (no quality loss from re-encoding) and a no-op once everything is
// optimized. Runs automatically as part of `yarn build`; run `yarn images` to
// optimize + commit locally.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const IMGDIR = path.join(ROOT, "public/blog/images");
const BLOGDIR = path.join(ROOT, "content/blog");
const MAX_WIDTH = 1600;
const QUALITY = 85;
const CONVERT = new Set([".png", ".jpg", ".jpeg"]);

if (!fs.existsSync(IMGDIR)) {
  console.log("[images] no public/blog/images — skipping");
  process.exit(0);
}

function walk(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p));
    else out.push(p);
  }
  return out;
}

const targets = walk(IMGDIR).filter((f) =>
  CONVERT.has(path.extname(f).toLowerCase()),
);

if (!targets.length) {
  console.log("[images] nothing to optimize (all WebP)");
  process.exit(0);
}

// Only load sharp when there's actually something to convert, so the common
// all-WebP no-op never depends on sharp's native binary being present.
const sharp = (await import("sharp")).default;

const repl = [];
let before = 0;
let after = 0;
for (const f of targets) {
  const rel =
    "/blog/images/" + path.relative(IMGDIR, f).split(path.sep).join("/");
  const newAbs = f.replace(/\.(png|jpe?g)$/i, ".webp");
  const newRel = rel.replace(/\.(png|jpe?g)$/i, ".webp");
  before += fs.statSync(f).size;
  const buf = await sharp(f)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer();
  fs.writeFileSync(newAbs, buf);
  if (newAbs !== f) fs.unlinkSync(f);
  after += buf.length;
  repl.push([rel, newRel]);
}

// Rewrite markdown references (post bodies + frontmatter cover images).
if (fs.existsSync(BLOGDIR)) {
  for (const mf of fs.readdirSync(BLOGDIR).filter((f) => f.endsWith(".md"))) {
    const p = path.join(BLOGDIR, mf);
    let t = fs.readFileSync(p, "utf8");
    const orig = t;
    for (const [a, b] of repl) t = t.split(a).join(b);
    if (t !== orig) fs.writeFileSync(p, t);
  }
}

const saved = ((before - after) / 1048576).toFixed(2);
console.log(
  `[images] optimized ${targets.length} -> WebP, saved ${saved} MB (${Math.round((1 - after / before) * 100)}% smaller)`,
);
