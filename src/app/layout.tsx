import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Analytics from '@/components/Analytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ferox Tech Services | AI & Cloud Solutions for Modern Businesses",
  description: "Empowering businesses with AI-driven, cloud-native, and data-backed solutions. Explore our services and grow your career with Ferox Tech Services.",
  keywords: ["Ferox Tech", "AI services", "cloud computing", "automation", "careers in tech", "data analytics", "workflow automation"],
  robots: "index, follow",
  metadataBase: new URL("https://ferox-ts.com"), // replace with your real domain

  openGraph: {
    title: "Ferox Tech Services",
    description: "Delivering modern AI & cloud solutions for business transformation.",
    url: "https://ferox-ts.com",
    siteName: "Ferox Tech Services",
    images: [
      {
        url: "https://ferox-ts.com/logo.png", // add your Open Graph image to /public
        width: 1200,
        height: 630,
        alt: "Ferox Tech Services - AI & Cloud Solutions",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ferox Tech Services",
    description: "AI-enhanced solutions to scale and transform your business.",
    images: ["https://ferox-ts.com/logo.png"], // add your image to /public
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Toaster position="top-right" />
          <Analytics />
        {children}
      </body>
    </html>
  );
}
