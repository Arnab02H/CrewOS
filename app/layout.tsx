import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CrewOS — Hire AI Employees That Actually Work",
  description:
    "Replace repetitive work with AI Employees that think, act, and execute like your best team members. Available 24/7, infinitely scalable, ready in minutes.",
  keywords: [
    "AI employees",
    "AI workforce",
    "AI SDR",
    "AI recruiter",
    "AI customer support",
    "autonomous AI agents",
    "AI automation",
    "enterprise AI",
  ],
  openGraph: {
    title: "CrewOS — Hire AI Employees That Actually Work",
    description:
      "Replace repetitive work with AI Employees that think, act, and execute like your best team members.",
    type: "website",
    url: "https://crewos.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrewOS — Hire AI Employees That Actually Work",
    description:
      "Replace repetitive work with AI Employees that think, act, and execute like your best team members.",
  },
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
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="bg-light-bg antialiased">
        {children}
      </body>
    </html>
  );
}
