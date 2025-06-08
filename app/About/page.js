"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaShoppingCart,
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaStar,
  FaRocket,
  FaHeart,
  FaUsers,
  FaAward,
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPhone,
  FaGlobe,
  FaPlay,
  FaPalette,
  FaMagic,
  FaLightbulb,
  FaCrown,
  FaGem,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import ProtectedRoute from "../components/ProtectedRoute";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/Readmore-img.avif",
    title: "Who We Are",
    description: "Discover our journey and passion for excellence.",
  },
  {
    image: "about-slider2.avif",
    title: "Our Mission",
    description: "Striving to provide the best services for our customers.",
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        {/* SECTION 1: Geometric Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 pt-16 lg:pt-20">
          {/* Geometric Shapes Background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 transform rotate-45 opacity-20 animate-spin"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-12 opacity-25"></div>
            <div className="absolute bottom-40 right-10 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-4 border-orange-300 rounded-full opacity-10 animate-ping"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Decorative Element */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                  <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
                    About Us
                  </span>
                  <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500"></div>
                </div>

                {/* Title */}
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  <span className="text-gray-900">Our</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    Journey
                  </span>
                  <br />
                  <span className="text-gray-700">Begins</span>
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed">
                  Passionate entrepreneurs who turned their vision into a
                  premier local event rental service, delivering innovation and
                  excellence to every celebration.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/rentals">
                    <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                      <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
                      Start Your Event
                    </button>
                  </Link>

                  <Link href="#story">
                    <button className="group border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-3">
                      <FaHeart className="group-hover:scale-110 transition-transform duration-300" />
                      Read Our Story
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: FaCalendarAlt,
                      number: "2021",
                      label: "Founded",
                      color: "from-orange-400 to-red-500",
                    },
                    {
                      icon: FaUsers,
                      number: "50+",
                      label: "Happy Clients",
                      color: "from-red-400 to-pink-500",
                    },
                    {
                      icon: FaAward,
                      number: "50+",
                      label: "Events",
                      color: "from-pink-400 to-purple-500",
                    },
                    {
                      icon: FaHeart,
                      number: "100%",
                      label: "Satisfaction",
                      color: "from-purple-400 to-indigo-500",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="group relative"
                    >
                      <div
                        className={`bg-gradient-to-br ${stat.color} p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                      >
                        <div className="text-center text-white">
                          <stat.icon className="text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                          <div className="text-2xl font-bold">
                            {stat.number}
                          </div>
                          <div className="text-sm opacity-90">{stat.label}</div>
                        </div>
                      </div>

                      {/* Floating decoration */}
                      <div
                        className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${stat.color} rounded-full opacity-60 group-hover:animate-ping`}
                      ></div>
                    </motion.div>
                  ))}
                </div>

                {/* Central decorative element */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 border-4 border-dashed border-orange-300 rounded-full animate-spin-slow opacity-30"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Neumorphism About Section */}
        <section
          id="story"
          className="bg-gradient-to-br from-gray-100 to-gray-200 py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Section with Neumorphism */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative group">
                  {/* Neumorphic container */}
                  <div className="bg-gray-200 rounded-[3rem] p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:shadow-[inset_20px_20px_60px_#bebebe,inset_-20px_-20px_60px_#ffffff] transition-all duration-700">
                    <Image
                      src="/owner-img.jpg"
                      alt="About MirRenTX"
                      width={600}
                      height={700}
                      className="w-full h-[500px] object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-2xl shadow-lg animate-float">
                    <div className="text-center">
                      <div className="text-2xl font-bold">2021</div>
                      <div className="text-sm">Est.</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
                  <FaPalette className="animate-wiggle" />
                  Our Story
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                  About
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MirRenTX
                  </span>
                </h2>

                {/* Description */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Founded in 2021 by Sameer and Tanveer Mir, MirRenTX offers
                    top-tier event rental services across Kupwara Kashmir.
                    Specializing in a wide range of equipment, including tents,
                    lighting, cameras, and generators, we cater to weddings,
                    corporate events, and outdoor functions.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our mission is to provide reliable, affordable solutions
                    that take the stress out of event planning. With a focus on
                    quality, we ensure all rentals are delivered on time and in
                    excellent condition.
                  </p>
                </div>

                {/* Features with Neumorphic design */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: FaCheckCircle, title: "Quality Assured" },
                    { icon: FaUsers, title: "Expert Team" },
                    { icon: FaHeart, title: "Customer First" },
                    { icon: FaAward, title: "Trusted Service" },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 rounded-2xl p-4 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <feature.icon className="text-blue-500 text-xl group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-semibold text-gray-700">
                          {feature.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href="/Readmore">
                  <button className="mt-4 bg-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition-all duration-300 flex items-center gap-3 group">
                    <FaMagic className="group-hover:rotate-12 transition-transform duration-300" />
                    Read More
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Glassmorphism Business Owners Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-30 blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-6">
                  <FaCrown className="text-yellow-400 animate-pulse" />
                  <span className="text-white font-semibold">Leadership</span>
                </div>

                <h3 className="text-4xl font-bold text-white mb-4">
                  Meet Our
                  <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
                    {" "}
                    Business Owners
                  </span>
                </h3>

                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Get to know the visionary leaders behind MirRenTX's success
                  story
                </p>
              </div>

              {/* Content */}
              <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                        <FaUsers className="text-white text-2xl" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          Sameer & Tanveer Mir
                        </h4>
                        <p className="text-cyan-300">Co-Founders</p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      Passionate entrepreneurs who turned their vision into a
                      premier local event rental service, delivering innovation
                      and excellence to every celebration.
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Link href="/Owners">
                    <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                      <FaGem className="group-hover:rotate-12 transition-transform duration-300" />
                      View Owners
                      <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: Minimalist Commitment Section */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Minimalist Header */}
              <div className="space-y-6">
                <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-gray-600 mx-auto"></div>
                <h2 className="text-5xl font-light text-gray-900 tracking-tight">
                  Our Commitment
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto"></div>
              </div>

              {/* Content */}
              <div className="max-w-3xl mx-auto">
                <p className="text-2xl text-gray-600 leading-relaxed font-light">
                  At MirRenTX, we prioritize customer satisfaction by providing
                  top-quality rentals, fast delivery, and 24/7 support. Our
                  mission is to make your special events stress-free with
                  reliable and affordable rental solutions.
                </p>
              </div>

              {/* Minimalist Icons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
                {[
                  {
                    icon: FaCheckCircle,
                    title: "Quality",
                    desc: "Premium equipment guaranteed",
                  },
                  {
                    icon: FaRocket,
                    title: "Speed",
                    desc: "Fast and reliable delivery",
                  },
                  {
                    icon: FaHeart,
                    title: "Care",
                    desc: "24/7 customer support",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-800 transition-colors duration-300">
                      <item.icon className="text-3xl text-gray-400 group-hover:text-gray-800 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5: Testimonials with Card Design */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold mb-6"
              >
                <FaStar className="animate-pulse" />
                Testimonials
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                What Our
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Customers Say
                </span>
                {/* eslint-disable-next-line */}
              </motion.h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "MirRenTX made our wedding stress-free with their top-notch service and high-quality rentals. Highly recommended!",
                  author: "SHEIKH BROTHERS",
                  gradient: "from-purple-500 to-pink-500",
                  icon: FaHeart,
                },
                {
                  quote:
                    "Professional, reliable, and affordable. The best rental service we have ever used!",
                  author: "MANZOOR PANDOW",
                  gradient: "from-blue-500 to-teal-500",
                  icon: FaAward,
                },
                {
                  quote:
                    "MirRenTX provided exceptional rentals and seamless service, making our wedding day absolutely stress-free!",
                  author: "RAFIQ AHMAD",
                  gradient: "from-green-500 to-yellow-500",
                  icon: FaCheckCircle,
                },
                {
                  quote:
                    "Thanks to MirRenTX, our wedding was hassle-free with top-quality rentals and outstanding service. Truly a great experience!",
                  author: "IFLAQ AHMAD",
                  gradient: "from-indigo-500 to-purple-600",
                  icon: FaStar,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className={`bg-gradient-to-br ${testimonial.gradient} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                  >
                    <div className="text-white">
                      <testimonial.icon className="text-4xl mb-6 opacity-80" />
                      <FaQuoteLeft className="text-3xl mb-4 opacity-60" />
                      <p className="text-lg italic mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <FaUsers className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">
                            - {testimonial.author}
                          </h3>
                          <p className="text-sm opacity-80">
                            Satisfied Customer
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full group-hover:animate-ping"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: Futuristic Developer Section */}
        <section className="relative bg-black py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
            {/* Matrix-like grid */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffff' fill-opacity='0.3'%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            {/* Floating particles */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3 mb-6"
              >
                <FaCode className="text-cyan-400 animate-pulse" />
                <span className="text-cyan-300 font-semibold">
                  Developer Profile
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Crafted with Code
                </span>
                <br />
                <span className="text-white">& Creativity</span>
              </motion.h2>
            </div>

            {/* Developer Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Developer Avatar - 4K Quality Design */}
                <div className="relative">
                  <div className="relative group">
                    {/* Multi-layered Holographic Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse"></div>
                    <div className="absolute inset-2 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-[1.8rem] blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700 animate-pulse delay-300"></div>
                    <div className="absolute inset-4 bg-gradient-to-tl from-yellow-400 via-orange-500 to-red-500 rounded-[1.6rem] blur-lg opacity-20 group-hover:opacity-35 transition-all duration-700 animate-pulse delay-500"></div>

                    {/* Premium Image Container */}
                    <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[2rem] border-2 border-cyan-400/40 overflow-hidden shadow-2xl group-hover:shadow-cyan-500/25 transition-all duration-700">
                      {/* Inner glow border */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20 rounded-[2rem]"></div>

                      {/* High-quality image with effects */}
                      <div className="relative w-full h-full overflow-hidden rounded-[1.8rem]">
                        <Image
                          src="/saleem-profile.png"
                          alt="Mohammad Salim Mir - Developer"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-110 contrast-110 saturate-110"
                          priority
                          quality={100}
                        />

                        {/* Gradient overlay for premium look */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-cyan-500/10 group-hover:from-black/20 transition-all duration-700"></div>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-400 rounded-tl-lg"></div>
                      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400 rounded-tr-lg"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-400 rounded-bl-lg"></div>
                      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-400 rounded-br-lg"></div>
                    </div>

                    {/* Enhanced Floating Tech Icons */}
                    <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center animate-bounce shadow-lg shadow-orange-500/30 border border-yellow-300/50">
                      <FaLaptopCode className="text-white text-3xl drop-shadow-lg" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    </div>

                    <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-green-500/30 border border-green-300/50">
                      <FaRocket className="text-white text-2xl drop-shadow-lg" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    </div>

                    <div className="absolute top-1/2 -left-10 w-12 h-12 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center animate-bounce delay-1000 shadow-lg shadow-pink-500/30 border border-pink-300/50">
                      <FaLightbulb className="text-white text-lg drop-shadow-lg" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                    </div>

                    <div className="absolute top-1/4 -right-6 w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 rounded-lg flex items-center justify-center animate-pulse delay-500 shadow-lg shadow-blue-500/30 border border-blue-300/50">
                      <FaCode className="text-white text-sm drop-shadow-lg" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                    </div>

                    {/* Orbiting particles */}
                    <div
                      className="absolute inset-0 animate-spin"
                      style={{ animation: "spin 20s linear infinite" }}
                    >
                      <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2 animate-pulse"></div>
                      <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2 animate-pulse delay-1000"></div>
                      <div className="absolute left-0 top-1/2 w-2 h-2 bg-pink-400 rounded-full -translate-y-1/2 animate-pulse delay-500"></div>
                      <div className="absolute right-0 top-1/2 w-2 h-2 bg-yellow-400 rounded-full -translate-y-1/2 animate-pulse delay-1500"></div>
                    </div>
                  </div>

                  {/* Professional Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg border border-cyan-300/50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Available for Projects</span>
                    </div>
                  </div>
                </div>

                {/* Developer Info */}
                <div className="space-y-8 text-white">
                  <div>
                    <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Mohammad Salim Mir
                    </h3>
                    <p className="text-2xl text-cyan-300 font-semibold mb-6">
                      Full-Stack Developer
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-300">
                        <FaMapMarkerAlt className="text-red-400" />
                        <span>Kashmir, India</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <FaGraduationCap className="text-green-400" />
                        <span>Computer Science Graduate</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    Passionate full-stack developer specializing in modern web
                    technologies. I create beautiful, responsive applications
                    that deliver exceptional user experiences. This project
                    represents my commitment to innovation and technical
                    excellence.
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-cyan-400">
                      Tech Arsenal:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React",
                        "Next.js",
                        "Node.js",
                        "JavaScript",
                        "Tailwind CSS",
                        "MongoDB",
                      ].map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-500/30 transition-colors duration-300 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="mailto:mirrentx@gmail.com"
                      className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white px-6 py-3 rounded-2xl font-semibold hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
                    >
                      <FaEnvelope className="text-cyan-400" />
                      Email Me
                    </a>

                    <a
                      href="tel:+918082815863"
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-white px-6 py-3 rounded-2xl font-semibold hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
                    >
                      <FaPhone className="text-purple-400" />
                      Call Me
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Codewithsalim12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 rounded-xl flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
                    >
                      <FaGithub className="text-white text-xl" />
                    </a>
                    <a
                      href="https://linkedin.com/in/mohammad-salim-mir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/30 rounded-xl flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
                    >
                      <FaLinkedin className="text-blue-400 text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 text-center"
              >
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-8 backdrop-blur-sm">
                  <FaQuoteLeft className="text-4xl text-cyan-400 mx-auto mb-6" />
                  <p className="text-gray-300 text-xl italic leading-relaxed max-w-3xl mx-auto">
                    "Innovation distinguishes between a leader and a follower. I
                    believe in creating digital experiences that not only meet
                    expectations but exceed them, turning complex problems into
                    elegant solutions."
                  </p>
                  <div className="text-cyan-400 font-semibold mt-6 text-lg">
                    - Mohammad Salim Mir
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
