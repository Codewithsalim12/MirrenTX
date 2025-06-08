"use client";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Star,
  Award,
  Users,
  Clock,
  Shield,
  Zap,
  Heart,
  CheckCircle,
  Camera,
  Lightbulb,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCamera,
  FaLightbulb,
  FaBolt,
  FaHome,
  FaAward,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaHeart,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaPlay,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Modern Back Button */}
      <div className="relative z-50 pt-8 px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.back()}
          className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 flex items-center gap-3 text-gray-700 hover:text-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span className="font-semibold">Back</span>
        </motion.button>
      </div>

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-6 py-3 mb-8"
            >
              <FaStar className="text-yellow-500 animate-pulse" />
              <span className="text-indigo-700 font-semibold">
                Premium Event Rentals
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6"
            >
              <span className="text-gray-900">About</span>
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
              className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Your trusted partner for premium event rentals and equipment
              solutions.
              <br />
              <span className="text-indigo-600 font-semibold">
                Making every celebration extraordinary.
              </span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            >
              <button
                onClick={() => router.push("/rentals")}
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaPlay className="group-hover:scale-110 transition-transform duration-300" />
                Explore Rentals
              </button>

              <button
                onClick={() => router.push("/Contact")}
                className="group bg-white/80 backdrop-blur-sm border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaHeart className="group-hover:scale-110 transition-transform duration-300" />
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Enhanced Image & Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Premium Image Container */}
              <div className="relative group">
                {/* Multi-layer glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-700"></div>

                <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                  <Image
                    src="/Readmore-img.avif"
                    alt="MirRenTX Premium Event Rentals"
                    width={600}
                    height={400}
                    className="w-full h-80 sm:h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                    priority
                    quality={100}
                  />

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <FaAward className="text-yellow-400" />
                      <span className="font-bold">Premium Quality</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Section with Modern Typography */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <FaQuoteLeft className="text-white text-sm" />
                    </div>
                    Our Story
                  </h3>

                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      <span className="text-4xl font-bold float-left mr-3 mt-1 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        W
                      </span>
                      elcome to MirRenTX, your premier destination for
                      high-quality event rentals. We specialize in providing
                      exceptional lighting systems for weddings, reliable
                      generators for power solutions, professional DSLR cameras
                      for photography, and premium tents to make your special
                      occasions truly memorable.
                    </p>

                    <p className="text-lg leading-relaxed">
                      Our commitment to excellence ensures every rental
                      experience is seamless. With meticulously maintained
                      equipment and a customer-first approach, we take pride in
                      being the trusted choice for weddings, corporate events,
                      and outdoor gatherings across the region.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Modern Features & Services */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Why Choose Us - Modern Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-4">
                    <FaAward className="text-indigo-600" />
                    <span className="text-indigo-700 font-semibold">
                      Why Choose Us
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Excellence in Every Detail
                  </h2>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      icon: FaCamera,
                      text: "Wide range of premium rental equipment",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: FaBolt,
                      text: "Competitive pricing with flexible rental terms",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      icon: FaShieldAlt,
                      text: "Meticulously maintained, high-quality products",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: FaClock,
                      text: "Prompt delivery with professional setup",
                      color: "from-orange-500 to-red-500",
                    },
                    {
                      icon: FaUsers,
                      text: "24/7 dedicated customer support",
                      color: "from-indigo-500 to-purple-500",
                    },
                    {
                      icon: FaHeart,
                      text: "Years of trusted industry experience",
                      color: "from-pink-500 to-rose-500",
                    },
                    {
                      icon: FaCheckCircle,
                      text: "Custom solutions for unique events",
                      color: "from-teal-500 to-cyan-500",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 cursor-pointer"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="text-white text-lg" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Enhanced Stats Section */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    number: "50+",
                    label: "Events Served",
                    icon: FaUsers,
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    number: "24/7",
                    label: "Customer Support",
                    icon: FaClock,
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    number: "100%",
                    label: "Satisfaction Rate",
                    icon: FaHeart,
                    gradient: "from-green-500 to-emerald-500",
                  },
                  {
                    number: "2021",
                    label: "Established",
                    icon: FaAward,
                    gradient: "from-orange-500 to-red-500",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div
                      className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-2xl text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                    >
                      <stat.icon className="text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-3xl font-bold mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>

                    {/* Floating decoration */}
                    <div
                      className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${stat.gradient} rounded-full opacity-60 group-hover:animate-ping`}
                    ></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6">
              <FaLightbulb className="text-indigo-600" />
              <span className="text-indigo-700 font-semibold">
                Our Services
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Premium Equipment Rentals
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lighting to photography, we provide everything you need for
              your perfect event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaLightbulb,
                title: "Professional Lighting",
                desc: "Wedding & event lighting systems",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: FaBolt,
                title: "Power Solutions",
                desc: "Reliable generators for any event",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: FaCamera,
                title: "Photography Equipment",
                desc: "Professional DSLR cameras",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: FaHome,
                title: "Premium Tents",
                desc: "Weather-resistant event tents",
                color: "from-green-500 to-emerald-500",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="text-white text-2xl" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>

                {/* Floating decoration */}
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${service.color} rounded-full opacity-60 group-hover:animate-ping`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
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
              <FaStar className="text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold">
                Ready to Get Started?
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Elevate Your Event?
            </h3>

            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let us provide the perfect equipment to make your occasion
              unforgettable. Experience the MirRenTX difference today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => router.push("/rentals")}
                className="group bg-white text-indigo-700 px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                Browse Rentals
              </button>

              <button
                onClick={() => router.push("/Contact")}
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaHeart className="group-hover:scale-110 transition-transform duration-300" />
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
