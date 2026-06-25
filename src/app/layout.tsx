import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getLocale } from "@/i18n/getLocale";
import { htmlLang } from "@/i18n/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rklosowski.com"),
  title: "Rodrigo Klosowski",
  description: "Personal website of Rodrigo Klosowski",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();
  return (
    <html lang={htmlLang[locale]}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🖐🏻</text></svg>"
        />
        <script
          defer
          src="https://analytics.rklosowski.com/umami"
          data-website-id="4c7dea63-9e22-45b7-8165-ab3f8dad9a83"
        ></script>
      </head>
      <body className={inter.className}>
        <div className="">{children}</div>
      </body>
      <GoogleAnalytics gaId="G-M694M5TM5L" />
    </html>
  );
}
