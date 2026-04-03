"use client";

import { useParams } from "next/navigation";
import {
  FaTools,
  FaCamera,
  FaVideo,
  FaArrowLeft,
  FaStar,
  FaCheckCircle,
  FaPlay,
  FaHeart,
  FaShare,
  FaBookmark,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const servicesData = [
  {
    id: "event-setup-decoration",
    name: "Event Setup & Decoration",
    image: "/event-setup.jpg",
    longDescription:
      "Transform any occasion into a breathtaking event with our premium setup and decoration services. Whether it's a wedding, corporate event, or private party, we bring creativity and precision to make your event unforgettable. Our dedicated team specializes in transforming ordinary spaces into extraordinary venues. We handle everything from the foundational structure to the most granular tabletop details, ensuring every sightline is perfectly optimized for your guests. Using high-grade materials and exclusive decor partnerships, we establish a visual narrative that perfectly aligns with your personal or corporate vision.",
    icon: <FaTools className="text-blue-600" />,
    cta: "Get a Free Consultation",
    rating: 4.9,
    reviews: 127,
    price: "Starting from $299",
    features: [
      "Custom Themes & Blueprints",
      "Professional Layout Planning",
      "High-Grade Quality Materials",
      "24/7 Dedicated Support",
    ],
    category: "Decoration",
    duration: "4-8 hours setup",
  },
  {
    id: "photography-videography",
    name: "Photography & Videography",
    image: "/videoGraphy.avif",
    longDescription:
      "Capture every special moment with our expert photographers and videographers. We create stunning visuals using state-of-the-art equipment, preserving memories in a unique and timeless way. We employ dual-shooter teams to ensure no angle is missed, combining candid photojournalism with stunning, directed portraits. By utilizing industry-leading camera bodies and low-light lenses, your nocturnal or indoor events will look just as spectacular as golden-hour outdoor shoots. Expect ultra-high-resolution files delivered directly to a private, curated gallery for seamless sharing.",
    icon: <FaCamera className="text-blue-600" />,
    cta: "Book Your Session Now",
    rating: 4.8,
    reviews: 89,
    price: "Starting from $199",
    features: [
      "Cinematic 4K Video Quality",
      "Full Broadcast-Level Editing",
      "Rapid Post-Event Delivery",
      "Unlimited Digital Captures",
    ],
    category: "Photography",
    duration: "2-6 hours coverage",
  },
  {
    id: "event-video-editing",
    name: "Event Video Editing",
    image: "/video-editing.avif",
    longDescription:
      "Our professional video editors turn your raw event footage into a compelling story. We offer high-quality editing, including color grading, special effects, and cinematic transitions. Your event was spectacular; let us make the recap legendary. We weave together audio from heartfelt speeches, ambient crowd noise, and licensed, emotional backing tracks to create a timeline that hits every emotional beat. Whether you require a short 60-second teaser for social media, or a full 45-minute documentary-style feature, our post-production pipeline delivers Hollywood-grade aesthetics right to your inbox.",
    icon: <FaVideo className="text-blue-600" />,
    cta: "Start Your Project Today",
    rating: 4.9,
    reviews: 156,
    price: "Starting from $149",
    features: [
      "Advanced Color Grading",
      "Stunning Visual Effects",
      "Premium Music Integration",
      "Extremely Fast Turnaround",
    ],
    category: "Video Editing",
    duration: "3-5 days delivery",
  },
];

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#fafcff] flex items-center justify-center font-['Inter_Tight']">
        <div className="text-center p-12 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaTools className="text-2xl" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Service Not Found</h2>
          <p className="text-slate-500 mb-6">The specific suite you are looking for does not exist.</p>
          <Link href="/services">
             <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg">
               Return to Services
             </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafcff] font-['Inter_Tight'] selection:bg-blue-100 selection:text-blue-900 pb-32">
      {/* 21:9 Hero Header Layout */}
      <div className="pt-24 lg:pt-28 px-4 sm:px-6 max-w-[1400px] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[75vh] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <Link 
            href="/services" 
            className="absolute top-6 left-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            <FaArrowLeft />
          </Link>

          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                 {service.icon} {service.category}
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-4">
                {service.name}
              </h1>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Main Reading Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-4xl mx-auto lg:mx-0"
          >
            {/* Meta Accents */}
            <div className="flex flex-wrap items-center gap-6 pb-10 mb-10 border-b border-slate-200">
               <div className="flex items-center gap-2">
                 <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                   <FaClock />
                 </div>
                 <div>
                   <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Est. Duration</p>
                   <p className="font-bold text-slate-900 text-sm tracking-tight">{service.duration}</p>
                 </div>
               </div>

               <div className="flex items-center gap-2">
                 <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-500">
                   <FaStar />
                 </div>
                 <div>
                   <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Top Rated</p>
                   <p className="font-bold text-slate-900 text-sm tracking-tight">{service.rating} ({service.reviews} feedback)</p>
                 </div>
               </div>
            </div>

            <article className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-12">
                {service.longDescription}
              </p>

              <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-16 mb-8 border-b border-slate-100 pb-4">
                Exclusive Features & Logistics
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                 {service.features.map((feat, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:border-blue-100 transition-colors">
                      <div className="w-6 h-6 bg-blue-50x text-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                         <FaCheckCircle className="text-blue-600 text-xl" />
                      </div>
                      <span className="font-bold text-slate-700 text-base">{feat}</span>
                    </div>
                 ))}
              </div>

              {/* Quality Banner */}
              <div className="mt-16 p-8 sm:p-12 bg-slate-900 rounded-[2.5rem] relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full mix-blend-screen"></div>
                 <h3 className="text-2xl sm:text-3xl font-black text-white relative z-10 mb-4 tracking-tight">Our Quality Standard</h3>
                 <p className="text-slate-300 font-medium leading-relaxed relative z-10">
                   When you book {service.name} with MirRenTX, you're investing in an iron-clad commitment to excellence. We rigorously sanitize, benchmark, and stress-test our entire deployment process before our team arrives at your venue.
                 </p>
              </div>

            </article>
          </motion.div>

          {/* Sticky Sidebar Reservation Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-[420px] shrink-0"
          >
            <div className="sticky top-32 space-y-6">
              
              {/* Primary Booking Card */}
              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_60px_rgb(0,0,0,0.05)] text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                
                <h3 className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2 text-left">Reservation Required</h3>
                <h4 className="text-2xl font-black text-slate-900 text-left mb-6">{service.price}</h4>

                <Link href="/Contact">
                  <button className="w-full h-16 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-blue-200 group flex items-center justify-center gap-3">
                    {service.cta}
                  </button>
                </Link>

                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                   <div className="flex gap-2">
                     <button className="w-12 h-12 bg-slate-50 hover:bg-red-50 hover:text-red-600 text-slate-400 rounded-2xl flex items-center justify-center transition-colors">
                       <FaHeart />
                     </button>
                     <button className="w-12 h-12 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-slate-400 rounded-2xl flex items-center justify-center transition-colors">
                       <FaShare />
                     </button>
                   </div>
                   <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                     Save or Share
                   </div>
                </div>
              </div>

              {/* Trust Sub-Card */}
              <div className="bg-[#fafcff] border border-slate-100 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 text-sm">Full Satisfaction Pipeline</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">100% Guaranteed Success</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
