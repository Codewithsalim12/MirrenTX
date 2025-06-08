"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MirRenTX</title>
        <meta
          name="description"
          content="Rent top-quality equipment and services for your events. From cameras and lighting to tents and generators, we provide everything you need for a seamless experience"
        />
        {/* ✅ Logo-based Favicon Configuration */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-modern.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-modern.svg" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Navbar />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                zIndex: 10001,
              },
            }}
          />
          <main>
            <div id="__next">
              {children}
              <SpeedInsights />
            </div>
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
