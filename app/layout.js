import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

// Font Imports
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MirRenTX", // Web title
  description:
    "Rent top-quality equipment and services for your events. From cameras and lighting to tents and generators, we provide everything you need for a seamless experience", // Web description
  icons: {
    icon: "/public/Logo.png", // Replace with your Flaticon icon's path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add Flaticon Icon */}
        <link rel="icon" type="image/png" href={metadata.icons.icon} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Toaster position="top-right" />{" "}
        {/* ✅ Added Toaster for global toast alerts */}
        <div id="__next">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
