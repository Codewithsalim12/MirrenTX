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
    <div className="min-h-screen bg-[#fafcff] font-['Inter_Tight']">
      {/* Modern High-End Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-slate-50">
        {/* Floating Background Mesh Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] uppercase font-black tracking-widest shadow-sm mb-8"
          >
            <FaCrown className="animate-pulse" />
            Leadership Team
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6"
          >
            Meet Our
            <br />
            <span className="text-blue-600">
              Visionary Leaders
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-16"
          >
            The passionate entrepreneurs behind MirRenTX's success story.
            <br className="hidden sm:block" />
            <span className="text-blue-600 font-bold">
              {" "}Dedicated to making every event extraordinary.
            </span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: FaUsers, number: "3", label: "Team Leaders" },
              { icon: FaAward, number: "2021", label: "Founded" },
              { icon: FaHeart, number: "500+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-[#fafcff] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-50 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-2xl text-blue-600" />
                </div>
                <div className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                  {stat.number}
                </div>
                <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Owner Cards Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Owner Card 1 - Tanveer Mir */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative"
          >
            <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col h-full">
              {/* Header with mesh background */}
              <div className="relative h-48 bg-[#fafcff] overflow-visible border-b border-slate-50">
                {/* Floating mesh decorations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100/40 rounded-full blur-xl"></div>

                {/* Profile Image - Fixed positioning */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute inset-0 bg-blue-100 rounded-full blur-md opacity-50"></div>
                    <Image
                      src="/Tanveer-img.jpg"
                      alt="Tanveer Mir - Co-Founder"
                      width={128}
                      height={128}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md bg-white"
                      priority
                      quality={100}
                    />
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-[3px] border-white flex items-center justify-center shadow-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Role badge */}
                <div className="absolute top-6 left-6 bg-white border border-slate-100 shadow-sm rounded-full px-4 py-1.5">
                  <div className="flex items-center gap-2">
                    <FaCrown className="text-yellow-500 text-xs" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                      Co-Founder
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-10 pt-24 text-center flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
                  Tanveer Mir
                </h3>
                <p className="text-xs uppercase tracking-widest font-black text-blue-600 mb-6">
                  Co-Founder & Visionary
                </p>
                <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed flex-grow">
                  With a vision for innovation, Tanveer ensures MirRenTX
                  delivers top-notch event solutions and exceptional customer
                  experiences.
                </p>

                {/* Contact Actions */}
                <div className="flex justify-center gap-3 mb-8">
                  <a
                    href="tel:+918082815863"
                    className="w-12 h-12 flex items-center justify-center bg-[#fafcff] hover:bg-slate-900 text-slate-600 hover:text-white border border-slate-100 hover:border-slate-800 rounded-xl shadow-sm transition-all duration-300"
                  >
                    <AiOutlinePhone className="text-xl" />
                  </a>
                  <a
                    href="mailto:mircomputers@gmail.com"
                    className="w-12 h-12 flex items-center justify-center bg-[#fafcff] hover:bg-blue-600 text-slate-600 hover:text-white border border-slate-100 hover:border-blue-500 rounded-xl shadow-sm transition-all duration-300"
                  >
                    <FaEnvelope className="text-lg" />
                  </a>
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {["Innovation", "Leadership", "Strategy"].map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="bg-slate-50 border border-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-widest cursor-default hover:bg-slate-100"
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
            <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col h-full">
              {/* Header with mesh background */}
              <div className="relative h-48 bg-[#fafcff] overflow-visible border-b border-slate-50">
                {/* Floating mesh decorations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-100/40 rounded-full blur-xl"></div>

                {/* Profile Image - Fixed positioning */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute inset-0 bg-purple-100 rounded-full blur-md opacity-50"></div>
                    <Image
                      src="/owner2.jpg"
                      alt="Ehmad Sameer - Founder & Manager"
                      width={128}
                      height={128}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md bg-white"
                      priority
                      quality={100}
                    />
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-[3px] border-white flex items-center justify-center shadow-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Role badge */}
                <div className="absolute top-6 left-6 bg-white border border-slate-100 shadow-sm rounded-full px-4 py-1.5">
                  <div className="flex items-center gap-2">
                    <FaGem className="text-purple-500 text-xs" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                      Founder
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-10 pt-24 text-center flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
                  Ehmad Sameer
                </h3>
                <p className="text-xs uppercase tracking-widest font-black text-purple-600 mb-6">
                  Founder & Manager
                </p>
                <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed flex-grow">
                  Sameer brings years of experience and leadership to ensure
                  every event is seamless and exceeds client expectations.
                </p>

                {/* Contact Actions */}
                <div className="flex justify-center gap-3 mb-8">
                  <a
                    href="tel:+917006403256"
                    className="w-12 h-12 flex items-center justify-center bg-[#fafcff] hover:bg-slate-900 text-slate-600 hover:text-white border border-slate-100 hover:border-slate-800 rounded-xl shadow-sm transition-all duration-300"
                  >
                    <AiOutlinePhone className="text-xl" />
                  </a>
                  <a
                    href="mailto:Northedgecomputers@gmail.com"
                    className="w-12 h-12 flex items-center justify-center bg-[#fafcff] hover:bg-purple-600 text-slate-600 hover:text-white border border-slate-100 hover:border-purple-500 rounded-xl shadow-sm transition-all duration-300"
                  >
                    <FaEnvelope className="text-lg" />
                  </a>
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {["Management", "Operations", "Excellence"].map(
                    (tag, index) => (
                       <span
                         key={index}
                         className="bg-slate-50 border border-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-widest cursor-default hover:bg-slate-100"
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
            <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col h-full">
              {/* Header with mesh background */}
              <div className="relative h-48 bg-[#fafcff] overflow-visible border-b border-slate-50">
                {/* Floating mesh decorations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/50 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-100/40 rounded-full blur-xl"></div>

                {/* Profile Image - Fixed positioning */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute inset-0 bg-green-100 rounded-full blur-md opacity-50"></div>
                    <Image
                      src="/social-media-handler.jpg"
                      alt="Mohammad Salim Mir - Digital Lead"
                      width={128}
                      height={128}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md bg-white"
                      priority
                      quality={100}
                    />
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-[3px] border-white flex items-center justify-center shadow-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Role badge */}
                <div className="absolute top-6 left-6 bg-white border border-slate-100 shadow-sm rounded-full px-4 py-1.5">
                  <div className="flex items-center gap-2">
                    <FaRocket className="text-green-500 text-xs" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                      Digital Lead
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-10 pt-24 text-center flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
                  Mohammad Salim
                </h3>
                <p className="text-xs uppercase tracking-widest font-black text-green-600 mb-6">
                  Social Handling & Dev
                </p>
                <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed flex-grow">
                  Salim connects MirRenTX with the world, ensuring our brand
                  shines online and reaches every potential client.
                </p>

                {/* Contact Actions */}
                <div className="flex justify-center gap-3 mb-8">
                  <a
                    href="tel:+916006798656"
                    className="w-12 h-12 flex items-center justify-center bg-[#fafcff] hover:bg-slate-900 text-slate-600 hover:text-white border border-slate-100 hover:border-slate-800 rounded-xl shadow-sm transition-all duration-300"
                  >
                    <AiOutlinePhone className="text-xl" />
                  </a>
                  <a
                    href="mailto:saleemahmadmir18@gmail.com"
                    className="w-12 h-12 flex items-center justify-center bg-[#fafcff] hover:bg-green-600 text-slate-600 hover:text-white border border-slate-100 hover:border-green-500 rounded-xl shadow-sm transition-all duration-300"
                  >
                    <FaEnvelope className="text-lg" />
                  </a>
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {["Digital Marketing", "Development", "Branding"].map(
                    (tag, index) => (
                       <span
                         key={index}
                         className="bg-slate-50 border border-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-widest cursor-default hover:bg-slate-100"
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
      <section className="relative py-24 bg-[#fafcff] overflow-hidden border-t border-slate-100">
        {/* Background Mesh Elements */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-purple-100/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white rounded-[2.5rem] p-10 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] uppercase font-black tracking-widest shadow-sm mb-8">
                <FaQuoteLeft className="animate-pulse" />
                Our Story
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
                About Our
                <br />
                <span className="text-blue-600">
                  Visionary Leaders
                </span>
              </h2>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                  The founders of MirRenTX -{" "}
                  <span className="text-slate-900 font-black">
                    Tanveer Mir
                  </span>
                  ,
                  <span className="text-slate-900 font-black">
                    {" "}
                    Ehmad Sameer
                  </span>
                  , and
                  <span className="text-slate-900 font-black">
                    {" "}
                    Mohammad Salim
                  </span>{" "}
                  - are passionate entrepreneurs dedicated to revolutionizing
                  the event rental industry.
                </p>

                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                  With their diverse backgrounds, innovative thinking, and
                  unwavering commitment to excellence, they have transformed
                  MirRenTX into a trusted name that delivers exceptional event
                  solutions. Their collaborative leadership and dedication to
                  customer satisfaction continue to drive the company's success
                  and growth.
                </p>

                {/* Achievement highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-50">
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
                      className="bg-[#fafcff] rounded-2xl p-6 border border-slate-100 hover:border-blue-200 shadow-sm transition-all duration-300 group"
                    >
                       <div className="w-12 h-12 mx-auto bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-50 mb-4 group-hover:scale-110 transition-transform duration-300">
                         <item.icon className="text-2xl text-blue-600" />
                       </div>
                      <h3 className="text-slate-900 font-black text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 font-medium text-sm">{item.desc}</p>
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
