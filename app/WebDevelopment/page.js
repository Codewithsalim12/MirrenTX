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
      <div className="min-h-screen bg-[#fafcff]">
        {/* Modern Cinema-Light Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden border-b border-slate-50">
          {/* Animated Mesh Blobs */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              {/* Premium Fleet Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mx-auto shadow-sm"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                Professional Web Development
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter text-slate-900"
              >
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Web Development
                </span>
                <br />
                Services
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium"
              >
                Creating stunning, responsive, and modern websites that drive
                business growth and deliver exceptional user experiences.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-6"
              >
                {[
                  { icon: FaUsers, number: "10+", label: "Happy Clients" },
                  { icon: FaGlobe, number: "20+", label: "Projects Built" },
                  { icon: FaAward, number: "6", label: "Months Experience" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300 shadow-sm">
                      <stat.icon className="text-xl sm:text-2xl text-blue-600 group-hover:text-indigo-600 transition-colors" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-slate-500 text-xs font-black uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-10"
              >
                <Link href="#projects">
                  <button className="h-16 px-10 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl shadow-slate-200 hover:shadow-blue-200 active:scale-95 flex items-center gap-3 group">
                    <FaPlay className="group-hover:animate-bounce" />
                    View Projects
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>

                <Link href="#contact">
                  <button className="h-16 px-10 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 border border-slate-200 shadow-sm flex items-center gap-3 group">
                    <FaEnvelope className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    Get In Touch
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#fafcff] py-24 relative overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 right-[20%] w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
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
                <FaCode className="text-blue-600 animate-pulse text-xs" />
                <span className="font-black text-blue-600 text-[10px] uppercase tracking-widest">Our Expertise</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight"
              >
                Premium <span className="text-blue-600">Development</span> Services
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
              >
                From concept to deployment, we deliver comprehensive web
                solutions that exceed expectations and elevate your brand.
              </motion.p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  icon: FaCode,
                  title: "Full-Stack Development",
                  gradient: "from-blue-600 to-indigo-600",
                  desc: "Custom web applications built with modern technologies and best practices.",
                  features: [
                    "React/Next.js",
                    "Node.js Ecosystem",
                    "Scalable Databases",
                    "Custom API Integration",
                  ],
                },
                {
                  icon: FaPaintBrush,
                  title: "UI/UX Design",
                  gradient: "from-indigo-600 to-purple-600",
                  desc: "Beautiful, intuitive designs that create exceptional user experiences.",
                  features: [
                    "Responsive Layouts",
                    "User Flow Research",
                    "Interactive Prototypes",
                    "Modern Brand Mapping",
                  ],
                },
                {
                  icon: FaMobile,
                  title: "Mobile-First Focus",
                  gradient: "from-blue-500 to-cyan-500",
                  desc: "Fluid, mobile-optimized websites that perform flawlessly on all devices.",
                  features: [
                    "Progressive Web Apps",
                    "Cross-Platform Sync",
                    "Performance Tuning",
                    "Touch UI Interfaces",
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-100 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="text-2xl" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-3">
                          <div
                            className={`w-5 h-5 flex items-center justify-center`}
                          >
                            <FaCheckCircle className="text-blue-500 text-sm" />
                          </div>
                          <span className="text-slate-600 text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section
          id="projects"
          className="py-24 bg-[#fafcff] relative overflow-hidden"
        >
          {/* Subtle Mesh Blobs */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-40 left-[-10%] w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-40 right-[-10%] w-96 h-96 bg-purple-100/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-5 py-2 mb-6"
              >
                <FaGlobe className="text-purple-600 animate-pulse text-xs" />
                <span className="font-black text-purple-600 text-[10px] uppercase tracking-widest">Portfolio Showcase</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight"
              >
                Featured <span className="text-blue-600">Projects</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
              >
                Explore our latest web development projects that showcase
                innovation, creativity, and technical excellence.
              </motion.p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl sm:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-100 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col"
                >
                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8 flex flex-col flex-grow">
                    
                    {/* Top Badges (Now inline to avoid overlapping text since there's no image) */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex flex-wrap items-center gap-2">
                        {project.featured && (
                          <div className="bg-slate-900 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm flex items-center gap-1">
                            <FaStar className="text-yellow-400" /> Featured
                          </div>
                        )}
                        <div className="bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                          {project.category}
                        </div>
                      </div>
                      
                      <div className="bg-white text-slate-900 border border-slate-200 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        {project.status}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-4 mb-8 mt-auto">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Core Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-50 border border-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Demo Button */}
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-14 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-slate-100 hover:shadow-blue-100 flex items-center justify-center gap-2 group/btn cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          project.demoLink,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      <FaPlay className="text-sm group-hover/btn:animate-pulse" />
                      View Demo Platform
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-20"
            >
              <Link href="https://github.com/Codewithsalim12">
                <button className="h-14 px-8 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 border border-slate-200 shadow-sm flex items-center gap-3 mx-auto group">
                  <FaGlobe className="text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                  View Developer GitHub
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 bg-white relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 right-[15%] w-80 h-80 bg-blue-50/50 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-20 left-[15%] w-96 h-96 bg-purple-50/50 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-5 py-2 mb-6"
              >
                <FaEnvelope className="text-blue-600 animate-pulse text-xs" />
                <span className="font-black text-blue-600 text-[10px] uppercase tracking-widest">Let's Work Together</span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900"
              >
                Ready to Start Your
                <br />
                <span className="text-blue-600">Next Project?</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
              >
                Let&apos;s discuss your ideas and bring your vision to life with
                cutting-edge web development solutions.
              </motion.p>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-100 hover:border-blue-200 transition-all duration-500 p-10 max-w-2xl mx-auto transform hover:-translate-y-2 mt-10"
              >
                <div className="space-y-10">
                  {/* Email Box */}
                  <div className="flex items-center justify-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <FaEnvelope className="text-2xl" />
                    </div>
                    <div className="text-left">
                      <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-1">
                        Direct Email
                      </div>
                      <a
                        href="mailto:mirrentx@gmail.com"
                        className="text-xl md:text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors duration-300"
                      >
                        mirrentx@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
                    <a
                      href="mailto:mirrentx@gmail.com"
                      className="flex-1 py-4 sm:py-0 h-auto sm:h-14 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-xl shadow-slate-100 hover:shadow-blue-100 flex items-center justify-center gap-2 group mt-6"
                    >
                      <FaEnvelope className="text-sm group-hover:scale-110 transition-transform" />
                      Send Message
                    </a>

                    <a
                      href="tel:+918082815863"
                      className="flex-1 py-4 sm:py-0 h-auto sm:h-14 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 border border-slate-200 shadow-sm flex items-center justify-center gap-2 mt-6 cursor-pointer group"
                    >
                      <FaChartLine className="text-blue-600 text-sm group-hover:scale-110 transition-transform" />
                      Schedule Call
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Features Array */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16"
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
                    desc: "Premium standards",
                  },
                  {
                    icon: FaUsers,
                    title: "24/7 Support",
                    desc: "Always here to help",
                  },
                ].map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300 shadow-sm">
                      <feature.icon className="text-xl text-blue-600 group-hover:text-indigo-600 transition-colors" />
                    </div>
                    <div className="text-slate-900 font-black mb-1">
                      {feature.title}
                    </div>
                    <div className="text-slate-500 text-sm font-medium">{feature.desc}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
  );
}
