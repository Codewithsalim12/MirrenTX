"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaYoutube,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaEye,
  FaHeart,
  FaShare,
  FaArrowRight,
  FaRocket,
  FaCamera,
  FaCheckCircle,
  FaPlus,
  FaRegClock,
} from "react-icons/fa";

const eventDetails = {
  event1: {
    src: "/bikers.jpg",
    title: "Keran Valley Adventure",
    subtitle: "Nature's Paradise Journey",
    location: "Kupwara, Kashmir",
    date: "Summer 2024",
    category: "Nature & Adventure",
    accent: "blue",
    description: "An electrifying journey through nature’s paradise with our premium gear.",
    fullDescription: "Keran Valley, located in Kupwara district, Jammu and Kashmir, is a hidden gem along the Neelum River. Surrounded by lush meadows, dense forests, and snow-capped peaks, the valley offers breathtaking views of Pakistan's Neelum Valley just across the river. The friendly locals, traditional wooden houses, and authentic Kashmiri food made this journey even more special.",
    highlights: ["Breathtaking Neelum Vistas", "Traditional Culinary Experience", "Golden Sunset Reflections", "Cross-Border Culture"],
    youtube: "https://youtu.be/0mZiyN9wbzs?si=Tebrp2pYMVqbVlDs",
    stats: { views: "3.2K", rating: "4.9" }
  },
  event2: {
    src: "/fun-pic.jpg",
    title: "Neelum Vistas",
    subtitle: "The Blue Gem Series",
    location: "Neelum Valley Boundary",
    date: "Spring 2024",
    category: "Photography",
    accent: "emerald",
    description: "Capturing the serene and majestic landscapes of the 'Blue Gem' valley.",
    fullDescription: "One of my favorite moments was taking pictures right at the edge of the Neelum River, capturing the serene landscape as the water flowed gently by. The valley's sunrise and sunset views were perfect for framing, with the changing light casting magical hues on the mountains. Neelum Valley felt like it was made to be captured.",
    highlights: ["Crystal River Photography", "Sunrise & Sunset Framing", "Mountain Peaks Series", "Local Life Portraits"],
    stats: { views: "2.1K", rating: "4.8" }
  },
  event3: {
    src: "/lolab-valley.jpg",
    title: "Green Lolab Explorer",
    subtitle: "The Secret Garden",
    location: "Lolab Valley, Kashmir",
    date: "Monsoon 2024",
    category: "Nature",
    accent: "teal",
    description: "Discovering the lush meadows and hidden paths of the 'Secret Garden'.",
    fullDescription: "Taking pictures by the crystal-clear Lolab River, surrounded by rolling hills and dense forests, provides some of the most serene and breathtaking views. The entire landscape exudes a sense of calm, making it the perfect place to connect with nature. Lolab in the monsoon is a symphony of greens.",
    highlights: ["Untouched Meadow Discovery", "Wildflower Bloom Series", "Crystal Stream Mapping", "Dense Forest Exploring"],
    stats: { views: "4.5K", rating: "5.0" }
  },
  event4: {
    src: "/lighting-decor.jpg",
    title: "The Grand Union",
    subtitle: "Premium Event Experience",
    location: "Srinagar, Kashmir",
    date: "Winter 2024",
    category: "Events",
    accent: "purple",
    description: "Defining the pinnacle of luxury celebrations through spatial architectural design.",
    fullDescription: "From stunning lighting setups that illuminated the venue to elegant decorations that created a magical atmosphere, every detail was designed to make the day unforgettable. The wedding also featured a generator to ensure the event went smoothly, even in case of power interruptions.",
    highlights: ["Dynamic Design Lighting", "Elegant Stage Creation", "Seamless Power Backup", "Cinematic Videography"],
    stats: { views: "5.8K", rating: "5.0" }
  },
  event5: {
    src: "/azad-kashmir.jpg",
    title: "The Road to Keran",
    subtitle: "Majestic Mountain Peaks",
    location: "Keran Corridor",
    date: "Summer 2024",
    category: "Travel",
    accent: "orange",
    description: "Snapshots of the winding mountain roads and the majestic peaks of the corridor.",
    fullDescription: "As we traveled through the winding roads, the view of lush green meadows, majestic mountains, and flowing rivers along the way was simply breathtaking. The vibrant scenery, with the distant peaks and tranquil rivers, offered endless opportunities for stunning photos.",
    highlights: ["Winding Mountain Trails", "Lush Meadow Captures", "Majestic Peak Viewing", "Flowing River Studies"],
    stats: { views: "3.9K", rating: "4.8" }
  },
  event6: {
    src: "/bungus-2.webp",
    title: "Bangus Highlands",
    subtitle: "Exploring the Frontier",
    location: "Bangus Valley, Kashmir",
    date: "Autumn 2024",
    category: "Trek",
    accent: "cyan",
    description: "Archiving the vast, high-altitude alpine meadows and their rugged autumnal beauty.",
    fullDescription: "Our journey to this serene valley with the Mirrentx team was filled with unforgettable moments, perfect for photography. The lush green meadows, snow-capped mountains, and tranquil streams offered endless opportunities for stunning shots on the alpine frontier.",
    highlights: ["High-Altitude Meadow", "Autumnal Color Grading", "Snow-Capped Ridge Walk", "Wilderness Immersion"],
    stats: { views: "4.2K", rating: "4.9" }
  },
};

