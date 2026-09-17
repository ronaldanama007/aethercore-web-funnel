import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AetherCore | High-Converting Websites for Philippine SMEs",
  description:
    "Is your business still relying on Facebook alone? Upgrade to a fast, modern, mobile-friendly website built to capture Google search traffic and automate appointments.",
  keywords: [
    "Philippine SME web design",
    "website scorecard",
    "business website Manila",
    "website designer Philippines",
    "AetherCore",
  ],
  authors: [{ name: "AetherCore Digital" }],
  openGraph: {
    title: "AetherCore | Professional Web Design for Philippine SMEs",
    description:
      "Get your Free Website Assessment Scorecard. See where your business is losing customer inquiries and get a live preview.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-obsidian text-silver-text antialiased selection:bg-violet-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
