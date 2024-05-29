import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-montserrat",
  fallback: ["sans-serif"],
  preload: true,
});

const sourceSans = Source_Sans_3({
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-source-sans",
  fallback: ["sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Maciej Bernatowicz — Portfolio V2",
  description:
    "Maciej is an IT Project Manager with a strong technical background, dedicated to leading projects that deliver innovative and sustainable digital solutions",
  authors: [{ name: "Maciej Bernatowicz" }],
  keywords:
    "Maciej Bernatowicz, Maciej, Bernatowicz, Project Manager, IT Project Manager, Frontend Developer, Web Developer, UI Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="CookieYes"
          src={`https://cdn-cookieyes.com/client_data/91650f913ccfc2afab34de8c/script.js`}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${montserrat.variable} ${sourceSans.variable}`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-DZL0Y5P3XE" />
    </html>
  );
}
