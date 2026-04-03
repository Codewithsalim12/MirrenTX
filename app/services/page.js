"use client";
import { servicesData } from "../data/servicesData";
import { useState } from "react";
import Link from "next/link";
import {
  FaTools,
  FaCamera,
  FaTruck,
  FaUsers,
  FaConciergeBell,
  FaStar,
  FaCheckCircle,
  FaShoppingCart,
  FaVideo,
  FaCampground,
  FaLightbulb,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaPlay,
  FaGem,
  FaRocket,
  FaHeart,
  FaThumbsUp,
  FaAward,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const slides = [
  {
    id: 1,
    title: "Our Services",
    subtitle: "High-quality services tailored for you.",
    image: "/slider2.avif",
  },
  {
    id: 2,
    title: "Pricing Plans",
    subtitle: "Affordable plans for every budget.",
    image: "/slider1.avif",
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Modern Cinema-Light Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden bg-[#fafcff] border-b border-slate-50">
          {/* Animated Mesh Blobs */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[currentIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center"
              >
                {/* Premium Fleet Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-8 shadow-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                  </span>
                  Elite Service Fleet
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1] text-slate-900">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {slides[currentIndex].title.split(' ')[0]}
                  </span>{" "}
                  {slides[currentIndex].title.split(' ').slice(1).join(' ')}
                </h1>

                <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                  {slides[currentIndex].subtitle}
                </p>

                {/* Hero Actions */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                  <Link href="/rentals">
                    <button className="h-16 px-10 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl shadow-slate-200 hover:shadow-blue-200 active:scale-95 flex items-center gap-3 group">
                      <FaRocket className="group-hover:animate-bounce" />
                      Book Now
                    </button>
                  </Link>
                  <button className="h-16 px-10 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 border border-slate-200 shadow-sm flex items-center gap-3">
                    <FaPlay className="text-blue-600" />
                    Watch Demo
                  </button>
                </div>

                {/* Hero Image Container */}
                <div className="relative group max-w-5xl mx-auto">
                   <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                   <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/50">
                      <motion.div
                        key={slides[currentIndex].image}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="w-full h-full"
                      >
                        <img
                          src={slides[currentIndex].image}
                          alt={slides[currentIndex].title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-12">
               {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-500 rounded-full ${
                      index === currentIndex
                        ? "w-10 h-2.5 bg-blue-600 shadow-lg shadow-blue-100"
                        : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
            </div>
          </div>
        </section>



        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold mb-6"
              >
                <FaShieldAlt className="animate-pulse" />
                Our Premium Services
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Exceptional Event Solutions
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Transform your events with our comprehensive range of
                professional services designed to exceed expectations.
              </motion.p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-[2px] bg-white rounded-3xl"></div>

                  {/* Content */}
                  <div className="relative z-10 p-8 text-center">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <div className="text-4xl text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                          {service.icon}
                        </div>
                      </div>
                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {["Premium", "Professional", "Reliable"].map(
                        (feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300"
                          >
                            {feature}
                          </span>
                        )
                      )}
                    </div>

                    {/* CTA Button */}
                    <Link href={`/services/${service.id}`}>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Learn More
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </Link>
                  </div>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Pricing Plans Section */}
        <section
          id="Pricing"
          className="py-24 bg-white relative overflow-hidden"
        >
          {/* Subtle Background Blobs */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 right-[10%] w-80 h-80 bg-blue-50/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-5 py-2 mb-6"
              >
                <FaGem className="text-blue-600 animate-pulse text-xs" />
                <span className="font-black text-blue-600 text-[10px] uppercase tracking-widest">Transparent Rates</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight"
              >
                Simple, <span className="text-blue-600">Premium</span> Pricing
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
              >
                High-end event solutions with clear, affordable pricing. We offer flexible options for every event size and budget in Kupwara.
              </motion.p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  id: 1,
                  title: "Lighting & Power",
                  description: "Professional lighting setups paired with reliable generator power for continuous event coverage.",
                  price: "$30",
                  icon: <FaLightbulb className="w-7 h-7" />,
                  subTitle: "Lighting with Generator",
                  gradient: "from-blue-600 to-indigo-600",
                  popular: false,
                },
                {
                  id: 2,
                  title: "Cinema Photography",
                  description: "Professional DSLR camera sets and equipment for capturing high-resolution cinematic event moments.",
                  price: "$6",
                  icon: <FaCamera className="w-7 h-7" />,
                  subTitle: "HD Visual Capture",
                  gradient: "from-blue-600 to-purple-600",
                  popular: true,
                },
                {
                  id: 3,
                  title: "Elite Camping",
                  description: "Premium tents and high-quality outdoor gear for comfortable and stylish outdoor event experiences.",
                  price: "$20",
                  icon: <FaCampground className="w-7 h-7" />,
                  subTitle: "Comfortable Outdoor Setup",
                  gradient: "from-indigo-600 to-purple-600",
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative group ${plan.popular ? "lg:scale-105" : ""}`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="bg-slate-900 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                        Elite Choice
                      </div>
                    </div>
                  )}

                  <div className="h-full bg-white rounded-[2.5rem] border border-slate-100 p-10 text-center hover:border-blue-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 text-white shadow-lg`}>
                        {plan.icon}
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{plan.title}</h3>
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">{plan.subTitle}</p>
                      
                      <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">
                        {plan.description}
                      </p>

                      <div className="mb-10 flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                        <span className="text-slate-400 text-sm font-semibold">/ session</span>
                      </div>

                      {/* Features */}
                      <div className="space-y-4 mb-10">
                        {["Elite Maintenance", "24/7 Expert Support", "Professional Setup"].map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center gap-2 text-slate-600 font-medium text-sm">
                            <FaCheckCircle className="text-blue-500 text-xs" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link href="/rentals">
                        <button className="w-full h-14 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-slate-100 hover:shadow-blue-100 flex items-center justify-center gap-2 group">
                          <FaShoppingCart className="text-sm" />
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Custom Package CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-20"
            >
              <p className="text-slate-500 text-sm font-medium mb-6">Need a custom package tailored for your event?</p>
              <Link href="/Contact">
                <button className="h-14 px-8 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 border border-slate-200 shadow-sm flex items-center gap-3 mx-auto">
                  <FaUsers className="text-blue-600" />
                  Contact Our Team
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Elite Features Showcase Section */}
        <section className="py-24 bg-[#fafcff] relative overflow-hidden">
          {/* Soft Mesh Blobs */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-blue-100/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100/10 rounded-full blur-[120px] animate-pulse"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Impact Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative group p-2 sm:p-4 bg-white rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-2xl">
                  <div className="overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem]">
                    <img
                      src="/services-img.avif"
                      alt="Elite Service Delivery"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Floating Stat Piece - Mobile Responsive */}
                  <div className="absolute bottom-2 right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl sm:rounded-[1.8rem] p-3 sm:p-6 shadow-2xl border border-slate-50">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0">
                        <FaAward className="text-lg sm:text-2xl" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-2xl font-black text-slate-900 leading-none">99%</div>
                        <div className="text-slate-500 text-[8px] sm:text-[10px] font-black uppercase tracking-widest mt-0.5 sm:mt-1">Uptime Success</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Persuasion Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-10"
              >
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-5 py-2">
                  <FaShieldAlt className="text-blue-500 text-xs animate-pulse" />
                  <span className="font-black text-blue-600 text-[10px] uppercase tracking-widest">Quality Assurance</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  Premium Solutions for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Modern Events</span>
                </h2>

                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  We don't just provide equipment; we deliver a seamless experience. Our dedicated team ensures every technical detail is perfect, from cinematic coverage to uninterrupted power, so you can focus on the event itself.
                </p>

                {/* Feature Mini Cards */}
                <div className="grid gap-6">
                  {[
                    { icon: FaClock, title: "Precision Delivery", desc: "Always on time, every time. Guaranteed delivery to any venue in Kupwara." },
                    { icon: FaTools, title: "Elite Maintenance", desc: "Every piece of equipment is professionally sanitized and tested before delivery." },
                    { icon: FaUsers, title: "Personal Experts", desc: "Dedicated onsite support for complex lighting and camera requirements." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors flex-shrink-0">
                        <feature.icon className="text-2xl" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 mb-1 tracking-tight">{feature.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Block */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link href="/rentals" className="flex-1">
                    <button className="w-full h-16 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-2xl shadow-slate-100 hover:shadow-blue-100 flex items-center justify-center gap-3 group">
                      <FaRocket className="group-hover:animate-bounce" />
                      Get Started
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link href="/Contact" className="flex-1">
                    <button className="w-full h-16 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 border border-slate-200 shadow-sm flex items-center justify-center gap-3">
                      <FaUsers className="text-blue-600" />
                      Support
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
  );
}
