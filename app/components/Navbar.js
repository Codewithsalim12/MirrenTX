"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { FaKey, FaUser } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const avatarFallback = session?.user?.name?.charAt(0).toUpperCase();

  // Hide Navbar entirely on Admin routes
  if (pathname?.startsWith("/Admin")) return null;


  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/");
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Detect scroll to handle styling if needed (e.g. adding border on scroll)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav 
      className={`fixed w-screen top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-200" 
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-[72px] lg:h-20 w-full">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <Link
              href="/"
              className="group transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Logo
                size="default"
                showText={true}
                textColor="dark"
                animate={false}
                className="drop-shadow-none"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="px-2 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/rentals"
              className="px-2 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm tracking-wide"
            >
              Rentals
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="flex items-center px-2 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm tracking-wide"
              >
                Services
                <ChevronDown
                  className={`ml-1 transition-transform duration-300 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  size={14}
                />
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-0 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl py-3 z-[100] transition-all duration-300 origin-top transform ${
                  servicesDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                }`}
              >
                <div className="relative z-10 flex flex-col gap-1 px-2">
                  <Link
                    href="/services"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-xl group"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-medium text-sm">All Services</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Explore our offerings</span>
                    </div>
                  </Link>
                  <Link
                    href="/WebDevelopment"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-xl group"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-purple-50 text-purple-600 rounded-lg group-hover:bg-purple-100 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-medium text-sm">Web Development</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Custom digital solutions</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/About"
              className="px-2 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm tracking-wide"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="px-2 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm tracking-wide"
            >
              Contact
            </Link>
            <Link
              href="/Gallery"
              className="px-2 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm tracking-wide"
            >
              Gallery
            </Link>
            <Link
              href="/Feedback"
              className="px-2 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm tracking-wide"
            >
              Feedback
            </Link>
          </div>

          {/* Desktop User Profile or Sign-In/Sign-Up Section */}
          <div className="hidden lg:flex items-center gap-4">
            {session ? (
              <div 
                className="relative"
                onMouseEnter={() => setProfileDropdownOpen(true)}
                onMouseLeave={() => setProfileDropdownOpen(false)}
              >
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-md bg-white transition-all duration-300"
                >
                  <Avatar className="w-7 h-7 bg-gray-100">
                    <AvatarImage
                      src={session.user?.image || undefined}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gray-800 text-white font-medium text-xs">
                      {avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-gray-700 text-sm max-w-[100px] truncate">
                    {session.user?.name?.split(' ')[0] || "Profile"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      profileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {profileDropdownOpen && (
                  <div className="absolute right-0 top-full pt-2 w-56 z-[100]">
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-3 border-b border-gray-50">
                        <p className="text-gray-900 font-medium text-sm truncate">
                          {session.user?.name}
                        </p>
                        <p className="text-gray-500 text-xs truncate mt-0.5">
                          {session.user?.email}
                        </p>
                      </div>
                      <div className="p-2">
                        <button
                          onClick={handleSignOut}
                          className="flex items-center gap-3 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                        >
                          <FaSignOutAlt className="text-sm" />
                          <span className="font-medium text-sm">Sign out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link 
                  href="/sign-in" 
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 bg-white border border-gray-300 shadow-sm hover:shadow-md rounded-lg transition-all"
                >
                  Sign in
                </Link>
                <Link 
                  href="/sign-up" 
                  className="px-5 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-black rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Medium/Tablet Auth Minimal */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            {session ? (
              <div 
                className="relative"
                onMouseEnter={() => setProfileDropdownOpen(true)}
                onMouseLeave={() => setProfileDropdownOpen(false)}
              >
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center pe-2 p-1.5 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <Avatar className="w-7 h-7">
                    <AvatarImage
                      src={session.user?.image || undefined}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gray-800 text-white font-medium text-xs">
                      {avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown
                    className={`ml-1 w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      profileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {profileDropdownOpen && (
                  <div className="absolute right-0 top-full pt-2 w-48 z-[100]">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-2">
                      <div className="px-4 py-3 border-b border-gray-50">
                        <p className="text-gray-900 font-medium text-sm truncate">
                          {session.user?.name}
                        </p>
                      </div>
                      <div className="p-2">
                        <button
                          onClick={handleSignOut}
                          className="flex items-center gap-3 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                        >
                          <FaSignOutAlt className="text-sm" />
                          <span className="font-medium text-sm">Sign out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/sign-in" className="text-sm font-medium text-gray-700 hover:text-gray-900 px-4 py-2 bg-white border border-gray-300 shadow-sm hover:shadow-md rounded-lg transition-all">
                  Sign in
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 -mr-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={24} strokeWidth={2} />
              ) : (
                <Menu size={24} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
        
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" flex justify-between items-center p-5 border-b border-gray-100">
          <Link
            href="/"
            className="flex items-center"
            onClick={handleLinkClick}
          >
            <Logo
              size="small"
              showText={true}
              textColor="dark"
              animate={false}
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex-1 py-6 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-5">
            {[
              { href: "/", label: "Home" },
              { href: "/rentals", label: "Rentals" },
              { href: "/services", label: "All Services" },
              { href: "/WebDevelopment", label: "Web Development" },
              { href: "/About", label: "About" },
              { href: "/Contact", label: "Contact" },
              { href: "/Gallery", label: "Gallery" },
              { href: "/Feedback", label: "Feedback" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
          {session ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 border border-gray-200">
                  <AvatarImage
                    src={session.user?.image || undefined}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gray-800 text-white font-medium">
                    {avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {session.user?.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {session.user?.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full flex items-center justify-center gap-2 py-3 mt-4 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-medium transition-colors"
              >
                <FaSignOutAlt />
                Sign Out
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <Link
                href="/sign-in"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 font-medium hover:bg-gray-50 transition-colors"
              >
                <FaKey className="text-gray-400" />
                Sign In
              </Link>
              <Link
                href="/sign-up"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-black transition-colors"
              >
                <FaUser className="text-gray-400" />
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
