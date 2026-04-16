import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap"
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Maison Laurent | Fine Dining Restaurant",
    template: "%s | Maison Laurent"
  },
  description:
    "Experience contemporary French cuisine in an intimate setting. Award-winning chef, seasonal menus, and impeccable service in the heart of the city.",
  keywords: [
    "fine dining",
    "French restaurant",
    "contemporary cuisine",
    "tasting menu",
    "Michelin star",
    "reservation"
  ],
  authors: [{ name: "Maison Laurent" }],
  creator: "Maison Laurent",
  metadataBase: new URL("https://maisonlaurent.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maisonlaurent.com",
    title: "Maison Laurent | Fine Dining Restaurant",
    description:
      "Experience contemporary French cuisine in an intimate setting.",
    siteName: "Maison Laurent",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Laurent Restaurant"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Laurent | Fine Dining Restaurant",
    description:
      "Experience contemporary French cuisine in an intimate setting.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-charcoal-950 text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
