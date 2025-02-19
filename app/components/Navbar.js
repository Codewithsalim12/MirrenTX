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
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-gradient-to-r from-green-500 to-teal-500 text-white fixed w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between px-6 py-4 items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-3xl flex justify-center items-center font-extrabold text-white hover:text-green-100 transition-colors duration-300"
          >
            <span>
              <FaKey className="text-white transition-transform transform hover:rotate-12 hover:scale-110 duration-300 mr-1" />
            </span>
            <p className="logo text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-50 to-white hover:text-transparent transition-colors duration-300">
              MirRenTX
            </p>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-base font-medium text-white hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/rentals"
            className="text-base font-medium text-white hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Rentals
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center text-base font-medium text-white hover:text-green-100 transition-colors duration-300"
            >
              Services{" "}
              <ChevronDown
                className="ml-1 transition-transform transform hover:rotate-180 duration-300"
                size={16}
              />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-green-500 to-teal-500 rounded-md shadow-lg transition-all duration-300 outline outline-1">
                <Link
                  href="/services"
                  className="block px-4 py-2 text-white hover:bg-green-700 transition-all duration-300"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/WebDevelopment"
                  className="block px-4 py-2 text-white hover:bg-green-700 transition-all duration-300"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Web Development
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/About"
            className="text-base font-medium text-white hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            href="/Contact"
            className="text-base font-medium text-white hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
          <Link
            href="/Gallery"
            className="text-base font-medium text-white hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Gallery
          </Link>
          <Link
            href="/Feedback"
            className="text-base font-medium text-white hover:text-green-100 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Feedback
          </Link>
        </div>

        {/* User Profile or Sign-In/Sign-Up Section */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center text-[17px] font-medium  text-blue-50 hover:text-blue-100 transition-colors duration-300"
              >
                <span>{session.user?.name}</span>
                <Avatar className="ml-2">
                  <AvatarImage
                    className="w-8 h-8 rounded-full ring-2 ring-teal-600"
                    src={session.user?.image || undefined}
                  />
                  <AvatarFallback className="bg-sky-900 text-white">
                    {avatarFallback}
                  </AvatarFallback>
                </Avatar>
              </button>
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gradient-to-r from-green-500 to-teal-500 rounded-md shadow-lg transition-all duration-300 outline outline-1">
                  <button
                    onClick={handleSignOut}
                    className=" flex justify-center items-center gap-1 w-full px-4 py-2 text-left bg-gradient-to-r from-green-500 to-teal-500    hover:from-green-500 hover:to-teal-500  transition-all duration-300 rounded-full"
                  >
                    {" "}
                    <FaSignOutAlt className="text-lg mt-1" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button className="bg-green-600 outline outline-2 outline-gray-800 shadow-xl hover:bg-green-700 transition-all duration-300 rounded-xl px-6">
                <Link
                  className="font-semibold flex justify-center items-center gap-1"
                  href="/sign-in"
                >
                  {/* <FaUser className="text-lg" /> */}
                  Sign In
                </Link>
              </Button>
              <Button className="bg-purple-800 hover:bg-purple-900 transition-all duration-300 shadow-lg rounded-xl px-5">
                <Link className="font-semibold" href="/sign-up">
                  Sign Up
                </Link>
              </Button>
            </>
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
          {session ? (
            <button
              onClick={handleSignOut}
              className=" flex justify-center items-center gap-1 w-full px-4 py-2 text-left bg-gradient-to-r from-green-500 to-teal-500    hover:from-green-500 hover:to-teal-500 outline outline-1 transition-all duration-300 rounded-full"
            >
              {" "}
              <FaSignOutAlt className="text-lg mt-1" />
              <span>Logout</span>
            </button>
          ) : (
            <>
              <Button className="w-full rounded-xl bg-green-600 hover:bg-green-700 transition-colors duration-300 shadow-lg">
                <Link className="font-semibold" href="/sign-in">
                  Sign In
                </Link>
              </Button>
              <Button className="w-full bg-purple-800 hover:bg-purple-900 transition-all duration-300 rounded-xl shadow-lg">
                <Link className="font-semibold" href="/sign-up">
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
