import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./util_components/ThemeProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kavins-projects-6e7b51b1.vercel.app"),
  title: "Kavin Balamurugan | Software Engineer – Full-Stack & AI Applications",
  description:
    "Software Engineer with 5+ years of experience building enterprise applications, modern frontend platforms, backend services and AI-powered solutions. Explore my projects, technical experience and engineering journey.",
  openGraph: {
    type: "website",
    siteName: "Kavin Balamurugan",
    title: "Kavin Balamurugan | Software Engineer – Full-Stack & AI Applications",
    description:
      "Software Engineer with 5+ years of experience building enterprise applications, modern frontend platforms, backend services and AI-powered solutions. Explore my projects, technical experience and engineering journey.",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Kavin Balamurugan, Software Engineer — Full-Stack & AI Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavin Balamurugan | Software Engineer – Full-Stack & AI Applications",
    description:
      "Software Engineer with 5+ years of experience building enterprise applications, modern frontend platforms, backend services and AI-powered solutions. Explore my projects, technical experience and engineering journey.",
    images: ["/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
          bg-white text-gray-900 
          dark:bg-gray-900 dark:text-gray-100 
          font-sans overflow-x-hidden transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
