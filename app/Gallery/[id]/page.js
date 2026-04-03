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
  FaStar
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
    <div className="bg-[#fafcff] min-h-screen selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-['Inter_Tight']">
      
      

      {/* 2. Editorial Hero (Text Top, Image Bottom) */}
      <section className="relative pt-28 sm:pt-40 pb-8 sm:pb-12 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 sm:mb-6 border border-blue-100 shadow-sm">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            {event.category}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-4 sm:mb-6">
            {event.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            {event.subtitle}
          </p>
        </motion.div>
      </section>

      {/* 3. Massive Cover Image */}
      <section className="max-w-7xl mx-auto px-6 mb-12 sm:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.08)] bg-slate-100 group"
        >
          <Image 
            src={event.src} 
            alt={event.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
            priority
          />
        </motion.div>
      </section>

      {/* 4. The Editorial Blog Reading Section & Sticky Sidebar */}
      <section className="max-w-7xl mx-auto px-6 pb-16 sm:pb-32">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 relative">
          
          {/* Main Reading Column */}
          <div className="w-full lg:w-2/3">
             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="prose prose-lg prose-slate max-w-none">
               {/* Intro Excerpt */}
               <p className="text-xl sm:text-2xl text-slate-900 font-medium leading-relaxed tracking-tight mb-8 sm:mb-12 italic border-l-4 border-blue-600 pl-4 sm:pl-8 py-2">
                 "{event.description}"
               </p>

               {/* Body Paragraph */}
               <p className="text-base sm:text-lg text-slate-600 font-medium leading-[1.9] mb-12 sm:mb-16">
                 {event.fullDescription}
               </p>

               {/* Highlights Grid perfectly integrated into the blog body */}
               <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Key Highlights</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
                  {event.highlights.map((h, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all group">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                         <FaCheckCircle className="text-sm" />
                      </div>
                      <p className="text-slate-900 font-black text-[10px] uppercase tracking-widest m-0 leading-snug">
                        {h}
                      </p>
                    </div>
                  ))}
               </div>

               {/* Video Section integrated into the blog body */}
               {event.youtube && (
                 <div className="mt-16">
                   <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Archival Footage</h3>
                   <div className="relative aspect-[16/9] sm:aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.08)] bg-slate-900 group">
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
                      <Image 
                         src={event.src} 
                         alt="Video Cover" 
                         fill 
                         className="object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700 blur-[2px]" 
                      />
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
                        <Link href={event.youtube} target="_blank">
                          <button className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:scale-110 hover:bg-red-600 hover:border-red-500 transition-all duration-300 shadow-2xl mb-6">
                             <FaYoutube className="text-3xl" />
                          </button>
                        </Link>
                        <span className="text-white font-black uppercase text-[10px] tracking-widest drop-shadow-md">Watch on YouTube</span>
                      </div>
                   </div>
                 </div>
               )}
             </motion.div>
          </div>

          {/* Sticky Sidebar Metrics */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-10 space-y-8">
              
              {/* Main Info Card */}
              <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 sm:mb-8 text-center flex items-center justify-center gap-3">
                   <span className="w-8 h-px bg-slate-200"></span>
                   Project Details
                   <span className="w-8 h-px bg-slate-200"></span>
                 </h3>

                 <div className="space-y-6 mb-10">
                    {[
                      { ic: FaMapMarkerAlt, lb: "Location", val: event.location },
                      { ic: FaCalendarAlt, lb: "Date", val: event.date },
                      { ic: FaEye, lb: "Views", val: event.stats.views },
                      { ic: FaRegClock, lb: "Status", val: "Verified Capture" }
                    ].map((s, i) => (
                      <div key={i} className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-[#fafcff] border border-slate-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                            <s.ic className="text-sm" />
                         </div>
                         <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{s.lb}</p>
                            <p className="text-slate-900 font-bold text-sm tracking-tight">{s.val}</p>
                         </div>
                      </div>
                    ))}
                 </div>

                 {/* Actions */}
                 <div className="space-y-3">
                    <Link href="/Contact" className="block">
                       <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-md shadow-slate-200 hover:shadow-blue-200 flex items-center justify-center gap-2 group">
                          Initiate Booking <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                       </button>
                    </Link>
                    <button className="w-full bg-[#fafcff] text-slate-900 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest border border-slate-100 hover:bg-white hover:border-slate-200 transition-all flex items-center justify-center gap-2 group">
                       <FaPlus className="text-blue-500 group-hover:rotate-90 transition-transform" />
                       Project Inquiry
                    </button>
                 </div>
              </div>

              {/* Rating Card */}
              <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white flex items-center justify-between shadow-xl shadow-blue-600/20">
                 <div>
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-80 block mb-1">Impact Score</span>
                    <span className="text-3xl font-black tracking-tighter">{event.stats.rating}<span className="text-xl opacity-60">/5</span></span>
                 </div>
                 <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shrink-0">
                    <FaStar className="text-yellow-400 text-xl" />
                 </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. Minimal Footer Navigation */}
      <section className="py-24 bg-white border-t border-slate-50 text-center">
         <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Visual Standards <br />
            <span className="text-blue-600">Defined.</span>
         </h2>
         <p className="text-slate-500 font-medium mb-10 max-w-lg mx-auto">
            Ready to create your own highlight? Contact our team for professional event planning and gear rental services.
         </p>
         <Link href="/Gallery">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-blue-200">
               Return to Archive
            </button>
         </Link>
      </section>

    </div>
  );
}
