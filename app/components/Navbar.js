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
      className="fixed top-0 left-0 right-0 z-[100] py-4 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-10 h-16 lg:h-18 px-6 bg-white/80 backdrop-blur-2xl rounded-full border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500 ${menuOpen ? "opacity-0 invisible scale-95" : "opacity-100 visible scale-100"}`}>
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="transform transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Logo
                size="default"
                showText={true}
                textColor="dark"
                animate={false}
              />
            </Link>
          </div>

          {/* Elite Desktop Navigation Links - Modern Refinement */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/rentals", label: "Rentals" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 group whitespace-nowrap ${
                  pathname === item.href ? "text-purple-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}

            {/* Premium Services Dropdown */}
            <div 
              className="relative group/services flex-shrink-0"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="flex items-center py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-all duration-300 whitespace-nowrap"
              >
                Services
                <ChevronDown
                  className={`ml-1.5 transition-transform duration-500 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  size={12}
                  strokeWidth={2}
                />
              </button>
              
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full w-72 bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-[32px] shadow-2xl py-5 px-4 transition-all duration-500 transform origin-top ${
                  servicesDropdownOpen ? "opacity-100 scale-100 translate-y-3" : "opacity-0 scale-95 translate-y-0 pointer-events-none"
                }`}
              >
                <div className="space-y-1.5">
                  <Link
                    href="/services"
                    className="flex items-center gap-4 p-3.5 hover:bg-slate-50 transition-all duration-300 rounded-2xl group/item"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl group-hover/item:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-semibold text-[10px] uppercase tracking-widest text-slate-900">All Services</span>
                      <span className="block text-[10px] text-slate-400 font-medium">Full event catalog</span>
                    </div>
                  </Link>
                  <Link
                    href="/WebDevelopment"
                    className="flex items-center gap-4 p-3.5 hover:bg-slate-50 transition-all duration-300 rounded-2xl group/item"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-purple-50 text-purple-600 rounded-xl group-hover/item:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-semibold text-[10px] uppercase tracking-widest text-slate-900">Web Dev</span>
                      <span className="block text-[10px] text-slate-400 font-medium">Digital showcase</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {[
              { href: "/About", label: "About" },
              { href: "/Gallery", label: "Gallery" },
              { href: "/Feedback", label: "Feedback" },
              { href: "/Contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 group whitespace-nowrap ${
                  pathname === item.href ? "text-purple-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Desktop Elite Interaction Section - Standardized gap from links */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            {session ? (
              <div 
                className="relative"
                onMouseEnter={() => setProfileDropdownOpen(true)}
                onMouseLeave={() => setProfileDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-3 p-1.5 rounded-full border border-slate-100 hover:border-purple-200 transition-all duration-300 bg-white"
                >
                  <Avatar className="w-8 h-8 ring-1 ring-slate-100">
                    <AvatarImage src={session.user?.image || undefined} className="object-cover" />
                    <AvatarFallback className="bg-slate-900 text-white font-semibold text-[10px]">
                      {avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${profileDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                <div 
                  className={`absolute right-0 top-full pt-4 w-64 transition-all duration-500 origin-top-right transform ${
                    profileDropdownOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-[32px] shadow-2xl overflow-hidden p-2">
                    <div className="px-6 py-5 bg-slate-50/50 rounded-[24px] mb-1.5">
                      <p className="text-slate-900 font-semibold text-[11px] uppercase tracking-wider truncate">{session.user?.name}</p>
                      <p className="text-slate-400 text-[10px] font-medium truncate mt-0.5">{session.user?.email}</p>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-3 w-full px-5 py-3.5 text-red-600 hover:bg-red-50 rounded-[20px] transition-all duration-300 group/logout"
                    >
                      <FaSignOutAlt className="text-xs group-hover:-translate-x-1 transition-transform" />
                      <span className="font-semibold text-[10px] uppercase tracking-wider">Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 flex-shrink-0">
                <Link 
                  href="/sign-in" 
                  className="px-6 py-3 text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap flex-shrink-0 text-slate-600 hover:text-slate-900 transition-all active:scale-95 bg-white border border-slate-100 rounded-full shadow-sm"
                >
                  Sign in
                </Link>
                <Link 
                  href="/sign-up" 
                  className="px-6 py-3 text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap flex-shrink-0 text-white bg-slate-900 hover:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button  */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-slate-900 bg-slate-50 rounded-full transition-all active:scale-90"
              aria-label="Toggle menu"
            >
              <Menu size={32} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </nav>

      {/* Modern Full-Screen Mobile Navigation Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-[110] bg-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full w-full">
          {/* Mobile Header with Close Button */}
          <div className="flex justify-between items-center px-6 h-16 border-b border-gray-100">
            <Link
              href="/"
              className="flex items-center transform transition-transform active:scale-95"
              onClick={handleLinkClick}
            >
              <Logo
                size="default"
                showText={true}
                textColor="dark"
                animate={false}
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 bg-slate-50 text-slate-900 rounded-full transition-all active:scale-90 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>

          {/* Links Section - Compacted font and padding */}
          <div className="flex-1 px-8 py-6 overflow-y-hidden">
            <div className="flex flex-col space-y-1">
              {[
                { href: "/", label: "Home" },
                { href: "/rentals", label: "Rentals" },
                { href: "/services", label: "Our Services" },
                { href: "/WebDevelopment", label: "Web Development" },
                { href: "/About", label: "About MirRenTX" },
                { href: "/Gallery", label: "Product Gallery" },
                { href: "/Feedback", label: "Client Feedback" },
                { href: "/Contact", label: "Get In Touch" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group py-3 border-b border-gray-50 flex items-center justify-between transition-all duration-300 ${
                    pathname === item.href ? "text-purple-600" : "text-slate-900"
                  }`}
                  onClick={handleLinkClick}
                >
                  <span className="text-base font-semibold tracking-tight uppercase whitespace-nowrap">
                    {item.label}
                  </span>
                  <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-purple-600 transition-colors" size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Footer / Auth Section - Compacted */}
          <div className="px-8 pb-10 bg-white">
            {session ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-3xl border border-gray-100 shadow-sm">
                  <Avatar className="w-12 h-12 ring-2 ring-white">
                    <AvatarImage
                      src={session.user?.image || undefined}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-slate-900 text-white font-semibold text-sm">
                      {avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900 text-sm truncate uppercase tracking-tight">
                      {session.user?.name}
                    </p>
                    <p className="text-slate-500 text-[10px] truncate">
                      {session.user?.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-[20px] bg-white border border-red-100 text-red-600 font-semibold text-[10px] uppercase tracking-wider shadow-sm active:scale-95 transition-all"
                >
                  <FaSignOutAlt className="text-xs" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/sign-in"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 py-4 rounded-[20px] bg-white border border-gray-200 text-slate-900 font-semibold text-[10px] uppercase tracking-wider active:scale-95 transition-all shadow-sm"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 py-4 rounded-[20px] bg-slate-900 text-white font-semibold text-[10px] uppercase tracking-wider active:scale-95 transition-all shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
