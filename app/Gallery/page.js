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
      {/* Immersive Modern Slider Section */}
      <section className="relative w-full h-[75vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
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
            {/* Multi-Layered Overlay Strategy */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60"></div>
            <div className="absolute inset-0 backdrop-blur-[2px] bg-slate-900/10"></div>
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center container mx-auto px-6">
          <div className="text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-6 border border-white/30 shadow-2xl">
                Visual Portfolio
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <button
                  onClick={() => document.getElementById("gallery-items").scrollIntoView({ behavior: "smooth" })}
                  className="bg-white text-slate-900 px-10 py-5 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-blue-500/20 active:scale-95 flex items-center gap-3"
                >
                  <FaImages />
                  Explore Moments
                </button>
                <button 
                   onClick={() => document.getElementById("Video-Section").scrollIntoView({ behavior: "smooth" })}
                   className="bg-white/10 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all duration-500 flex items-center gap-3"
                >
                  <FaPlayCircle className="text-lg" />
                  Watch Highlights
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimalist Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative w-12 h-1 overflow-hidden rounded-full bg-white/20"
            >
              <div 
                className={`absolute inset-0 bg-white transition-transform duration-500 ${
                  currentSlide === index ? "translate-x-0" : "-translate-x-full"
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Modern Hover Card Grid */}
      <section id="gallery-items" className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6 translate-y-1">
              <FaCamera />
              Our Capture
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1] mb-6">
              Memorable <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Highlights</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm mb-2 font-medium leading-relaxed">
            Every frame tells a story of quality, dedication, and unforgettable experiences in the heart of Kashmir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden bg-slate-200 shadow-2xl shadow-slate-200/50 hover:shadow-blue-200/50 transition-all duration-700 cursor-pointer"
            >
              <motion.div
                animate={{ scale: hoveredId === image.id ? 1.05 : 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </motion.div>

              {/* Elegant Glass Overlay */}
              <div className={`absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-700`}></div>
              
              {/* Category Badge */}
              <div className="absolute top-8 left-8 z-10">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-xl border border-white/20">
                  {image.category}
                </div>
              </div>

              {/* Bottom Content revealed on hover */}
              <div className="absolute inset-x-0 bottom-0 p-10 z-20">
                <motion.div
                   animate={{ y: hoveredId === image.id ? 0 : 20, opacity: hoveredId === image.id ? 1 : 0.8 }}
                   transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight drop-shadow-md">
                    {image.title}
                  </h3>
                  <AnimatePresence>
                    {hoveredId === image.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/80 text-sm mb-8 leading-relaxed font-medium">
                          {image.description}
                        </p>
                        <Link href={`/Gallery/${image.id}`}>
                           <button className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest group/btn border-b-2 border-white/30 pb-2 hover:border-white transition-all">
                              View Project 
                              <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                           </button>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Interaction Row */}
              <div className="absolute top-8 right-8 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                <button className="w-12 h-12 bg-white/95 backdrop-blur-xl rounded-2xl flex items-center justify-center text-slate-900 hover:bg-red-500 hover:text-white transition-all shadow-xl">
                  <FaHeart />
                </button>
                <button className="w-12 h-12 bg-white/95 backdrop-blur-xl rounded-2xl flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                  <FaShare />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced Video Highlight Overhaul */}
      <section id="Video-Section" className="py-32 relative">
        <div className="absolute inset-0 bg-slate-900 skew-y-3 translate-y-20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full px-4 py-1.5 mb-8 text-[10px] font-black uppercase tracking-widest">
                <FaVideo />
                Visual Narrative
              </div>
              <h2 className="text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                Cinematic <br />
                <span className="text-blue-500">Highlights</span>
              </h2>
              <p className="text-lg text-slate-400 mb-12 max-w-lg font-medium leading-relaxed">
                Step inside our most successful operations. Experience the scale, quality, and atmosphere we bring to every event in the region.
              </p>
              
              <div className="flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-white mb-1 tracking-tighter">4K</span>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Resolution</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-white mb-1 tracking-tighter">60</span>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">FPS Motion</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full group-hover:bg-blue-600/30 transition-colors duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-4 rounded-[3rem] shadow-2xl">
                <div className="relative aspect-video rounded-[2rem] overflow-hidden">
                  {isPlaying ? (
                    <video src="/video/event-highlights.mp4" controls autoPlay className="w-full h-full object-cover" />
                  ) : (
                    <div className="relative w-full h-full group/video cursor-pointer" onClick={() => setIsPlaying(true)}>
                      <Image src="/video-cover-image.png" alt="Highlights Cover" fill className="object-cover group-hover/video:scale-110 transition-transform duration-[2s]" />
                      <div className="absolute inset-0 bg-slate-900/40 group-hover/video:bg-slate-900/20 transition-colors duration-700"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover/video:scale-110 transition-all duration-500">
                          <FaPlay className="text-slate-900 text-2xl ml-1" />
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


      {/* Master-Class Portfolio Grid */}
      <section className="pb-40 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: FaIndustry, title: "Event Setup", desc: "Tailored decoration concepts for premium venues.", color: "blue" },
             { icon: FaCalendarAlt, title: "Upcoming", desc: "Stay ahead with our next-gen seasonal activations.", color: "emerald" },
             { icon: FaTools, title: "Ventures", desc: "Integrated rental solutions for elite celebrations.", color: "amber" }
           ].map((item, i) => (
             <div key={i} className="group bg-white p-12 rounded-[3.5rem] border border-slate-50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-2xl transition-all duration-700 text-center relative overflow-hidden flex flex-col items-center">
                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className={`w-20 h-20 bg-${item.color}-50 text-${item.color}-600 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner`}>
                   <item.icon className="text-3xl" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-slate-700">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-10 font-medium leading-relaxed max-w-[200px]">
                   {item.desc}
                </p>
                {item.title === "Ventures" ? (
                  <Link href="/rentals" className="mt-auto">
                    <button className={`bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg`}>
                       View Catalog
                    </button>
                  </Link>
                ) : (
                  <button className="mt-auto bg-slate-50 text-slate-400 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest cursor-not-allowed">
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
