"use client";
import Image from "next/image";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaPlayCircle,
  FaIndustry,
  FaCalendarAlt,
  FaTools,
  FaCamera,
  FaImages,
  FaVideo,
  FaEye,
  FaHeart,
  FaStar,
  FaShare,
  FaDownload,
  FaExpand,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaCode,
  FaLaptopCode,
  FaGlobe,
  FaRocket,
  FaLightbulb,
  FaGem,
  FaShieldAlt,
  FaAward,
  FaClock,
} from "react-icons/fa";

import Link from "next/link";
import { useState, useEffect } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/slider1.avif",
    title: "Gallery",
    description: "Explore our collection of memorable moments.",
  },
  {
    image: "/hero-mg.avif",
    title: "Captured Moments",
    description: "A glimpse into our best experiences and events.",
  },
];

const galleryImages = [
  {
    id: "event1",
    src: "/bikers.jpg",
    alt: "Event 1",
    title: "Keran Valley – A Journey to Nature’s Paradise",
    description: "An electrifying night of music, lights, and energy.",
  },
  {
    id: "event2",
    src: "/fun-pic.jpg",
    alt: "Event 2",
    title: "Capturing the Scenic Beauty of Neelum Valley",
    description: "Explore stunning artworks from renowned artists.",
  },
  {
    id: "event3",
    src: "/lolab-valley.jpg",
    alt: "Event 3",
    title: "Exploring the Beauty of Green Lolab Valley",
    description: "Innovations and ideas shaping the future of tech.",
  },
  {
    id: "event4",
    src: "/manzoor-marriage.jpg",
    alt: "Event 4",
    title: "A Memorable Wedding Celebration with Mirrentx Rentals",
    description: "A taste of the best flavors from around the world.",
  },
  {
    id: "event5",
    src: "/pok.jpg",
    alt: "Event 4",
    title: "Stunning Snapshots of Pakistan’s Beauty on the Road to Keran",
    description: "A taste of the best flavors from around the world.",
  },
  {
    id: "event6",
    src: "/bangus.webp",
    alt: "Event 4",
    title: "Exploring the Beauty of Bangus Valley With MirRenTX .",
    description: "A taste of the best flavors from around the world.",
  },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Clean Modern Slider Section */}
        <section className="relative w-full h-[60vh] overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-purple-50">
          {/* 4K HD Background Slides with Blur Overlay */}
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover scale-105"
                priority={index === 0}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              {/* Beautiful Blur Overlay */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-[3px]"></div>
              {/* Strong Gradient Overlay for Perfect Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
            </motion.div>
          ))}

          {/* Clean Content Overlay */}
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center max-w-4xl mx-auto">
              {/* Clean Title */}
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                style={{
                  textShadow:
                    "3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)",
                }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Clean Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white mb-10 max-w-2xl mx-auto"
                style={{
                  textShadow:
                    "2px 2px 4px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)",
                }}
              >
                Explore our stunning collection of visual moments
              </motion.p>

              {/* Clean Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("gallery-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto border-2 border-white/20"
                >
                  <FaImages className="group-hover:scale-110 transition-transform duration-300" />
                  View Gallery
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>
          </div>
          {/* Clean Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-indigo-600 scale-125"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Clean Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentSlide(
                currentSlide === 0 ? slides.length - 1 : currentSlide - 1
              )
            }
            className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
          >
            <FaArrowRight className="rotate-180" />
          </button>

          <button
            onClick={() =>
              setCurrentSlide(
                currentSlide === slides.length - 1 ? 0 : currentSlide + 1
              )
            }
            className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
          >
            <FaArrowRight />
          </button>
        </section>
        {/* Modern Gallery Images Section */}
        <section id="gallery-section" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6">
                <FaCamera className="text-indigo-600" />
                <span className="text-indigo-700 font-semibold">
                  Event Gallery
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Event Highlights
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our stunning collection of memorable moments and
                successful events
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      quality={100}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2">
                            <FaEye className="text-sm" />
                            <span className="text-sm">View Details</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaHeart className="text-sm hover:text-red-400 cursor-pointer" />
                            <FaShare className="text-sm hover:text-blue-400 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Event
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                      {image.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      Discover the magic of this unforgettable event moment
                    </p>

                    <Link href={`/Gallery/${image.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaEye />
                        View Details
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </Link>
                  </div>

                  {/* Floating decoration */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover:animate-ping"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Video Section */}
        <section id="Video-Section" className="py-20 bg-white/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-full px-6 py-3 mb-6">
                <FaVideo className="text-red-600" />
                <span className="text-red-700 font-semibold">
                  Video Gallery
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Event Highlights Video
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch the highlights of our most successful events and see the
                magic unfold
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-2xl"
            >
              <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-6 shadow-2xl border border-purple-500/20">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  {isPlaying ? (
                    <video
                      src="/video/event-highlights.mp4"
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="relative w-full h-full group cursor-pointer"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Image
                        src="/video-cover-image.png"
                        alt="Video Cover - Event Highlights"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        quality={100}
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

                      {/* Play Button */}
                      <div className="absolute inset-0 flex justify-center items-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
                          <div className="relative bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300">
                            <FaPlay className="text-3xl ml-1" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Video Info Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                          <div className="flex items-center justify-between text-white">
                            <div>
                              <h3 className="font-bold text-lg">
                                Event Highlights
                              </h3>
                              <p className="text-sm opacity-90">
                                Premium Event Moments
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <FaEye className="text-sm" />
                                <span className="text-sm">1.2K</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FaHeart className="text-sm" />
                                <span className="text-sm">89</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modern Video Controls */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <FaVideo className="text-cyan-400" />
                      <span className="font-medium text-sm">4K Quality</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-300">
                      <FaClock className="text-purple-400" />
                      <span className="text-sm">3:45 min</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 p-2 rounded-lg hover:bg-cyan-500/30 transition-all duration-300">
                      <FaShare className="text-sm" />
                    </button>
                    <button className="bg-purple-500/20 border border-purple-400/30 text-purple-300 p-2 rounded-lg hover:bg-purple-500/30 transition-all duration-300">
                      <FaDownload className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modern Web Dev Blog Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
                    <FaCode className="text-cyan-400" />
                    <span className="text-white font-semibold">Tech Blog</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Web Development
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Blog & Insights
                    </span>
                  </h2>

                  <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Stay updated with the latest trends and tutorials in web
                    development. Check out our blog for insights, tips, and
                    comprehensive guides.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="https://salimscorner.onrender.com">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaGlobe className="group-hover:scale-110 transition-transform duration-300" />
                        Visit Blog
                        <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </Link>

                    <Link href="https://salimscorner.onrender.com/articles">
                      {" "}
                      <button className="group bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3">
                        <FaRocket className="group-hover:scale-110 transition-transform duration-300" />
                        Latest Posts
                      </button>
                    </Link>
                  </div>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {[
                      {
                        icon: FaLaptopCode,
                        title: "Tutorials",
                        desc: "Step-by-step guides",
                      },
                      {
                        icon: FaLightbulb,
                        title: "Tips & Tricks",
                        desc: "Expert insights",
                      },
                      {
                        icon: FaRocket,
                        title: "Latest Tech",
                        desc: "Cutting-edge trends",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                      >
                        <item.icon className="text-3xl text-cyan-400 mx-auto mb-4" />
                        <h3 className="text-white font-bold text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modern Portfolio Section */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-3 mb-6">
                <FaGem className="text-yellow-600" />
                <span className="text-yellow-700 font-semibold">
                  Our Portfolio
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
                Our Expertise
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of services and successful
                project portfolio
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100 h-full flex flex-col">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <FaIndustry className="text-white text-2xl lg:text-3xl" />
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Event Setup
                  </h3>

                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6 flex-grow">
                    Browse through our portfolio showcasing event setups and
                    decoration ideas tailored to your needs
                  </p>

                  <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto mt-auto">
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full opacity-60 group-hover:animate-ping"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100 h-full flex flex-col">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <FaCalendarAlt className="text-white text-2xl lg:text-3xl" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    Upcoming Events
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6 flex-grow">
                    Check out our upcoming events and make sure you don’t miss
                    out on new opportunities and experiences.
                  </p>

                  <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto mt-auto">
                    <span>Explore Events</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full opacity-60 group-hover:animate-ping"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100 h-full flex flex-col">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                    <FaTools className="text-white text-2xl lg:text-3xl" />
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    Event Rentals
                  </h3>

                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6 flex-grow">
                    Premium rental solutions for unforgettable events and
                    celebrations
                  </p>

                  <Link href="/rentals">
                    <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto mt-auto">
                      <span>View Rentals</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full opacity-60 group-hover:animate-ping"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
