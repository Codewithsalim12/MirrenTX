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
import Logo from "./Logo";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const router = useRouter();

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
    <nav className="fixed w-full top-0 z-50 transition-all duration-300">
      {/* Enhanced Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/90 to-indigo-900/90 backdrop-blur-2xl border-b border-white/20 shadow-2xl"></div>

      {/* Dynamic Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-indigo-600/40 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              href="/"
              className="group transition-all duration-500 hover:scale-105"
            >
              <Logo
                size="default"
                showText={true}
                textColor="default"
                animate={true}
                className="drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Enhanced Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="relative px-3 py-2 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-xl hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="relative z-10 tracking-wide text-sm">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>
            <Link
              href="/rentals"
              className="relative px-3 py-2 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-xl hover:bg-white/10 hover:shadow-lg hover:shadow-green-500/20"
            >
              <span className="relative z-10 tracking-wide text-sm">
                Rentals
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>

            {/* Enhanced Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="relative flex items-center px-3 py-2 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-xl hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <span className="relative z-10 tracking-wide text-sm">
                  Services
                </span>
                <ChevronDown
                  className={`ml-1 transition-all duration-500 ${
                    servicesDropdownOpen
                      ? "rotate-180 text-purple-300 scale-110"
                      : ""
                  }`}
                  size={14}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
                <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </button>
              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-4 w-72 bg-white/5 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl py-4 z-50 animate-in slide-in-from-top-4 duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-purple-900/90 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.3),transparent_70%)] rounded-3xl"></div>
                  <div className="relative z-10">
                    <Link
                      href="/services"
                      className="flex items-center gap-4 px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-2xl mx-3 group hover:shadow-lg hover:shadow-blue-500/20"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300"></div>
                      <span className="font-semibold tracking-wide">
                        All Services
                      </span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      </div>
                    </Link>
                    <Link
                      href="/WebDevelopment"
                      className="flex items-center gap-4 px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-2xl mx-3 group hover:shadow-lg hover:shadow-purple-500/20"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300"></div>
                      <span className="font-semibold tracking-wide">
                        Web Development
                      </span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/About"
              className="relative px-3 py-2 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-xl hover:bg-white/10 hover:shadow-lg hover:shadow-teal-500/20"
            >
              <span className="relative z-10 tracking-wide text-sm">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>
            <Link
              href="/Contact"
              className="relative px-3 py-2 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-xl hover:bg-white/10 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <span className="relative z-10 tracking-wide text-sm">
                Contact
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>
            <Link
              href="/Gallery"
              className="relative px-3 py-2 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-xl hover:bg-white/10 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <span className="relative z-10 tracking-wide text-sm">
                Gallery
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-rose-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>
            <Link
              href="/Feedback"
              className="relative px-3 py-2 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-xl hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <span className="relative z-10 tracking-wide text-sm">
                Feedback
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-blue-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>
          </div>

          {/* Tablet/Medium Device Navigation - Simplified */}
          <div className="hidden md:flex lg:hidden items-center gap-1">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <Avatar className="w-6 h-6 border border-white/30 group-hover:border-white/50 transition-all duration-300">
                    <AvatarImage
                      src={session.user?.image || undefined}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-xs">
                      {avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown
                    className={`w-3 h-3 text-white/70 transition-all duration-200 ${
                      profileDropdownOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-36 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl py-1 z-50 animate-in slide-in-from-top-2 duration-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-blue-900/90 rounded-lg"></div>
                    <div className="relative z-10">
                      {/* User Info */}
                      <div className="px-2 py-1 border-b border-white/10">
                        <p className="text-white font-medium text-xs truncate">
                          {session.user?.name}
                        </p>
                        <p className="text-white/60 text-xs truncate">
                          {session.user?.email}
                        </p>
                      </div>
                      {/* Logout Button */}
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-1 w-full px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                      >
                        <FaSignOutAlt className="text-red-400 text-xs group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium text-xs">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-2 py-1 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
                >
                  <Link href="/sign-in" className="flex items-center">
                    <span className="relative z-10 text-xs">Sign In</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-2 py-1 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
                >
                  <Link href="/sign-up" className="flex items-center">
                    <span className="relative z-10 text-xs">Sign Up</span>
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Desktop User Profile or Sign-In/Sign-Up Section */}
          <div className="hidden lg:flex items-center gap-3">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <Avatar className="w-7 h-7 border-2 border-white/30 group-hover:border-white/50 transition-all duration-300">
                    <AvatarImage
                      src={session.user?.image || undefined}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-xs">
                      {avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden xl:block font-medium text-white text-xs max-w-20 truncate">
                    {session.user?.name}
                  </span>
                  <ChevronDown
                    className={`w-3 h-3 text-white/70 transition-all duration-200 ${
                      profileDropdownOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-blue-900/90 rounded-xl"></div>
                    <div className="relative z-10">
                      {/* User Info */}
                      <div className="px-3 py-2 border-b border-white/10">
                        <p className="text-white font-medium text-xs truncate">
                          {session.user?.name}
                        </p>
                        <p className="text-white/60 text-xs truncate">
                          {session.user?.email}
                        </p>
                      </div>
                      {/* Logout Button */}
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 w-full px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                      >
                        <FaSignOutAlt className="text-red-400 text-xs group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium text-xs">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg rounded-lg px-3 py-1.5 transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-xl group"
                >
                  <Link href="/sign-in">
                    <span className="relative z-10 font-semibold text-xs">
                      Sign In
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg rounded-lg px-3 py-1.5 transition-all duration-300 hover:from-purple-700 hover:to-purple-800 hover:shadow-xl group"
                >
                  <Link href="/sign-up">
                    <span className="relative z-10 font-semibold text-xs">
                      Sign Up
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button Only */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative p-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 transition-all duration-500 group hover:shadow-2xl hover:shadow-blue-500/30"
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                {menuOpen ? (
                  <X
                    size={16}
                    className="text-white transition-all duration-500 group-hover:rotate-180 group-hover:scale-110"
                  />
                ) : (
                  <Menu
                    size={16}
                    className="text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100"></div>
              <div className="absolute inset-0 border border-white/40 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-300">
          <div className="fixed top-0 right-0 h-full w-64 sm:w-72 bg-gradient-to-br from-blue-900/95 via-purple-900/95 to-teal-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-out flex flex-col">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <Link
                href="/"
                className="flex items-center group"
                onClick={handleLinkClick}
              >
                <Logo
                  size="small"
                  showText={true}
                  textColor="default"
                  animate={true}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              >
                <X
                  size={16}
                  className="text-white group-hover:rotate-90 transition-transform duration-300"
                />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 py-2 overflow-y-auto">
              {[
                { href: "/", label: "Home" },
                { href: "/rentals", label: "Rentals" },
                { href: "/services", label: "Services" },
                { href: "/WebDevelopment", label: "Web Development" },
                { href: "/About", label: "About" },
                { href: "/Contact", label: "Contact" },
                { href: "/Gallery", label: "Gallery" },
                { href: "/Feedback", label: "Feedback" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm font-medium border-b border-white/10 last:border-b-0"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Authentication Section */}
            <div className="px-4 py-2 border-t border-white/10">
              {session ? (
                <div className="space-y-2">
                  {/* User Profile Card */}
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-white/10 border border-white/20">
                    <Avatar className="w-6 h-6 border border-white/30">
                      <AvatarImage
                        src={session.user?.image || undefined}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-xs">
                        {avatarFallback}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-white text-xs truncate">
                        {session.user?.name}
                      </p>
                      <p className="text-white/60 text-xs truncate">
                        {session.user?.email}
                      </p>
                    </div>
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-all duration-300 group"
                  >
                    <FaSignOutAlt className="text-xs group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium text-xs">Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg py-2 shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
                  >
                    <Link
                      href="/sign-in"
                      onClick={handleLinkClick}
                      className="flex items-center justify-center gap-2"
                    >
                      <FaKey className="text-xs group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium text-xs">Sign In</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg py-2 shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
                  >
                    <Link
                      href="/sign-up"
                      onClick={handleLinkClick}
                      className="flex items-center justify-center gap-2"
                    >
                      <FaUser className="text-xs group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium text-xs">Sign Up</span>
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
