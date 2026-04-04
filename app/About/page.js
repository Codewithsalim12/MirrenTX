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
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("/api/feedback?limit=4")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTestimonials(data.testimonials);
        }
      })
      .catch((err) => console.error("Failed to load testimonials", err));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: Modern Cinema-Light Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-slate-50 bg-[#fafcff]">
        {/* Animated Mesh Blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Decorative Element */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest shadow-sm">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                About Our Journey
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1] tracking-tighter text-slate-900">
                <span>Our</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Journey
                </span>
                <br />
                <span>Begins</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                Passionate entrepreneurs who turned their vision into a
                premier local event rental service, delivering innovation and
                excellence to every celebration.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/rentals">
                  <button className="w-full sm:w-auto h-16 px-10 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-xl shadow-slate-200 hover:shadow-blue-200 active:scale-95 flex items-center justify-center gap-3 group">
                    <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
                    Start Your Event
                  </button>
                </Link>

                <Link href="#story">
                  <button className="w-full sm:w-auto h-16 px-10 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 border border-slate-200 shadow-sm flex items-center justify-center gap-3 group cursor-pointer">
                    <FaHeart className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />
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
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: FaCalendarAlt,
                    number: "2021",
                    label: "Founded",
                    colorText: "text-blue-600",
                  },
                  {
                    icon: FaUsers,
                    number: "50+",
                    label: "Happy Clients",
                    colorText: "text-indigo-600",
                  },
                  {
                    icon: FaAward,
                    number: "50+",
                    label: "Events",
                    colorText: "text-purple-600",
                  },
                  {
                    icon: FaHeart,
                    number: "100%",
                    label: "Satisfaction",
                    colorText: "text-pink-600",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-white p-5 sm:p-8 rounded-3xl sm:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-100 hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-center">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100`}>
                          <stat.icon className={`text-xl sm:text-2xl ${stat.colorText}`} />
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          {stat.number}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Central decorative element */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 border-4 border-dashed border-blue-200 rounded-full animate-spin-slow opacity-50"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Modern Our Story Section */}
      <section
        id="story"
        className="bg-white py-24 relative overflow-hidden"
      >
        {/* Subtle Background Mesh */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-[20%] w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative group">
                {/* Floating container */}
                <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-700 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
                  <Image
                    src="/owner-img.jpg"
                    alt="About MirRenTX"
                    width={600}
                    height={700}
                    className="w-full h-[350px] sm:h-[500px] object-cover rounded-3xl sm:rounded-[2rem] group-hover:scale-[1.02] transition-transform duration-700 shadow-sm"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-3xl shadow-xl animate-float border border-slate-700">
                  <div className="text-center">
                    <div className="text-3xl font-black tracking-tight">2021</div>
                    <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-1">Established</div>
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest shadow-sm">
                <FaPalette className="animate-pulse" />
                Our Story
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                About
                <br />
                <span className="text-blue-600">
                  MirRenTX
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Founded in 2021 by Sameer and Tanveer Mir, MirRenTX offers
                  top-tier event rental services across Kupwara Kashmir.
                  Specializing in a wide range of equipment, including tents,
                  lighting, cameras, and generators, we cater to weddings,
                  corporate events, and outdoor functions.
                </p>

                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Our mission is to provide reliable, affordable solutions
                  that take the stress out of event planning. With a focus on
                  quality, we ensure all rentals are delivered on time and in
                  excellent condition.
                </p>
              </div>

              {/* Features Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FaCheckCircle, title: "Quality Assured" },
                  { icon: FaUsers, title: "Expert Team" },
                  { icon: FaHeart, title: "Customer First" },
                  { icon: FaAward, title: "Trusted Service" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#fafcff] rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-50 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="text-blue-600 outline-none" />
                      </div>
                      <span className="font-black text-slate-900 text-sm">
                        {feature.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href="/Readmore">
                <button className="mt-8 h-16 px-10 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 border border-slate-200 shadow-sm flex items-center gap-3 group">
                  <FaMagic className="text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                  Read More Info
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Modern Leadership Section */}
      <section className="relative bg-[#fafcff] py-24 overflow-hidden border-t border-slate-100">
        {/* Background Mesh Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-purple-100/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
          >
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-600 text-[10px] font-black uppercase tracking-widest shadow-sm mb-4 sm:mb-6">
                <FaCrown className="animate-pulse" />
                Leadership
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight">
                Meet Our
                <span className="text-blue-600">
                  {" "}
                  Business Owners
                </span>
              </h3>

              <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                Get to know the visionary leaders behind MirRenTX's success
                story
              </p>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="flex-1">
                <div className="bg-[#fafcff] border border-slate-100 rounded-3xl p-8 hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-5 mb-5">
                    <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center">
                      <FaUsers className="text-blue-600 text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-900">
                        Sameer & Tanveer Mir
                      </h4>
                      <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-1">Co-Founders</p>
                    </div>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Passionate entrepreneurs who turned their vision into a
                    premier local event rental service, delivering innovation
                    and excellence to every celebration.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Link href="/Owners">
                  <button className="h-16 px-10 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-xl shadow-slate-200 hover:shadow-blue-200 active:scale-95 flex items-center justify-center gap-3 group w-full lg:w-auto mt-4 lg:mt-0">
                    <FaGem className="group-hover:rotate-12 transition-transform duration-300" />
                    View Owners
                    <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300 ml-1" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Modern Commitment Section */}
      <section className="bg-white py-24 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Modern Header */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest shadow-sm">
                Commitment
              </div>
              <h2 className="text-6xl font-black text-slate-900 tracking-tighter">
                Our Guarantee
              </h2>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl text-slate-500 font-medium leading-relaxed">
                At MirRenTX, we prioritize customer satisfaction by providing
                top-quality rentals, fast delivery, and 24/7 support. Our
                mission is to make your special events stress-free with
                reliable and affordable rental solutions.
              </p>
            </div>

            {/* Minimalist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
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
                  <div className="w-24 h-24 mx-auto mb-6 bg-[#fafcff] shadow-sm border border-slate-100 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:border-blue-200 transition-all duration-500">
                    <item.icon className="text-4xl text-blue-300 group-hover:text-blue-600 transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Modern Testimonials */}
      <section className="bg-[#fafcff] py-24 border-t border-slate-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 rounded-l-full blur-3xl transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-50/40 rounded-tr-full blur-3xl transform -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] uppercase font-black tracking-widest border border-blue-100 shadow-sm mb-6"
            >
              <FaStar className="animate-pulse" />
              Customer Voices
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight"
            >
              What Our
              <br />
              <span className="text-blue-600">
                Customers Say
              </span>
            </motion.h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-100 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex text-yellow-400 text-lg gap-1 mb-6">
                      {[...Array(5)].map((_, starI) => (
                        <FaStar key={starI} className={starI < t.rating ? "text-yellow-400" : "text-slate-100"} />
                      ))}
                    </div>
                    <FaQuoteLeft className="text-2xl text-slate-200 mb-4" />
                    <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                      "{t.feedback}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-slate-50 shadow-sm flex items-center justify-center">
                      {t.userImage ? (
                        <img src={t.userImage} alt={t.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-black text-sm uppercase">
                          {t.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 tracking-tight">
                        {t.name}
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">
                        Verified User
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {testimonials.length === 0 && (
              <div className="col-span-full text-center py-12 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-center items-center h-48">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Loading voices...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 6: Modern Developer Profile */}
      <section className="relative bg-white py-24 overflow-hidden border-t border-slate-100">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#fafcff]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          {/* Glowing Mesh accents */}
          <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[10px] uppercase font-black tracking-widest border border-blue-100 shadow-sm mb-6"
            >
              <FaCode className="animate-pulse" />
              <span>Developer Profile</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 mb-4"
            >
              Crafted with Code
              <br />
              <span className="text-blue-600">& Creativity</span>
            </motion.h2>
          </div>

          {/* Developer Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-[3rem] p-8 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden"
          >
            {/* Subtle inner mesh boundary */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Developer Avatar */}
              <div className="relative">
                <div className="relative group flex justify-center">

                  {/* Image Container */}
                  <div className="relative w-80 h-80 rounded-[2.5rem] bg-[#fafcff] border border-slate-100 overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] transition-all duration-700">

                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src="/social-media-handler.png"
                        alt="Mohammad Salim Mir - Developer"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        priority
                        quality={100}
                      />
                    </div>
                  </div>

                  {/* Floating Tech Icons */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 animate-bounce group-hover:scale-110 transition-transform">
                    <FaLaptopCode className="text-blue-600 text-2xl" />
                  </div>

                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg animate-pulse delay-500 group-hover:scale-110 transition-transform">
                    <FaRocket className="text-white text-xl" />
                  </div>
                </div>

                {/* Available Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-slate-100 text-slate-900 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl flex items-center gap-2 whitespace-nowrap">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  Available for Projects
                </div>
              </div>

              {/* Developer Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">
                    Mohammad Salim Mir
                  </h3>
                  <p className="text-lg text-blue-600 font-bold uppercase tracking-widest">
                    Full-Stack Developer
                  </p>

                  <div className="flex flex-col gap-3 mt-6">
                    <div className="flex items-center gap-3 text-slate-500 font-medium">
                      <FaMapMarkerAlt className="text-blue-600" />
                      <span>Kashmir, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 font-medium">
                      <FaGraduationCap className="text-blue-600" />
                      <span>Computer Science Graduate</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 font-medium leading-relaxed text-lg pb-4 border-b border-slate-100">
                  Passionate full-stack developer specializing in modern web
                  technologies. I create beautiful, responsive applications
                  that deliver exceptional user experiences. This project
                  represents my commitment to innovation and technical
                  excellence.
                </p>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "JavaScript", "Tailwind CSS", "MongoDB"].map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-[#fafcff] border border-slate-100 text-slate-700 px-4 py-2 rounded-full text-xs font-bold hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connecting Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {/* Email */}
                  <a
                    href="mailto:mirrentx@gmail.com"
                    className="h-14 px-8 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-slate-100 hover:shadow-blue-100 flex items-center justify-center gap-2 group/btn"
                  >
                    <FaEnvelope className="text-sm group-hover/btn:scale-110 transition-transform" />
                    Email Me
                  </a>

                  {/* Call */}
                  <a
                    href="tel:+918082815863"
                    className="h-14 px-8 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group/btn"
                  >
                    <FaPhone className="text-blue-600 text-sm group-hover/btn:scale-110 transition-transform" />
                    Call Me
                  </a>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/Codewithsalim12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-[#fafcff] hover:bg-slate-900 hover:text-white text-slate-600 border border-slate-200 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href="https://linkedin.com/in/mohammad-salim-mir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-100 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-14 pt-14 border-t border-slate-50 text-center relative"
            >
              <FaQuoteLeft className="absolute top-8 left-1/2 -translate-x-1/2 text-6xl text-slate-50 opacity-50 z-0" />
              <p className="relative z-10 text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto italic">
                "Innovation distinguishes between a leader and a follower. I
                believe in creating digital experiences that not only meet
                expectations but exceed them, turning complex problems into
                elegant solutions."
              </p>
              <div className="relative z-10 text-slate-900 font-black mt-6 text-sm uppercase tracking-widest">
                - Mohammad Salim Mir
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
