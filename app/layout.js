"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react"; // ✅ Import SessionProvider
import { SpeedInsights } from "@vercel/speed-insights/next";

// Font Imports
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Don't export metadata here for client components

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MirRenTX</title>
        <meta
          name="description"
          content="Rent top-quality equipment and services for your events. From cameras and lighting to tents and generators, we provide everything you need for a seamless experience"
        />
        <link rel="icon" type="image/png" href="/public/Logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Navbar />
          <Toaster position="top-right" />
          <div id="__next">
            {children}
            <SpeedInsights />
          </div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
