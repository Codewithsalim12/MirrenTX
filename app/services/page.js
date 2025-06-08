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
import ProtectedRoute from "../components/ProtectedRoute";
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
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Modern Hero Section with Slider */}
        <div className="relative w-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 mt-16 lg:mt-20 overflow-hidden">
          {/* Modern Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.2),transparent_50%)]"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              {/* Split Layout Container */}
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] items-center">
                {/* Left Content */}
                <div className="relative z-20 px-6 lg:px-12 py-16 lg:py-20">
                  <div className="max-w-xl">
                    {/* Premium Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
                    >
                      <FaGem className="text-yellow-400 text-sm animate-pulse" />
                      <span className="text-white/90 font-medium text-sm">
                        Premium Event Services
                      </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                      {slides[currentIndex].title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-lg text-white/80 mb-8 leading-relaxed"
                    >
                      {slides[currentIndex].subtitle}
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                      <Link href="/rentals">
                        <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                          <FaRocket className="group-hover:animate-bounce" />
                          Book Now
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </Link>

                      <button className="group bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-3">
                        <FaPlay className="group-hover:scale-110 transition-transform duration-300" />
                        Watch Demo
                      </button>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="flex gap-8"
                    >
                      {[
                        { number: "50+", label: "Happy Clients" },
                        { number: "50+", label: "Events" },
                        { number: "4.9", label: "Rating" },
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-white">
                            {stat.number}
                          </div>
                          <div className="text-white/60 text-sm">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative lg:h-[600px] h-[400px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center rounded-l-3xl lg:rounded-l-none"
                      style={{
                        backgroundImage: `url(${slides[currentIndex].image})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/40 rounded-l-3xl lg:rounded-l-none"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex items-center gap-4">
              {/* Slider Dots */}
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 h-2 bg-white rounded-full"
                        : "w-2 h-2 bg-white/50 hover:bg-white/70 rounded-full"
                    }`}
                  />
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="flex flex-col items-center text-white/80 animate-bounce ml-4">
                <span className="text-xs font-medium mb-1">Scroll</span>
                <div className="w-4 h-6 border border-white/40 rounded-full flex justify-center">
                  <div className="w-0.5 h-2 bg-white/60 rounded-full mt-1 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        {/* Pricing Plans Section */}
        <section
          id="Pricing"
          className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-400 to-teal-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
              >
                <FaGem className="text-yellow-400 animate-pulse" />
                <span className="font-semibold">Transparent Pricing</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Our Pricing Plans
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/80 max-w-3xl mx-auto"
              >
                Choose a plan that fits your needs. We offer flexible pricing
                options for every event size and budget.
              </motion.p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Lighting & Generator",
                  description:
                    "Enhance your event with beautiful lighting setups and reliable generator power.",
                  price: "$30",
                  icon: <FaLightbulb className="w-8 h-8 text-white" />,
                  subTitle: "Lighting with Generator",
                  gradient: "from-yellow-500 to-orange-500",
                  popular: false,
                },
                {
                  id: 2,
                  title: "DSLR Camera Rental",
                  description:
                    "Capture your special moments with top-quality DSLR cameras for professional photography.",
                  price: "$6",
                  icon: <FaCamera className="w-8 h-8 text-white" />,
                  subTitle: "High-Resolution Photography",
                  gradient: "from-blue-500 to-cyan-500",
                  popular: true,
                },
                {
                  id: 3,
                  title: "Tents & Camping Gear",
                  description:
                    "Perfect for outdoor events, offering premium tents and camping equipment for all sizes.",
                  price: "$20",
                  icon: <FaCampground className="w-8 h-8 text-white" />,
                  subTitle: "Comfortable Outdoor Setup",
                  gradient: "from-green-500 to-emerald-500",
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative group ${
                    plan.popular ? "scale-105 lg:scale-110" : ""
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
                    {/* Gradient Border Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {plan.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-4">
                        {plan.subTitle}
                      </p>

                      {/* Description */}
                      <p className="text-white/80 mb-6 leading-relaxed">
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="mb-8">
                        <span className="text-4xl font-bold text-white">
                          {plan.price}
                        </span>
                        <span className="text-white/60 text-lg ml-2">
                          / Starting from
                        </span>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {[
                          "Premium Quality",
                          "24/7 Support",
                          "Setup Included",
                        ].map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-center gap-2 text-white/80"
                          >
                            <FaCheckCircle className="text-green-400 text-sm" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link href="/rentals">
                        <button
                          className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-xl text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg`}
                        >
                          <FaShoppingCart />
                          Book Now
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-16"
            >
              <p className="text-white/80 mb-6">
                Need a custom package? We're here to help!
              </p>
              <Link href="/Contact">
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 mx-auto">
                  <FaUsers />
                  Contact Our Team
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-400 to-teal-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative group">
                  {/* Main Image */}
                  <img
                    src="/services-img.avif"
                    alt="Service Details"
                    className="w-full rounded-3xl shadow-2xl transform transition duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-80 blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl opacity-60 blur-xl"></div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <FaCheckCircle className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          50+
                        </div>
                        <div className="text-gray-600 text-sm">
                          Events Completed
                        </div>
                      </div>
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
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold">
                  <FaAward className="animate-pulse" />
                  Award-Winning Service
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Comprehensive
                  </span>
                  <br />
                  Event Solutions
                </h2>

                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed">
                  We provide tailored event services, including logistics,
                  decor, and professional photography. Ensure a seamless
                  experience with our dedicated team of experts.
                </p>

                {/* Features List */}
                <div className="space-y-4">
                  {[
                    {
                      icon: FaShieldAlt,
                      title: "Quality Guaranteed",
                      desc: "Premium equipment and professional service",
                    },
                    {
                      icon: FaClock,
                      title: "24/7 Support",
                      desc: "Round-the-clock assistance for your events",
                    },
                    {
                      icon: FaUsers,
                      title: "Expert Team",
                      desc: "Experienced professionals at your service",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/rentals">
                    <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                      <FaRocket className="group-hover:animate-bounce" />
                      Get Started
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>

                  <Link href="/Contact">
                    <button className="group bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3">
                      <FaUsers />
                      Contact Us
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
