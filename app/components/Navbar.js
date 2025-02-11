"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Settings } from "lucide-react";
import { FaKey } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isAdmin = true; // Dummy admin check

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-gradient-to-r from-green-500 to-teal-500 text-white fixed w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between px-6 py-4 items-center">
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-2">
          <Link className="flex items-center justify-center gap-1" href="/">
            <FaKey
              size={25}
              className="transition-all transform hover:scale-110"
            />
            <h1 className="text-3xl font-extrabold text-white hover:text-green-100 transition-colors duration-300">
              MirRenTX
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="hover:text-green-100 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/rentals"
            className="hover:text-green-100 transition-colors duration-300"
          >
            Rentals
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-green-100 transition-colors duration-300"
            >
              Services <ChevronDown className="ml-1" size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg transition-all duration-300">
                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
                  onClick={() => setDropdownOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/WebDevelopment"
                  className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
                  onClick={() => setDropdownOpen(false)}
                >
                  Web Development
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/About"
            className="hover:text-green-100 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="/Contact"
            className="hover:text-green-100 transition-colors duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/Gallery"
            className="hover:text-green-100 transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/Feedback"
            className="hover:text-green-100 transition-colors duration-300"
          >
            Feedback
          </Link>
        </div>

        {/* Login & Admin Settings Section */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            className="focus:outline-none text-white font-semibold bg-green-600 hover:bg-green-700 shadow-lg focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
          >
            Sign In
          </button>
          <button
            type="button"
            className="focus:outline-none text-white font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
          >
            Sign Up
          </button>
          {isAdmin && (
            <Link
              href="/admin"
              className="text-white hover:text-green-100 transition-colors duration-300"
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 shadow-lg p-6 flex flex-col space-y-6">
          <Link
            href="/"
            className="block hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/rentals"
            className="block hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Rentals
          </Link>
          <Link
            href="/services"
            className="block hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            href="/WebDevelopment"
            className="block hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Web Development
          </Link>
          <Link
            href="/About"
            className="block hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            href="/Contact"
            className="block hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
          <Link
            href="/Gallery"
            className="block hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Gallery
          </Link>
          <Link
            href="/Feedback"
            className="block hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Feedback
          </Link>
          <div className="flex flex-col space-y-3">
            <button
              type="button"
              className="w-full text-white font-semibold bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full text-white font-semibold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
            >
              Sign Up
            </button>
          </div>
          {isAdmin && (
            <Link
              href="/admin"
              className="block text-white hover:text-green-100 transition-colors duration-300"
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
