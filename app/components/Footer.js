import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaHeart,
  FaArrowUp,
  FaShieldAlt,
  FaStar,
  FaRocket,
  FaGem,
  FaAward,
  FaUsers,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-teal-900/20"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(144)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 8,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rotate-45"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Top Section - Company Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <Link href="/" className="group">
                <Logo
                  size="xl"
                  showText={true}
                  textColor="default"
                  animate={true}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Elevating Events
              </span>
              <br />
              <span className="text-white">Across Kupwara, Kashmir</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Premium rental services that transform ordinary moments into
              extraordinary memories. Your vision, our expertise, unforgettable
              results.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: FaUsers, number: "500+", label: "Happy Clients" },
                { icon: FaAward, number: "50+", label: "Events Completed" },
                { icon: FaRocket, number: "5+", label: "Years Experience" },
                { icon: FaGem, number: "100%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="text-white text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Links Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <FaRocket className="text-white text-sm" />
                </div>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Quick Links
                </span>
              </h3>
              <ul className="space-y-4">
                {[
                  ["Home", "/"],
                  ["About Us", "/About"],
                  ["Services", "/services"],
                  ["Rentals", "/rentals"],
                  ["Gallery", "/Gallery"],
                  ["Contact", "/Contact"],
                ].map(([title, url]) => (
                  <li key={title}>
                    <Link
                      href={url}
                      className="group flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                    >
                      <div className="w-2 h-2 bg-gray-500 rounded-full group-hover:bg-purple-400 group-hover:scale-150 transition-all duration-300"></div>
                      <span className="group-hover:translate-x-2 transition-transform duration-300 font-medium">
                        {title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-900/20 to-teal-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:bg-white/10">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">
                        Kupwara, J&K
                      </p>
                      <p className="text-gray-400">Kashmir, India</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="group">
                  <Link href="tel:+918082815863" className="block">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:bg-white/10">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaPhone className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">
                          +91-8082815863
                        </p>
                        <p className="text-gray-400">24/7 Available</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="group">
                  <Link href="mailto:mirrentx@gmail.com" className="block">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:bg-white/10">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaEnvelope className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">
                          mirrentx@gmail.com
                        </p>
                        <p className="text-gray-400">Quick Response</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Services Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <FaGem className="text-white text-sm" />
                </div>
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h3>

              <ul className="space-y-4">
                {[
                  "Camera & Photography",
                  "Lighting & Decoration",
                  "Tent & Camping",
                  "Generator & Power",
                  "Video Production",
                  "Event Planning",
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-3 text-gray-300 hover:text-green-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                  >
                    <div className="w-2 h-2 bg-gray-500 rounded-full group-hover:bg-green-400 group-hover:scale-150 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 font-medium">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h4 className="text-2xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Connect With Us
              </span>
            </h4>
            <div className="flex justify-center space-x-6">
              {[
                [FaFacebook, "#", "from-blue-600 to-blue-700", "Facebook"],
                [FaInstagram, "#", "from-pink-500 to-rose-600", "Instagram"],
                [FaTwitter, "#", "from-sky-400 to-blue-500", "Twitter"],
                [FaLinkedin, "#", "from-blue-600 to-indigo-700", "LinkedIn"],
                [
                  FaYoutube,
                  "https://youtube.com/@scenicwanderers?si=me6NdoJfKjh8gdYl",
                  "from-red-500 to-red-600",
                  "YouTube",
                ],
              ].map(([Icon, url, gradientClass, label]) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={url}
                    className={`group relative block p-4 bg-gradient-to-r ${gradientClass} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
                    aria-label={`Visit our ${label} page`}
                    target={url.startsWith("http") ? "_blank" : "_self"}
                    rel={url.startsWith("http") ? "noopener noreferrer" : ""}
                  >
                    <Icon className="text-white text-2xl" />
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {label}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

            <p className="text-white font-semibold text-lg">
              &copy; {new Date().getFullYear()} MirRenTX Rental Service
            </p>

            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <FaHeart className="text-red-400 animate-pulse" /> in
              Kashmir, India
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>Powered by</span>
              <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Next.js & Tailwind CSS
              </span>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mt-6">
              <Link
                href="/PrivacyPolicy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href="/TermsofService"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <span>•</span>
              <Link
                href="/Contact"
                className="hover:text-white transition-colors duration-300"
              >
                Support
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg group-hover:animate-bounce" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
