// Rehype transform with two passes:
//  1. Collapse runs of 2+ consecutive image-only paragraphs into a gallery
//     container (<div class="__gallery">) — the Markdown renderer turns it into
//     the interactive <Gallery>.
//  2. Tag the emphasis paragraph that follows a single image as an image caption
//     (<p class="img-caption">) so it can be centered + shrunk via CSS.
export default function rehypeGallery() {
  return function (tree: any) {
    const ch: any[] = tree.children || [];
    const isWS = (n: any) => n.type === "text" && !String(n.value).trim();
    const sig = (p: any) =>
      p && p.type === "element" && p.tagName === "p"
        ? p.children.filter((c: any) => !isWS(c))
        : [];
    const imgOf = (p: any) =>
      p.children.find((c: any) => c.type === "element" && c.tagName === "img");
    const isImgPara = (p: any) => {
      const s = sig(p);
      return s.length === 1 && s[0].tagName === "img";
    };
    const isEmPara = (p: any) => {
      const s = sig(p);
      return s.length === 1 && (s[0].tagName === "em" || s[0].tagName === "i");
    };

    // Pass 1 — galleries
    const out: any[] = [];
    let i = 0;
    while (i < ch.length) {
      if (isImgPara(ch[i])) {
        const imgs: any[] = [];
        let j = i;
        while (j < ch.length) {
          if (isImgPara(ch[j])) {
            imgs.push(imgOf(ch[j]));
            j++;
          } else if (isWS(ch[j])) {
            j++;
          } else break;
        }
        if (imgs.length >= 2) {
          out.push({
            type: "element",
            tagName: "div",
            properties: { className: ["__gallery"] },
            children: imgs,
          });
          i = j;
          continue;
        }
      }
      out.push(ch[i]);
      i++;
    }

    // Pass 2 — captions (single image followed by an emphasis paragraph)
    for (let k = 0; k < out.length; k++) {
      if (!isImgPara(out[k])) continue;
      let n = k + 1;
      while (n < out.length && isWS(out[n])) n++;
      if (n < out.length && isEmPara(out[n])) {
        const p = out[n];
        p.properties = p.properties || {};
        const cls = p.properties.className;
        p.properties.className = Array.isArray(cls)
          ? [...cls, "img-caption"]
          : ["img-caption"];
      }
    }

    tree.children = out;
  };
}
