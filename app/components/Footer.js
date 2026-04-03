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
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide entirely on Admin route
  if (pathname?.startsWith("/Admin")) return null;

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
    <footer className="bg-slate-50 border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] font-['Inter_Tight'] pt-4">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Segment: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo Section */}
          <Link href="/" className="group flex items-center justify-center transform transition-all duration-300 hover:scale-105 active:scale-95">
            <Logo 
              size="default" 
              showText={true} 
              textColor="dark" 
              animate={false} 
            />
          </Link>

          {/* Minimal Social Links */}
          <div className="flex items-center gap-4">
            {[ 
              { Icon: FaFacebook, url: "#" },
              { Icon: FaInstagram, url: "#" },
              { Icon: FaTwitter, url: "#" },
              { Icon: FaLinkedin, url: "#" },
              { Icon: FaYoutube, url: "https://youtube.com/@scenicwanderers?si=me6NdoJfKjh8gdYl" },
            ].map(({ Icon, url }, i) => (
              <Link 
                key={i}
                href={url}
                target={url.startsWith("http") ? "_blank" : "_self"}
                rel={url.startsWith("http") ? "noopener noreferrer" : ""}
                className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-[0_4px_12px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:-translate-y-1"
              >
                <Icon className="text-lg" />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100 mb-8"></div>

        {/* Bottom Segment: Copyright & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-medium text-slate-500">
           
           <div className="flex flex-col sm:flex-row items-center gap-2 text-center md:text-left">
             <span>&copy; {new Date().getFullYear()} MirRenTX Rental Service.</span>
             <span className="hidden sm:inline text-slate-300">•</span>
             <span className="flex items-center gap-1.5">Made with <FaHeart className="text-red-400 animate-pulse text-[10px]" /> in Kashmir, India</span>
           </div>

           <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/PrivacyPolicy" className="hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-widest text-[10px]">
                Privacy Policy
              </Link>
              <Link href="/TermsofService" className="hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-widest text-[10px]">
                Terms of Service
              </Link>
              <Link href="/Contact" className="hover:text-blue-600 transition-colors duration-300 font-bold uppercase tracking-widest text-[10px]">
                Support
              </Link>
           </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:bg-blue-600 transition-all group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-sm group-hover:animate-bounce" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
