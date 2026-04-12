import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060614",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "The OM Protocol — A Guided Meditation Practice",
  description:
    "A guided meditation practice for the modern mind. Rooted in ancient frequencies. Powered by intention.",
  keywords: [
    "meditation",
    "mindfulness",
    "breathing",
    "guided meditation",
    "OM Protocol",
  ],
  authors: [{ name: "Gleici Pereira" }],
  creator: "Gleici Pereira",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://theomprotocol.com"
  ),
  openGraph: {
    title: "The OM Protocol",
    description: "A guided meditation practice for the modern mind.",
    siteName: "The OM Protocol",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The OM Protocol",
    description: "A guided meditation practice for the modern mind.",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
