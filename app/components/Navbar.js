"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { FaKey, FaUser } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const avatarFallback = session?.user?.name?.charAt(0).toUpperCase();

  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/");
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-teal-600 text-white fixed w-full shadow-xl z-50">
      <div className="container mx-auto flex justify-between px-6 py-3 items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center group">
            <div className="bg-gradient-to-r from-purple-200 to-white rounded-full p-1 mr-2 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <img
                className="w-10 h-10 object-contain"
                src="/deal.png"
                alt="Deal Icon"
              />
            </div>
            <span className="text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-white transition-all duration-500">
              MIRRENTX
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="relative px-3 py-2 text-base font-medium text-white hover:text-green-100 transition-colors duration-300 group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/rentals"
            className="relative px-3 py-2 text-base font-medium text-white hover:text-green-100 transition-colors duration-300 group"
          >
            Rentals
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center px-3 py-2 text-base font-medium text-white hover:text-green-100 transition-colors duration-300 group"
            >
              Services
              <ChevronDown
                className={`ml-1 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
                size={16}
              />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            {servicesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg shadow-2xl py-2 z-50 border border-white/10 backdrop-blur-sm">
                <Link
                  href="/services"
                  className="block px-4 py-3 text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  All Services
                </Link>
                <Link
                  href="/WebDevelopment"
                  className="block px-4 py-3 text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  Web Development
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/About"
            className="relative px-3 py-2 text-base font-medium text-white hover:text-green-100 transition-colors duration-300 group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/Contact"
            className="relative px-3 py-2 text-base font-medium text-white hover:text-green-100 transition-colors duration-300 group"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/Gallery"
            className="relative px-3 py-2 text-base font-medium text-white hover:text-green-100 transition-colors duration-300 group"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/Feedback"
            className="relative px-3 py-2 text-base font-medium text-white hover:text-green-100 transition-colors duration-300 group"
          >
            Feedback
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* User Profile or Sign-In/Sign-Up Section */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="font-medium text-white">
                  {session.user?.name}
                </span>
                <Avatar className="w-9 h-9 border-2 border-white/30 group-hover:border-white/50 transition-all duration-300">
                  <AvatarImage
                    src={session.user?.image || undefined}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-green-500 to-teal-500 text-white font-bold">
                    {avatarFallback}
                  </AvatarFallback>
                </Avatar>
              </button>
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg shadow-2xl py-2 z-50 border border-white/10 backdrop-blur-sm">
                  <button
                    onClick={handleSignOut}
                    className="flex justify-center items-center gap-2 w-full px-4 py-3 text-white hover:bg-white/10 transition-all duration-200"
                  >
                    <FaSignOutAlt className="text-lg" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button
                asChild
                className="relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg rounded-lg px-6 py-2 transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-xl group"
              >
                <Link href="/sign-in">
                  <span className="relative z-10 font-semibold">Sign In</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>

              <Button
                asChild
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg rounded-lg px-6 py-2 transition-all duration-300 hover:from-purple-700 hover:to-purple-800 hover:shadow-xl group"
              >
                <Link href="/sign-up">
                  <span className="relative z-10 font-semibold">Sign Up</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          {menuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 z-40 backdrop-blur-sm">
          <div className="fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-green-600 to-teal-600 shadow-2xl p-6 flex flex-col space-y-4 transform transition-transform duration-300 ease-in-out overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <Link
                href="/"
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white"
                onClick={handleLinkClick}
              >
                MIRRENTX
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-white font-medium"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                href="/rentals"
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-white font-medium"
                onClick={handleLinkClick}
              >
                Rentals
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-white font-medium"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link
                href="/WebDevelopment"
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-white font-medium"
                onClick={handleLinkClick}
              >
                Web Development
              </Link>
              <Link
                href="/About"
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-white font-medium"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link
                href="/Contact"
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-white font-medium"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
              <Link
                href="/Gallery"
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-white font-medium"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
              <Link
                href="/Feedback"
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-white font-medium"
                onClick={handleLinkClick}
              >
                Feedback
              </Link>
            </div>

            <div className="mt-auto pt-6 space-y-4">
              {session ? (
                <div className="flex items-center gap-3 px-4 py-3">
                  <Avatar className="w-10 h-10 border-2 border-white/30">
                    <AvatarImage
                      src={session.user?.image || undefined}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-green-500 to-teal-500 text-white font-bold">
                      {avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">
                      {session.user?.name}
                    </p>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-300"
                    >
                      <FaSignOutAlt className="text-sm" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg py-3 shadow-lg transition-all duration-300"
                  >
                    <Link href="/sign-in" onClick={handleLinkClick}>
                      Sign In
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg py-3 shadow-lg transition-all duration-300"
                  >
                    <Link href="/sign-up" onClick={handleLinkClick}>
                      Sign Up
                    </Link>
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Footer */}
            <div className="text-center text-white/80 text-sm mt-8">
              <p>© 2025 MirRenTX. All rights reserved.</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
