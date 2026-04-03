"use client";

import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ClientProviders({ children }) {
  useEffect(() => {
    // Only track once per browser session to avoid duplicate counts on route changes
    if (typeof window !== 'undefined' && !sessionStorage.getItem("visitTracked")) {
      fetch("/api/track-visit", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            sessionStorage.setItem("visitTracked", "true");
          }
        })
        .catch((err) => console.error("Tracking error:", err));
    }
  }, []);

  return (
    <SessionProvider>
      {children}
      <Toaster 
        position="top-right" 
        richColors 
        expand={true}
        closeButton
        toastOptions={{
          style: { zIndex: 10001, fontFamily: "var(--font-inter-tight)" }
        }}
      />
      <SpeedInsights />
    </SessionProvider>
  );
}
