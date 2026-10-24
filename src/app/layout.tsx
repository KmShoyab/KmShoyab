import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KM Shoyab | Software Developer",
    template: "%s | KM Shoyab",
  },
  description:
    "Explore the portfolio of KM Shoyab, a computer science student and developer interested in software engineering, web applications, and intelligent software.",
  keywords: [
    "KM Shoyab",
    "Software Developer",
    "Web Developer",
    "Computer Science",
    "Next.js",
    "React",
    "PHP",
    "WordPress",
  ],
  openGraph: {
    title: "KM Shoyab | Software Developer",
    description:
      "Discover my projects, technical skills, and journey in software development.",
    siteName: "KM Shoyab",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}