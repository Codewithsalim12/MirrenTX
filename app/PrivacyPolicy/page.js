"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaDatabase,
  FaUserShield,
  FaLock,
  FaCookie,
  FaUserCog,
  FaLink,
  FaEdit,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-6 pt-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40">
            <FaCheckCircle className="text-green-600" />
            <span className="text-gray-700 font-semibold">
              Effective Date: February 20, 2025
            </span>
          </div>
        </motion.div>

        {/* Privacy Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: FaDatabase,
              title: "1. Information We Collect",
              content:
                "We collect personal information (name, email, phone), usage data (IP address, browser type), and booking details. Payment information is processed securely and not stored on our servers.",
              gradient: "from-blue-500 to-cyan-500",
              details: [
                "Personal Information",
                "Usage Data",
                "Booking Details",
                "Secure Payment Processing",
              ],
            },
            {
              icon: FaUserShield,
              title: "2. How We Use Your Information",
              content:
                "Your information is used to process bookings, communicate with you, improve our services, ensure security, and provide customer support.",
              gradient: "from-green-500 to-emerald-500",
              details: [
                "Process Bookings",
                "Customer Communication",
                "Service Improvement",
                "Security & Support",
              ],
            },
            {
              icon: FaShieldAlt,
              title: "3. Sharing of Information",
              content:
                "We do not sell your data. Information is shared only when required by law or with trusted service providers who help us operate our business.",
              gradient: "from-purple-500 to-pink-500",
              details: [
                "No Data Selling",
                "Legal Requirements Only",
                "Trusted Partners",
                "Business Operations",
              ],
            },
            {
              icon: FaLock,
              title: "4. Data Security",
              content:
                "We implement industry-standard security measures including encryption, secure servers, and regular security audits, though no online transmission is 100% secure.",
              gradient: "from-orange-500 to-red-500",
              details: [
                "Encryption",
                "Secure Servers",
                "Regular Audits",
                "Industry Standards",
              ],
            },
            {
              icon: FaCookie,
              title: "5. Cookies and Tracking",
              content:
                "We use cookies to improve your experience, remember preferences, and analyze site usage. You can manage cookie settings through your browser.",
              gradient: "from-yellow-500 to-orange-500",
              details: [
                "Experience Enhancement",
                "Preference Storage",
                "Usage Analytics",
                "Browser Control",
              ],
            },
            {
              icon: FaUserCog,
              title: "6. Your Rights",
              content:
                "You can access, update, delete your data, opt out of marketing communications, and request data portability under applicable privacy laws.",
              gradient: "from-teal-500 to-cyan-500",
              details: [
                "Data Access",
                "Update Information",
                "Delete Data",
                "Marketing Opt-out",
              ],
            },
            {
              icon: FaLink,
              title: "7. Third-Party Links",
              content:
                "Our website may link to third-party sites. We are not responsible for their privacy practices. Please review their policies before sharing information.",
              gradient: "from-indigo-500 to-purple-500",
              details: [
                "External Links",
                "Third-party Sites",
                "Independent Policies",
                "User Responsibility",
              ],
            },
            {
              icon: FaEdit,
              title: "8. Changes to This Policy",
              content:
                "We may update this Privacy Policy periodically. Significant changes will be communicated via email or website notification. Continued use implies acceptance.",
              gradient: "from-pink-500 to-rose-500",
              details: [
                "Periodic Updates",
                "Email Notifications",
                "Website Alerts",
                "Continued Use Agreement",
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${section.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <section.icon className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {section.content}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {section.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"></div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-6">
            Questions About Your Privacy?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            We're committed to transparency. Contact us if you have any
            questions about how we handle your data.
          </p>
          <a
            href="mailto:mirrentx@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaEnvelope />
            Contact Privacy Team
          </a>
        </motion.div>
      </div>
    </div>
  );
}
