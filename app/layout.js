import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientProviders from "./components/ClientProviders";

// Font Imports
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | MirRenTX",
    default: "MirRenTX | Premium Equipment & Event Rentals in Kupwara, Kashmir",
  },
  description:
    "MirRenTX provides gold standard event excellence in Kupwara and across Kashmir. Rent top-quality equipment, luxury canopies, cinematic lighting, cameras, text and generators for your events with instant 24/7 delivery and support.",
  keywords: [
    "MirRenTX",
    "Kupwara event rentals",
    "Premium equipment rental Kashmir",
    "Wedding tents Kupwara",
    "Camera rent Kupwara",
    "DSLR rental Kashmir",
    "Generator rental Kupwara",
    "Event management Kupwara",
    "Luxury canopies Kashmir",
    "Lighting rental Kashmir",
    "Event logistics Kupwara",
    "Handwara event rentals",
    "Corporate events Kashmir",
  ],
  authors: [{ name: "Mohammad Salim" }],
  creator: "MirRenTX",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mirrentx.vercel.app",
    siteName: "MirRenTX",
    title: "MirRenTX | Premium Rentals in Kupwara",
    description:
      "Planning an event in Kupwara or Kashmir? Rent premium tents, DSLR cameras, generators, and lighting systems easily with MirRenTX.",
    images: [
      {
        url: "/og-image.jpg", // You can replace this with an actual valid OG image URL later
        width: 1200,
        height: 630,
        alt: "MirRenTX Event Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MirRenTX | Event Excellence in Kupwara",
    description:
      "Rent premium event equipment, cameras, lighting, and canopies in Kupwara, Kashmir.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mirrentx.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Logo-based Favicon Configuration */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-modern.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-modern.svg" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body
        className={`${interTight.variable} ${interTight.className} antialiased`}
      >
        <ClientProviders>
          <Navbar />
          <main>
            <div id="__next">
              {children}
            </div>
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
