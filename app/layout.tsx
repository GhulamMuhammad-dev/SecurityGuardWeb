import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "CrossFront Services | Professional Security Solutions in the UK",
    template: "%s | CrossFront Services",
  },
  description:
    "CrossFront Services is a trusted UK-based security provider agency offering professional security guard services, surveillance solutions, and tailored protection for businesses and individuals.",
  keywords: [
    "UK security services",
    "professional security agency",
    "CrossFront Services",
    "business security UK",
    "event security",
    "security guard services",
    "CCTV surveillance",
    "personal protection UK",
    "corporate security solutions",
  ],
  metadataBase: new URL("https://crossfrontservices.com/"),
  openGraph: {
    title: "CrossFront Services | Professional Security Solutions in the UK",
    description:
      "Trusted UK-based security provider delivering expert security guards, surveillance systems, and tailored protection for businesses and individuals.",
    url: "https://crossfrontservices.com/",
    siteName: "CrossFront Services",
    images: [
      {
        url: "https://crossfrontservices.com/opengraph-image.jpg", // Replace with your uploaded OG image
        width: 1200,
        height: 630,
        alt: "CrossFront Services Security Preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrossFront Services | Professional Security Solutions in the UK",
    description:
      "Reliable UK-based security provider offering expert security guards, surveillance, and tailored protection solutions.",
    images: ["https://crossfrontservices.com/opengraph-image.jpg"],
    creator: "@crossfrontservices", // Update if you have a Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "security",
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
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
