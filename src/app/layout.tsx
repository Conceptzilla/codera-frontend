import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Codera — Fleet Management",
  description:
    "Real-time tracking, advanced analytics, and seamless fleet management in one platform.",
  icons: { icon: "/assets/codera/logo-mark.svg" },
  openGraph: {
    title: "Codera — Fleet Management",
    description: "Control your fleet like never before.",
    images: [
      {
        alt: "Codera fleet management",
        height: 909,
        url: "/assets/codera/og.png",
        width: 1731,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codera — Fleet Management",
    description: "Control your fleet like never before.",
    images: ["/assets/codera/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
