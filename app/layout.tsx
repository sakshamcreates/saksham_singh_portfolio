import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saksham Singh | AI & Full Stack Developer",
  description:
    "Portfolio of Saksham Singh showcasing AI projects, Full Stack development, UI/UX, and software engineering work.",
  // TODO: Replace with your own domain once you have one deployed.
  metadataBase: new URL("https://sakshamsingh.dev"),

  // Basic metadata
  applicationName: "Saksham Singh Portfolio",
  authors: [{ name: "Saksham Singh" }],
  keywords: [
    "Saksham Singh",
    "AI Developer",
    "Full Stack Developer",
    "B.Tech AIML",
    "Machine Learning",
    "Next.js",
    "React",
    "TypeScript",
    "Open Source",
  ],

  openGraph: {
    type: "website",
    // TODO: Replace with your own domain once you have one deployed.
    url: "https://sakshamsingh.dev",
    title: "Saksham Singh | AI & Full Stack Developer",
    description:
      "Portfolio of Saksham Singh showcasing AI projects, Full Stack development, UI/UX, and software engineering work.",
    siteName: "Saksham Singh",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saksham Singh - Portfolio",
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    // TODO: Replace with your own domain once you have one deployed.
    canonical: "https://sakshamsingh.dev",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
