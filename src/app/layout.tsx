import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodrigo Klosowski",
  description: "Personal website of Rodrigo Klosowski",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🖐🏻</text></svg>"
        />
        <script
          defer
          data-domain="rklosowski.com"
          src="https://plausible.rklosowski.com/js/script.js"
        ></script>
      </head>
      <body className={inter.className}>
        <div className="">{children}</div>
      </body>
      <GoogleAnalytics gaId="G-M694M5TM5L" />
    </html>
  );
}
