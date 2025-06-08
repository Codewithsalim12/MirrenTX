"use client";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlinePhone,
} from "react-icons/ai";
import {
  FaCrown,
  FaUsers,
  FaRocket,
  FaHeart,
  FaStar,
  FaAward,
  FaHandshake,
  FaLightbulb,
  FaGem,
  FaShieldAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaQuoteLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";

const OwnersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
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
            <FaCrown className="text-yellow-500 animate-pulse" />
            <span className="text-indigo-700 font-semibold">
              Leadership Team
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6"
          >
            <span className="text-gray-900">Meet Our</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Visionary Leaders
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            The passionate entrepreneurs behind MirRenTX's success story.
            <br />
            <span className="text-indigo-600 font-semibold">
              Dedicated to making every event extraordinary.
            </span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { icon: FaUsers, number: "3", label: "Team Leaders" },
              { icon: FaAward, number: "2021", label: "Founded" },
              { icon: FaHeart, number: "500+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
              >
                <stat.icon className="text-3xl text-indigo-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Owner Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Owner Card 1 - Tanveer Mir */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
              {/* Header with gradient background */}
              <div className="relative h-56 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 overflow-visible">
                {/* Floating decorations */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>

                {/* Profile Image - Fixed positioning */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-lg opacity-60 animate-pulse"></div>
                    <Image
                      src="/Tanveer-img.jpg"
                      alt="Tanveer Mir - Co-Founder"
                      width={128}
                      height={128}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500 bg-gray-200"
                      priority
                      quality={100}
                    />
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Role badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="flex items-center gap-2">
                    <FaCrown className="text-yellow-500 text-sm" />
                    <span className="text-xs font-bold text-gray-800">
                      Co-Founder
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-20 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Tanveer Mir
                </h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  Co-Founder & Visionary
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  With a vision for innovation, Tanveer ensures MirRenTX
                  delivers top-notch event solutions and exceptional customer
                  experiences.
                </p>

                {/* Contact Actions */}
                <div className="flex justify-center gap-4">
                  <a
                    href="tel:+91-8082815863"
                    className="group/btn bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <AiOutlinePhone className="text-xl group-hover/btn:animate-pulse" />
                  </a>
                  <a
                    href="mailto:mircomputers@gmail.com"
                    className="group/btn bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <FaEnvelope className="text-xl group-hover/btn:animate-pulse" />
                  </a>
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {["Innovation", "Leadership", "Strategy"].map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Owner Card 2 - Ehmad Sameer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
              {/* Header with gradient background */}
              <div className="relative h-56 bg-gradient-to-br from-purple-500 via-pink-600 to-rose-700 overflow-visible">
                {/* Floating decorations */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>

                {/* Profile Image - Fixed positioning */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur-lg opacity-60 animate-pulse"></div>
                    <Image
                      src="/owner2.jpg"
                      alt="Ehmad Sameer - Founder & Manager"
                      width={128}
                      height={128}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500 bg-gray-200"
                      priority
                      quality={100}
                    />
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Role badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="flex items-center gap-2">
                    <FaGem className="text-purple-500 text-sm" />
                    <span className="text-xs font-bold text-gray-800">
                      Founder
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-20 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ehmad Sameer
                </h3>
                <p className="text-purple-600 font-semibold mb-4">
                  Founder & Manager
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Sameer brings years of experience and leadership to ensure
                  every event is seamless and exceeds client expectations.
                </p>

                {/* Contact Actions */}
                <div className="flex justify-center gap-4">
                  <a
                    href="tel:+91-7006403256"
                    className="group/btn bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <AiOutlinePhone className="text-xl group-hover/btn:animate-pulse" />
                  </a>
                  <a
                    href="mailto:Northedgecomputers@gmail.com"
                    className="group/btn bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <FaEnvelope className="text-xl group-hover/btn:animate-pulse" />
                  </a>
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {["Management", "Operations", "Excellence"].map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Owner Card 3 - Mohammad Salim Mir */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
              {/* Header with gradient background */}
              <div className="relative h-56 bg-gradient-to-br from-green-500 via-teal-600 to-cyan-700 overflow-visible">
                {/* Floating decorations */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>

                {/* Profile Image - Fixed positioning */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-600 rounded-full blur-lg opacity-60 animate-pulse"></div>
                    <Image
                      src="/social-media-handler.jpg"
                      alt="Mohammad Salim Mir - Social Media Handler"
                      width={128}
                      height={128}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500 bg-gray-200"
                      priority
                      quality={100}
                    />
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Role badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="flex items-center gap-2">
                    <FaRocket className="text-green-500 text-sm" />
                    <span className="text-xs font-bold text-gray-800">
                      Digital Lead
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-20 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Mohammad Salim Mir
                </h3>
                <p className="text-green-600 font-semibold mb-4">
                  Social Media Handler & Developer
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Salim connects MirRenTX with the world, ensuring our brand
                  shines online and reaches every potential client.
                </p>

                {/* Contact Actions */}
                <div className="flex justify-center gap-4">
                  <a
                    href="tel:+91-6006798656"
                    className="group/btn bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <AiOutlinePhone className="text-xl group-hover/btn:animate-pulse" />
                  </a>
                  <a
                    href="mailto:saleemahmadmir18@gmail.com"
                    className="group/btn bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <FaEnvelope className="text-xl group-hover/btn:animate-pulse" />
                  </a>
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {["Digital Marketing", "Development", "Branding"].map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern About Owners Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
                <FaQuoteLeft className="text-cyan-400" />
                <span className="text-white font-semibold">Our Story</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                About Our
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Visionary Leaders
                </span>
              </h2>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  The founders of MirRenTX -{" "}
                  <span className="text-cyan-400 font-semibold">
                    Tanveer Mir
                  </span>
                  ,
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    Ehmad Sameer
                  </span>
                  , and
                  <span className="text-green-400 font-semibold">
                    {" "}
                    Mohammad Salim
                  </span>{" "}
                  - are passionate entrepreneurs dedicated to revolutionizing
                  the event rental industry.
                </p>

                <p className="text-lg text-white/80 leading-relaxed mb-10">
                  With their diverse backgrounds, innovative thinking, and
                  unwavering commitment to excellence, they have transformed
                  MirRenTX into a trusted name that delivers exceptional event
                  solutions. Their collaborative leadership and dedication to
                  customer satisfaction continue to drive the company's success
                  and growth.
                </p>

                {/* Achievement highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: FaHandshake,
                      title: "Partnership",
                      desc: "Built on trust & collaboration",
                    },
                    {
                      icon: FaLightbulb,
                      title: "Innovation",
                      desc: "Always pushing boundaries",
                    },
                    {
                      icon: FaShieldAlt,
                      title: "Reliability",
                      desc: "Consistent quality delivery",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                    >
                      <item.icon className="text-3xl text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-white font-bold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OwnersPage;
