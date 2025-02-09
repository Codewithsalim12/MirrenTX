"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Settings } from "lucide-react";
import { FaKey } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Dummy admin check (Replace this with real authentication logic)
  const isAdmin = true; // Change this based on your auth logic

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between px-4 items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-2">
          <Link className="flex items-center justify-center gap-1" href="/">
            <h1 className="text-3xl font-extrabold text-green-400">MirRenTX</h1>
            <FaKey size={25} />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/rentals" className="hover:text-green-400 transition">
            Rentals
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-green-400 transition"
            >
              Services <ChevronDown className="ml-1" size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/WebDevelopment"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  Web Development
                </Link>
              </div>
            )}
          </div>

          <Link href="/About" className="hover:text-green-400 transition">
            About Us
          </Link>
          <Link href="/Contact" className="hover:text-green-400 transition">
            Contact Us
          </Link>
          <Link href="/Gallery" className="hover:text-green-400 transition">
            Gallery
          </Link>
          <Link href="/Feedback" className="hover:text-green-400 transition">
            Feedback
          </Link>
        </div>

        {/* Login & Admin Settings Section */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            className="focus:outline-none text-white font-semibold bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sign in
          </button>
          {isAdmin && (
            <Link
              href="/admin"
              className="text-white hover:text-green-400 transition"
            >
              <Settings size={24} />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 shadow-lg p-4 flex flex-col space-y-4">
          <Link
            href="/"
            className="block hover:text-green-400 transition"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/rentals"
            className="block hover:text-green-400 transition"
            onClick={handleLinkClick}
          >
            Rentals
          </Link>
          <Link
            href="/services"
            className="block hover:text-green-400 transition"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            href="WebDevelopment"
            className="block hover:text-green-400 transition"
            onClick={handleLinkClick}
          >
            Web Development
          </Link>
          <Link
            href="/About"
            className="block hover:text-green-400 transition"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            href="/Contact"
            className="block hover:text-green-400 transition"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
          <Link
            href="/Gallery"
            className="block hover:text-green-400 transition"
            onClick={handleLinkClick}
          >
            Gallery
          </Link>
          <Link
            href="/Feedback"
            className="block hover:text-green-400 transition"
            onClick={handleLinkClick}
          >
            Feedback
          </Link>
          <button
            type="button"
            className="w-full text-white font-semibold bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sign in
          </button>
          {isAdmin && (
            <Link
              href="/admin"
              className="block text-white hover:text-green-400 transition"
              onClick={handleLinkClick}
            >
              <Settings size={24} />
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
