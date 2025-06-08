"use client";

import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaEnvelope,
  FaRocket,
  FaGlobe,
  FaMobile,
  FaDatabase,
  FaShoppingCart,
  FaChartLine,
  FaUsers,
  FaAward,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaStar,
} from "react-icons/fa";
import Image from "next/image";
import ProtectedRoute from "../components/ProtectedRoute";
import { motion } from "framer-motion";
import Link from "next/link";
const projects = [
  {
    title: "Tech-Blog",
    description:
      "A comprehensive platform for developers with modern features and clean design.",
    image: "/Tech-blog.png",
    demoLink: "https://tech-blog-ten-iota.vercel.app/",
    category: "Blog Platform",
    tech: ["Next.js", "React", "Tailwind CSS"],
    status: "Live",
    featured: true,
  },
  {
    title: "Salim'sCorner",
    description:
      "Personal tech blog featuring articles, insights, and creative coding projects..",
    image: "/Salim'sCorner.png",
    demoLink: "https://salimscorner.onrender.com/",
    category: "Web Application",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Live",
    featured: true,
  },
  {
    title: "Tour & Travels UI",
    description:
      "Modern travel agency website with interactive UI/UX and booking functionality.",
    image: "/Tourly - Travel agancy.png",
    demoLink: "https://codewithsalim12.github.io/tour-guide.github.io/",
    category: "UI/UX Design",
    tech: ["HTML5", "CSS3", "JavaScript"],
    status: "Live",
    featured: false,
  },
];

export default function WebDevServices() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400 to-teal-400 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3"
              >
                <FaRocket className="text-yellow-400 animate-pulse" />
                <span className="text-white font-semibold">
                  Professional Web Development
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                  Web Development
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-200 via-white to-pink-200 bg-clip-text text-transparent">
                  Services
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              >
                Creating stunning, responsive, and modern websites that drive
                business growth and deliver exceptional user experiences.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-8 pt-8"
              >
                {[
                  { icon: FaUsers, number: "10+", label: "Happy Clients" },
                  { icon: FaGlobe, number: "20+", label: "Projects Built" },
                  { icon: FaAward, number: "6", label: "Months Experience" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="text-2xl text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              >
                <Link href="#projects">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                    <FaPlay className="group-hover:animate-bounce" />
                    View Projects
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>

                <Link href="#contact">
                  <button className="group bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3">
                    <FaEnvelope className="group-hover:scale-110 transition-transform duration-300" />
                    Get In Touch
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold mb-6"
              >
                <FaCode className="animate-pulse" />
                Our Expertise
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Development Services
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                From concept to deployment, we deliver comprehensive web
                solutions that exceed expectations.
              </motion.p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaCode,
                  title: "Full-Stack Development",
                  gradient: "from-blue-500 to-cyan-500",
                  desc: "Custom web applications built with modern technologies and best practices.",
                  features: [
                    "React/Next.js",
                    "Node.js",
                    "Database Design",
                    "API Development",
                  ],
                },
                {
                  icon: FaPaintBrush,
                  title: "UI/UX Design",
                  gradient: "from-green-500 to-emerald-500",
                  desc: "Beautiful, intuitive designs that create exceptional user experiences.",
                  features: [
                    "Responsive Design",
                    "User Research",
                    "Prototyping",
                    "Brand Identity",
                  ],
                },
                {
                  icon: FaMobile,
                  title: "Mobile-First Development",
                  gradient: "from-purple-500 to-pink-500",
                  desc: "Mobile-optimized websites that perform flawlessly on all devices.",
                  features: [
                    "Progressive Web Apps",
                    "Cross-Platform",
                    "Performance Optimization",
                    "Touch Interfaces",
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  {/* Gradient Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                  <div className="absolute inset-[2px] bg-white rounded-3xl"></div>

                  {/* Content */}
                  <div className="relative z-10 p-8 text-center">
                    {/* Icon */}
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <service.icon className="text-3xl text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center`}
                          >
                            <FaCheckCircle className="text-white text-sm" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section
          id="projects"
          className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-full font-semibold mb-6"
              >
                <FaGlobe className="animate-pulse" />
                Portfolio Showcase
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Explore our latest web development projects that showcase
                innovation, creativity, and technical excellence.
              </motion.p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100"
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-[2px] bg-white rounded-3xl"></div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-6 left-6 z-30 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 z-30 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    🟢 {project.status}
                  </div>

                  {/* Enhanced Image Container */}
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                        <FaPlay className="text-white text-3xl ml-1" />
                      </div>
                    </div>

                    {/* Category Badge on Image */}
                    <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {project.category}
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="relative z-10 p-8 space-y-6">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack - Enhanced */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced View Demo Button */}
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl relative overflow-hidden group/btn cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          project.demoLink,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                      <FaPlay className="group-hover/btn:animate-pulse relative z-10" />
                      <span className="relative z-10">View Demo</span>
                      <FaExternalLinkAlt className="group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                    </a>
                  </div>

                  {/* Enhanced Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </motion.div>
              ))}
            </div>

            {/* View More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-12"
            >
              <Link href="https://github.com/Codewithsalim12">
                <button className="group bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                  <FaGlobe className="group-hover:scale-110 transition-transform duration-300" />
                  View All Projects
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3"
              >
                <FaEnvelope className="text-yellow-400 animate-pulse" />
                <span className="text-white font-semibold">
                  Let&apos;s Work Together
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Ready to Start Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-200 via-white to-pink-200 bg-clip-text text-transparent">
                  Next Project?
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
              >
                Let&apos;s discuss your ideas and bring your vision to life with
                cutting-edge web development solutions.
              </motion.p>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto"
              >
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <FaEnvelope className="text-2xl text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white/80 text-sm font-medium">
                        Email Me
                      </div>
                      <a
                        href="mailto:mirrentx@gmail.com"
                        className="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300"
                      >
                        mirrentx@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href="mailto:mirrentx@gmail.com"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                    >
                      <FaEnvelope />
                      Send Email
                    </a>

                    <a
                      href="tel:+918082815863"
                      className="flex-1 bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                    >
                      <FaChartLine />
                      Schedule Call
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
              >
                {[
                  {
                    icon: FaRocket,
                    title: "Fast Delivery",
                    desc: "Quick turnaround times",
                  },
                  {
                    icon: FaAward,
                    title: "Quality Work",
                    desc: "Premium development standards",
                  },
                  {
                    icon: FaUsers,
                    title: "24/7 Support",
                    desc: "Always here to help",
                  },
                ].map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="text-xl text-white" />
                    </div>
                    <div className="text-white font-semibold">
                      {feature.title}
                    </div>
                    <div className="text-white/70 text-sm">{feature.desc}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
