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
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className="relative px-5 py-3 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-2xl hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="relative z-10 tracking-wide">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>
            <Link
              href="/rentals"
              className="relative px-5 py-3 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-2xl hover:bg-white/10 hover:shadow-lg hover:shadow-green-500/20"
            >
              <span className="relative z-10 tracking-wide">Rentals</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>

            {/* Enhanced Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="relative flex items-center px-5 py-3 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-2xl hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <span className="relative z-10 tracking-wide">Services</span>
                <ChevronDown
                  className={`ml-2 transition-all duration-500 ${
                    servicesDropdownOpen
                      ? "rotate-180 text-purple-300 scale-110"
                      : ""
                  }`}
                  size={16}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
                <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
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
              className="relative px-5 py-3 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-2xl hover:bg-white/10 hover:shadow-lg hover:shadow-teal-500/20"
            >
              <span className="relative z-10 tracking-wide">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>
            <Link
              href="/Contact"
              className="relative px-5 py-3 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-2xl hover:bg-white/10 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <span className="relative z-10 tracking-wide">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>
            <Link
              href="/Gallery"
              className="relative px-5 py-3 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-2xl hover:bg-white/10 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <span className="relative z-10 tracking-wide">Gallery</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-rose-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>
            <Link
              href="/Feedback"
              className="relative px-5 py-3 text-white/90 hover:text-white font-semibold transition-all duration-500 group rounded-2xl hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <span className="relative z-10 tracking-wide">Feedback</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Link>
          </div>

          {/* User Profile or Sign-In/Sign-Up Section */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 px-2 py-2 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <Avatar className="w-8 h-8 border-2 border-white/30 group-hover:border-white/50 transition-all duration-300">
                    <AvatarImage
                      src={session.user?.image || undefined}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-xs">
                      {avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown
                    className={`w-4 h-4 text-white/70 transition-all duration-200 ${
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
                        <p className="text-white font-medium text-sm truncate">
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
                        <FaSignOutAlt className="text-red-400 text-sm group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium text-sm">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
                >
                  <Link href="/sign-in" className="flex items-center gap-2">
                    <span className="relative z-10 text-sm">Sign In</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
                >
                  <Link href="/sign-up" className="flex items-center gap-2">
                    <span className="relative z-10 text-sm">Sign Up</span>
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
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <Avatar className="w-8 h-8 border-2 border-white/30 group-hover:border-white/50 transition-all duration-300">
                    <AvatarImage
                      src={session.user?.image || undefined}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-xs">
                      {avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden xl:block font-medium text-white text-sm max-w-24 truncate">
                    {session.user?.name}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-white/70 transition-all duration-200 ${
                      profileDropdownOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-blue-900/90 rounded-xl"></div>
                    <div className="relative z-10">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-white font-medium text-sm truncate">
                          {session.user?.name}
                        </p>
                        <p className="text-white/60 text-xs truncate">
                          {session.user?.email}
                        </p>
                      </div>
                      {/* Logout Button */}
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-3 w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                      >
                        <FaSignOutAlt className="text-red-400 text-sm group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium text-sm">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg rounded-lg px-3 xl:px-6 py-2 transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-xl group"
                >
                  <Link href="/sign-in">
                    <span className="relative z-10 font-semibold text-sm xl:text-base">
                      Sign In
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg rounded-lg px-3 xl:px-6 py-2 transition-all duration-300 hover:from-purple-700 hover:to-purple-800 hover:shadow-xl group"
                >
                  <Link href="/sign-up">
                    <span className="relative z-10 font-semibold text-sm xl:text-base">
                      Sign Up
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative p-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 transition-all duration-500 group hover:shadow-2xl hover:shadow-blue-500/30"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {menuOpen ? (
                <X
                  size={22}
                  className="text-white transition-all duration-500 group-hover:rotate-180 group-hover:scale-110"
                />
              ) : (
                <Menu
                  size={22}
                  className="text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100"></div>
            <div className="absolute inset-0 border border-white/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Pulse effect */}
            <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-300">
          <div className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-gradient-to-br from-blue-900/95 via-purple-900/95 to-teal-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-out">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
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
                className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              >
                <X
                  size={20}
                  className="text-white group-hover:rotate-90 transition-transform duration-300"
                />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 px-6 py-6 space-y-3 overflow-y-auto">
              {[
                {
                  href: "/",
                  label: "Home",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  href: "/rentals",
                  label: "Rentals",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  href: "/services",
                  label: "Services",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  href: "/WebDevelopment",
                  label: "Web Development",
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  href: "/About",
                  label: "About",
                  gradient: "from-teal-500 to-blue-500",
                },
                {
                  href: "/Contact",
                  label: "Contact",
                  gradient: "from-indigo-500 to-purple-500",
                },
                {
                  href: "/Gallery",
                  label: "Gallery",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  href: "/Feedback",
                  label: "Feedback",
                  gradient: "from-yellow-500 to-orange-500",
                },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-4 px-4 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
                  onClick={handleLinkClick}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient} group-hover:scale-125 transition-transform duration-300`}
                  ></div>
                  <span className="text-white font-medium group-hover:text-white/90 transition-colors duration-300">
                    {item.label}
                  </span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-white/60"></div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Authentication Section */}
            <div className="px-6 py-6 border-t border-white/10 space-y-4">
              {session ? (
                <div className="space-y-3">
                  {/* User Profile Card */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20">
                    <Avatar className="w-12 h-12 border-2 border-white/30">
                      <AvatarImage
                        src={session.user?.image || undefined}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold">
                        {avatarFallback}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-white text-lg truncate">
                        {session.user?.name}
                      </p>
                      <p className="text-white/60 text-sm truncate">
                        {session.user?.email}
                      </p>
                    </div>
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-all duration-300 group"
                  >
                    <FaSignOutAlt className="text-lg group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
                  >
                    <Link
                      href="/sign-in"
                      onClick={handleLinkClick}
                      className="flex items-center justify-center gap-3"
                    >
                      <FaKey className="text-lg group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold">Sign In</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
                  >
                    <Link
                      href="/sign-up"
                      onClick={handleLinkClick}
                      className="flex items-center justify-center gap-3"
                    >
                      <FaUser className="text-lg group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold">Sign Up</span>
                    </Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Footer */}
            <div className="px-6 py-4 border-t border-white/10 mt-auto">
              <div className="text-center space-y-2">
                <p className="text-white/70 text-sm font-medium">
                  © 2025 MirRenTX. All rights reserved.
                </p>
                <p className="text-white/50 text-xs leading-relaxed">
                  Premium Event Rentals in Kashmir
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <p className="text-white/40 text-xs">
                    Trusted by 50+ Happy Customers
                  </p>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
