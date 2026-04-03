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

import { motion, AnimatePresence } from "framer-motion";

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
    category: "Adventure",
  },
  {
    id: "event2",
    src: "/fun-pic.jpg",
    alt: "Event 2",
    title: "Capturing the Scenic Beauty of Neelum Valley",
    description: "Explore stunning artworks from renowned artists.",
    category: "Scenery",
  },
  {
    id: "event3",
    src: "/lolab-valley.jpg",
    alt: "Event 3",
    title: "Exploring the Beauty of Green Lolab Valley",
    description: "Innovations and ideas shaping the future of tech.",
    category: "Nature",
  },
  {
    id: "event4",
    src: "/manzoor-marriage.jpg",
    alt: "Event 4",
    title: "A Memorable Wedding Celebration with Mirrentx Rentals",
    description: "A taste of the best flavors from around the world.",
    category: "Event",
  },
  {
    id: "event5",
    src: "/pok.jpg",
    alt: "Event 5",
    title: "Stunning Snapshots of Pakistan’s Beauty on the Road to Keran",
    description: "A taste of the best flavors from around the world.",
    category: "Journey",
  },
  {
    id: "event6",
    src: "/bangus.webp",
    alt: "Event 6",
    title: "Exploring the Beauty of Bangus Valley With MirRenTX.",
    description: "A taste of the best flavors from around the world.",
    category: "Trek",
  },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafcff] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Premium Light-Themed Slider Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden border-b border-slate-50 bg-[#fafcff]">
        {/* Floating Mesh Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest shadow-sm mb-6 sm:mb-8">
                <FaImages className="animate-pulse" />
                Visual Portfolio
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-4 sm:mb-6">
                Captured
                <br />
                <span className="text-blue-600">
                  Moments
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto text-balance">
                Explore our collection of the most memorable operations. Every
                frame tells a story of quality, dedication, and unforgettable
                experiences.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <button
                  onClick={() => document.getElementById("gallery-items").scrollIntoView({ behavior: "smooth" })}
                  className="h-16 px-10 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-xl shadow-slate-200 hover:shadow-blue-200 active:scale-95 flex items-center justify-center gap-3 group"
                >
                  <FaEye className="group-hover:scale-110 transition-transform duration-300" />
                  Explore Gallery
                </button>
                <button 
                   onClick={() => document.getElementById("Video-Section").scrollIntoView({ behavior: "smooth" })}
                   className="h-16 px-10 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 border border-slate-200 shadow-sm flex items-center justify-center gap-3 group"
                >
                  <FaPlayCircle className="text-blue-600 text-lg group-hover:scale-110 transition-transform duration-300" />
                  Watch Highlights
                </button>
              </div>
            </motion.div>
          </div>

          {/* Floating Slider Container */}
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.3 }}
             className="relative w-full h-[600px] rounded-[3rem] overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-100 group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
                {/* Beautiful clean overlay rather than muddy black */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </motion.div>
            </AnimatePresence>

            {/* In-Slider indicators */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-500 shadow-sm ${
                    currentSlide === index ? "w-6 sm:w-8 bg-white" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
            
            {/* Title display overlay */}
            <div className="absolute bottom-20 sm:bottom-10 left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:left-10 z-20 w-max max-w-[90%]">
               <span className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-xl">
                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                 {slides[currentSlide].title}
               </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Gallery Grid Section */}
      <section id="gallery-items" className="py-16 sm:py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 sm:mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest shadow-sm mb-4 sm:mb-6">
              <FaCamera className="animate-pulse" />
              Our Capture
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
              Memorable <br className="hidden md:block" />
              <span className="text-blue-600">Highlights</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base sm:text-lg max-w-sm mb-2 font-medium leading-relaxed md:text-right">
            Every frame tells a story of quality, dedication, and unforgettable
            experiences in the heart of Kashmir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="bg-white rounded-[2.5rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col group"
            >
              {/* Top Image Box */}
              <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={100}
                />
                
                {/* Embedded Badge */}
                <div className="absolute top-4 left-4 z-10 hidden group-hover:block">
                  <div className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm border border-slate-100 transition-all">
                    {image.category}
                  </div>
                </div>

                {/* Interaction Row (Heart/Share) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                    <FaHeart className="text-sm" />
                  </button>
                  <button className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                    <FaShare className="text-sm" />
                  </button>
                </div>
              </div>

              {/* Text Module Below Image */}
              <div className="px-4 pb-2 flex-grow flex flex-col">
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">
                  {image.category}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight leading-snug">
                  {image.title}
                </h3>
                
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 flex-grow">
                  {image.description}
                </p>
                
                {/* Action Link strictly preserving original logic */}
                <Link href={`/Gallery/${image.id}`} className="mt-auto block">
                  <button className="w-full py-4 rounded-2xl bg-[#fafcff] text-slate-900 hover:bg-blue-600 hover:text-white border border-slate-100 hover:border-blue-500 transition-all duration-300 flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest group/btn shadow-sm">
                    View Project
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium Light Video Section */}
      <section id="Video-Section" className="py-16 sm:py-32 relative bg-[#fafcff] border-y border-slate-50">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-full px-3 py-1.5 mb-6 sm:mb-8 text-[10px] font-black uppercase tracking-widest shadow-sm">
                <FaVideo className="animate-pulse" />
                Visual Narrative
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tighter leading-[1.1]">
                Cinematic <br />
                <span className="text-blue-600">Highlights</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-500 mb-10 sm:mb-12 max-w-lg font-medium leading-relaxed">
                Step inside our most successful operations. Experience the scale, quality, and atmosphere we bring to every event in the region.
              </p>
              
              <div className="flex items-center gap-8 sm:gap-12 p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm max-w-sm">
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 mb-1 tracking-tighter">4K</span>
                  <span className="text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-widest">Resolution</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 mb-1 tracking-tighter">60</span>
                  <span className="text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-widest">FPS Motion</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-blue-100/50 blur-[80px] rounded-full transition-colors duration-700"></div>
              <div className="relative bg-white p-2 sm:p-4 rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-100">
                <div className="relative aspect-video rounded-[1.8rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-50">
                  {isPlaying ? (
                    <video src="/video/event-highlights.mp4" controls autoPlay className="w-full h-full object-cover" />
                  ) : (
                    <div className="relative w-full h-full group/video cursor-pointer" onClick={() => setIsPlaying(true)}>
                      <Image src="/video-cover-image.png" alt="Highlights Cover" fill className="object-cover group-hover/video:scale-105 transition-transform duration-700" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 group-hover/video:bg-slate-900/5 transition-colors">
                        <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center shadow-xl group-hover/video:scale-110 transition-all duration-500">
                          <FaPlay className="text-blue-600 text-2xl ml-2" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master-Class Portfolio Grid in Standard Light Palette */}
      <section className="py-16 sm:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: FaIndustry, title: "Event Setup", desc: "Tailored decoration concepts for premium venues.", colorTheme: "text-blue-600 bg-blue-50" },
             { icon: FaCalendarAlt, title: "Upcoming", desc: "Stay ahead with our next-gen seasonal activations.", colorTheme: "text-indigo-600 bg-indigo-50" },
             { icon: FaTools, title: "Ventures", desc: "Integrated rental solutions for elite celebrations.", colorTheme: "text-slate-800 bg-slate-100" }
           ].map((item, i) => (
             <div key={i} className="group bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 text-center flex flex-col items-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${item.colorTheme} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm border border-white`}>
                   <item.icon className="text-2xl sm:text-3xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-8 sm:mb-10 font-medium leading-relaxed max-w-[200px]">
                   {item.desc}
                </p>
                {item.title === "Ventures" ? (
                  <Link href="/rentals" className="mt-auto w-full">
                    <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-blue-200">
                       View Catalog
                    </button>
                  </Link>
                ) : (
                  <button className="mt-auto w-full bg-[#fafcff] text-slate-400 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-slate-100 cursor-not-allowed">
                     Coming Soon
                  </button>
                )}
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
