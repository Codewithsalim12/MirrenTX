"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaFileContract,
  FaUserCheck,
  FaCreditCard,
  FaExclamationTriangle,
  FaGavel,
  FaEdit,
  FaEnvelope,
} from "react-icons/fa";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-10 blur-3xl"></div>
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
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
              <FaFileContract className="text-white text-2xl" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. By
            accessing MirRenTX, you agree to be bound by these terms.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40">
            <FaShieldAlt className="text-green-600" />
            <span className="text-gray-700 font-semibold">
              Last Updated: February 2025
            </span>
          </div>
        </motion.div>

        {/* Terms Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: FaShieldAlt,
              title: "1. Introduction",
              content:
                "Welcome to MirRenTX. By accessing or using our services, you agree to be bound by these terms. Please read them carefully before proceeding with any bookings or services.",
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              icon: FaUserCheck,
              title: "2. Account Registration",
              content:
                "To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account details and all activities under your account.",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              icon: FaFileContract,
              title: "3. Rental Terms",
              content:
                "All rentals must be booked in advance. Users must comply with local laws and regulations. Any damages must be reported immediately. Equipment must be returned in the same condition as received.",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: FaCreditCard,
              title: "4. Payments & Cancellations",
              content:
                "Payments are required at the time of booking. Cancellations made within 24 hours may be subject to a fee. Refunds are processed according to our cancellation policy.",
              gradient: "from-orange-500 to-red-500",
            },
            {
              icon: FaExclamationTriangle,
              title: "5. User Responsibilities",
              content:
                "You agree to use our services responsibly and not engage in fraudulent or illegal activities. Users are liable for any damage or loss of rented equipment during the rental period.",
              gradient: "from-yellow-500 to-orange-500",
            },
            {
              icon: FaGavel,
              title: "6. Limitation of Liability",
              content:
                "We are not responsible for any direct or indirect damages arising from the use of our services. Our liability is limited to the rental fee paid for the specific service.",
              gradient: "from-teal-500 to-cyan-500",
            },
            {
              icon: FaEdit,
              title: "7. Changes to Terms",
              content:
                "We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the new terms. Users will be notified of significant changes.",
              gradient: "from-indigo-500 to-purple-500",
            },
            {
              icon: FaEnvelope,
              title: "8. Contact Us",
              content:
                "If you have any questions about these terms, feel free to contact us at mirrentx@gmail.com. We're here to help clarify any concerns you may have.",
              gradient: "from-pink-500 to-rose-500",
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
              <p className="text-gray-600 leading-relaxed text-lg">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-6">
            Need Help Understanding These Terms?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Our team is here to answer any questions you may have about our
            terms of service.
          </p>
          <a
            href="mailto:mirrentx@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaEnvelope />
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
