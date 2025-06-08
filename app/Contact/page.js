"use client";
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaBell,
  FaUser,
  FaComments,
  FaStar,
  FaHeart,
  FaCheckCircle,
  FaGlobe,
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaQuoteLeft,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.warning("Please fill in all the fields.", {
        position: "top-right",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
      });
      return;
    }
    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid phone number.", {
        position: "top-right",
      });
      return;
    }

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      toast.success("Message sent successfully!", {
        position: "top-right",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
      });
    }
  };

  const subscribe = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
      });
      return;
    }

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscribeEmail: email }),
    });

    const result = await response.json();
    if (result.success) {
      toast.success(`${email} subscribed successfully!`, {
        position: "top-right",
      });
      setEmail("");
    } else {
      toast.error("Failed to subscribe. Please try again later.", {
        position: "top-right",
      });
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {/* Modern Hero Section */}
        <section className="relative overflow-hidden py-20">
          {/* Floating Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-6 py-3 mb-8 mt-4"
            >
              <FaComments className="text-indigo-600 animate-pulse" />
              <span className="text-indigo-700 font-semibold ">
                Get in Touch
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6"
            >
              <span className="text-gray-900">Contact</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                MirRenTX
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              We'd love to hear from you! Whether you have questions, feedback,
              or want to connect,
              <br />
              <span className="text-indigo-600 font-semibold">
                we're here to assist you.
              </span>
            </motion.p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {" "}
            {/* Modern Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/5 space-y-8"
            >
              {/* Contact Information Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-4">
                    <FaUser className="text-indigo-600" />
                    <span className="text-indigo-700 font-semibold">
                      Contact Info
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Get in Touch
                  </h2>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: FaMapMarkerAlt,
                      title: "Our Location",
                      content: "Awathkulla, Kralpora",
                      subtitle:
                        "Kupwara, Jammu & Kashmir, India\nStreet: MirComputers",
                      color: "from-red-500 to-pink-500",
                      bgColor: "from-red-50 to-pink-50",
                    },
                    {
                      icon: FaPhone,
                      title: "Phone Number",
                      content: "+91-8082815863",
                      subtitle: "Available 24/7 for your convenience",
                      color: "from-green-500 to-emerald-500",
                      bgColor: "from-green-50 to-emerald-50",
                      href: "tel:+91-8082815863",
                    },
                    {
                      icon: FaEnvelope,
                      title: "Email Address",
                      content: "mirrentx@gmail.com",
                      subtitle: "We'll respond within 24 hours",
                      color: "from-blue-500 to-cyan-500",
                      bgColor: "from-blue-50 to-cyan-50",
                      href: "mailto:mirrentx@gmail.com",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`group p-6 rounded-2xl bg-gradient-to-r ${item.bgColor} border border-white/50 hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <item.icon className="text-white text-xl" />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg mb-1">
                            {item.title}
                          </h3>
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-semibold text-lg"
                            >
                              {item.content}
                            </Link>
                          ) : (
                            <p className="text-gray-700 font-semibold text-lg">
                              {item.content}
                            </p>
                          )}
                          <p className="text-gray-500 text-sm mt-1 whitespace-pre-line">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats Card */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Why Choose Us?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: FaClock, label: "24/7 Support", value: "Always" },
                    { icon: FaShieldAlt, label: "Trusted", value: "100%" },
                    { icon: FaRocket, label: "Fast Response", value: "< 1hr" },
                    {
                      icon: FaHeart,
                      label: "Satisfaction",
                      value: "Guaranteed",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl"
                    >
                      <stat.icon className="text-2xl mx-auto mb-2" />
                      <div className="text-lg font-bold">{stat.value}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Modern Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-3/5"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-4">
                    <FaPaperPlane className="text-purple-600" />
                    <span className="text-purple-700 font-semibold">
                      Send Message
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Fill out the form below and we'll get back to you soon
                  </p>
                </div>

                <form onSubmit={sendMessage} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="firstName"
                        className="block text-gray-700 mb-2 font-semibold"
                      >
                        First Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          className="w-full p-4 border-2 border-gray-200 rounded-2xl text-gray-800 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          value={formData.firstName}
                          onChange={handleFormChange}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                          <FaUser className="text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" />
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label
                        htmlFor="lastName"
                        className="block text-gray-700 mb-2 font-semibold"
                      >
                        Last Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          className="w-full p-4 border-2 border-gray-200 rounded-2xl text-gray-800 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          value={formData.lastName}
                          onChange={handleFormChange}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                          <FaUser className="text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2 font-semibold"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        className="w-full p-4 border-2 border-gray-200 rounded-2xl text-gray-800 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        value={formData.email}
                        onChange={handleFormChange}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <FaEnvelope className="text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 mb-2 font-semibold"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="9876543210"
                        className="w-full p-4 border-2 border-gray-200 rounded-2xl text-gray-800 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        value={formData.phone}
                        onChange={handleFormChange}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <FaPhone className="text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2 font-semibold"
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your event requirements..."
                        className="w-full p-4 border-2 border-gray-200 rounded-2xl text-gray-800 h-32 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                        value={formData.message}
                        onChange={handleFormChange}
                      ></textarea>
                      <div className="absolute top-4 right-4">
                        <FaComments className="text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Modern Map Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden"
          >
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 mb-4">
                  <FaMapMarkerAlt className="text-green-600" />
                  <span className="text-green-700 font-semibold">Find Us</span>
                </div>

                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  Our Location
                </h2>
                <p className="text-gray-600 text-lg">
                  Visit us at Awathkulla, Kralpora, Kupwara - We're easy to
                  find!
                </p>
              </div>
            </div>

            <div className="relative h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.041567423084!2d74.2665783152159!3d34.10479998059084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1b0b8e8a6a6a9%3A0x8a6a6a9e1b0b8e8a!2sKupwara%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-b-3xl"
              ></iframe>

              {/* Map overlay with contact info */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">MirRenTX</h3>
                    <p className="text-sm text-gray-600">
                      Awathkulla, Kralpora
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        {/* Modern Newsletter Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
                <FaBell className="text-yellow-400 animate-pulse" />
                <span className="text-white font-semibold">Stay Connected</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated with
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Latest Offers
                </span>
              </h2>

              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Subscribe to our newsletter to get the latest updates on new
                rentals, special discounts, and exclusive event planning tips.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
                <div className="relative w-full sm:flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-4 pr-12 rounded-2xl text-gray-800 focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 border-white/20"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  onClick={subscribe}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FaBell className="group-hover:animate-pulse" />
                  Subscribe Now
                </motion.button>
              </div>

              {/* Trust indicators */}
              <div className="flex justify-center items-center gap-8 mt-8 text-white/60">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  <span className="text-sm">No Spam</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-blue-400" />
                  <span className="text-sm">Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHeart className="text-red-400" />
                  <span className="text-sm">Exclusive Offers</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