export default function EventPage({ params }) {
  const event = eventDetails[params.id];

  if (!event) return null;

  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 border-none overflow-x-hidden">
      
      {/* 1. Precision Mesh Hero (No Background image) */}
      <section className="relative h-[65vh] w-full flex flex-col items-center justify-center pt-20 px-6">
         {/* Minimal Mesh Background */}
         <div className="absolute inset-x-0 top-0 h-full bg-[#fafcff] -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.03)_0%,_transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(168,85,247,0.03)_0%,_transparent_50%)]"></div>
         </div>

         {/* Navigation - Precise Floating Header */}
         <div className="absolute top-28 inset-x-0 z-30 container mx-auto px-6 flex justify-between items-center h-16">
            <Link href="/Gallery" className="group bg-white border border-slate-100 px-6 py-3 rounded-2xl text-slate-900 text-[10px] font-bold uppercase tracking-widest hover:border-blue-200 transition-all shadow-sm flex items-center gap-3">
               <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
               View Archive
            </Link>
            <div className="flex gap-4">
               <button className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-100 shadow-sm transition-all">
                  <FaHeart />
               </button>
               <button className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-100 shadow-sm transition-all">
                  <FaShare />
               </button>
            </div>
         </div>

         {/* Hero Title Content - Standard Bold */}
         <div className="container mx-auto max-w-5xl text-center z-10 pt-16">
           <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
           >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-100">
                <FaRocket />
                Verified Archive Entrance
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                {event.title}
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                {event.description}
              </p>
           </motion.div>
         </div>

         {/* 2. Floating Image Frame (Transition Point) */}
         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 1 }}
           className="container mx-auto max-w-5xl relative z-20 translate-y-32"
         >
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-[12px] border-white bg-slate-50">
               <Image 
                 src={event.src} 
                 alt={event.title} 
                 fill 
                 className="object-cover hover:scale-105 transition-transform duration-1000"
                 priority
               />
               <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[3rem]"></div>
            </div>
         </motion.div>
      </section>

      {/* 3. High-Precision Narrative Section */}
      <section className="bg-white pt-60 pb-40 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-10">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <FaCamera className="text-xl" />
                 </div>
                 <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none uppercase">The Narrative</h2>
              </div>

              <p className="text-xl text-slate-600 font-medium leading-[1.8] tracking-tight mb-16 border-l-4 border-blue-600 pl-10 bg-blue-50/20 py-4 mr-2 rounded-r-2xl">
                 {event.fullDescription}
              </p>

              {/* Clean Symmetrical Bento Grid */}
              <div className="mb-20">
                 <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tight uppercase">Key Highlights</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.highlights.map((h, i) => (
                      <div key={i} className="group bg-[#fafcff] p-8 rounded-3xl border border-slate-50 hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-500 flex items-start gap-6">
                        <div className="w-10 h-10 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                           <FaCheckCircle />
                        </div>
                        <p className="text-slate-900 font-bold text-[11px] uppercase tracking-widest leading-relaxed">
                          {h}
                        </p>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Precise Video Band */}
              {event.youtube && (
                <div className="bg-slate-900 rounded-[3rem] p-12 overflow-hidden relative group shadow-2xl">
                   <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.1)_0%,_transparent_50%)]"></div>
                   <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                      <div>
                         <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Archive Recapping</span>
                         <h3 className="text-3xl font-black text-white mb-6 tracking-tight leading-none uppercase">Watch the <br /> Cinematic Story</h3>
                      </div>
                      <Link href={event.youtube} target="_blank">
                        <button className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-2xl">
                           Launch Motion Player
                        </button>
                      </Link>
                   </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* 4. Precision Metadata Cards (Sidebar) */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#fafcff] rounded-[3rem] p-10 border border-slate-50 shadow-sm relative overflow-hidden"
            >
               <h3 className="text-xs font-black text-slate-400 mb-10 uppercase tracking-[0.3em]">Project Metrics</h3>

               <div className="space-y-6 mb-12">
                  {[
                    { ic: FaMapMarkerAlt, lb: "Coordinates", val: event.location },
                    { ic: FaCalendarAlt, lb: "Time Archival", val: event.date },
                    { ic: FaTag, lb: "Classification", val: event.category },
                    { ic: FaEye, lb: "Public Pulse", val: event.stats.views },
                    { ic: FaRegClock, lb: "Auth Status", val: "Verified Capture" }
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                       <div className="w-12 h-12 bg-white border border-slate-100 text-slate-400 rounded-2xl flex items-center justify-center transition-all group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 shadow-sm">
                          <s.ic className="text-lg" />
                       </div>
                       <div>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">{s.lb}</p>
                          <p className="text-slate-900 font-bold text-xs tracking-tight">{s.val}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="flex flex-col gap-3">
                  <Link href="/Contact">
                     <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all duration-500 shadow-xl flex items-center justify-center gap-3">
                        Initiate Booking <FaArrowRight />
                     </button>
                  </Link>
                  <button className="flex items-center justify-center gap-2 group w-full bg-white border border-slate-100 text-slate-900 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
                     <FaPlus className="text-slate-300 group-hover:text-blue-500 group-hover:rotate-90 transition-all" />
                     Project Briefing
                  </button>
               </div>
            </motion.div>

            {/* Quick Rating Badge */}
            <div className="bg-blue-600 p-8 rounded-[3rem] text-white flex items-center justify-between shadow-2xl shadow-blue-200">
               <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-1">Impact Score</span>
                  <span className="text-2xl font-black tracking-tighter leading-none">{event.stats.rating}/5.0</span>
               </div>
               <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center">
                       <FaPlus className="text-[10px]" />
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Minimal Global Impact Section */}
      <section className="py-40 bg-[#fafcff] border-t border-slate-50">
         <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1] uppercase">
              Defined by <br />
              <span className="text-blue-600">Visual Standards.</span>
            </h2>
            <p className="text-slate-500 font-medium mb-12 text-lg">
               Ready to create your own highlight? Contact our team for professional event planning and gear rental services.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/Gallery">
                <button className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all duration-500 shadow-xl active:scale-95">
                  Gallery Archive
                </button>
              </Link>
              <Link href="/rentals">
                <button className="bg-white border-2 border-slate-900 text-slate-900 px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all duration-500">
                  Services Catalog
                </button>
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
