import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://lavelleventure.com"), // 🔁 change if needed

  title: {
    default: "Lavelle Venture | Premium Real Estate in Bangalore",
    template: "%s | Lavelle Venture",
  },

  description:
    "Lavelle Venture delivers premium real estate developments in Bangalore where peace meets modern architecture. Discover luxury villas, residential layouts, and high-return investment properties.",

  keywords: [
    "Lavelle Venture",
    "Real Estate Bangalore",
    "Luxury Villas Bangalore",
    "Modern Architecture Homes",
    "Residential Layouts",
    "Property Investment India",
    "Premium Housing Projects",
  ],

  authors: [{ name: "Lavelle Venture" }],
  creator: "Lavelle Venture",
  publisher: "Lavelle Venture",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // 🔁 add from Search Console
  },

  icons: {
    icon: "/images/iconlogo.png",
    shortcut: "/images/iconlogo.png",
    apple: "/images/iconlogo.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lavelleventure.com",
    siteName: "Lavelle Venture",
    title: "Lavelle Venture | Premium Real Estate in Bangalore",
    description:
      "Discover luxury villas and premium real estate projects by Lavelle Venture in Bangalore.",
    images: [
      {
        url: "/images/og-image.jpg", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Lavelle Venture Premium Real Estate",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lavelle Venture | Premium Real Estate",
    description:
      "Luxury real estate ventures where peace meets modern architecture.",
    images: ["/images/og-image.jpg"],
  },

  alternates: {
    canonical: "https://lavelleventure.com",
  },

  category: "Real Estate",
};

/* =========================
   VIEWPORT (Required for themeColor)
========================= */

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <FloatingContact />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}