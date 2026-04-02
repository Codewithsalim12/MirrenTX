"use client";
import {
  FaBolt,
  FaCampground,
  FaLightbulb,
  FaCamera,
  FaChair,
  FaPalette,
  FaRocket,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
  FaShoppingCart,
  FaHeart,
  FaEye,
  FaFire,
  FaGem,
  FaThumbsUp,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { rentalsData } from "./data";
import { motion, AnimatePresence } from "framer-motion";


export default function RentalsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useSession();
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add this click handler function
  const handleRentNow = (itemId) => {
    if (status !== "authenticated") {
      router.push("/sign-in?callbackUrl=" + encodeURIComponent(pathname));
    } else {
      router.push(`/rentals/rent-form?item=${itemId}`);
    }
  };

  const handleNotifyClick = () => {
    toast.success("You'll be notified soon!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
    });
  };

  const toggleFavorite = (itemId) => {
    setFavorites((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const categories = [
    "All",
    ...new Set(rentalsData.map((item) => item.category)),
  ];
  const filteredData =
    selectedCategory === "All"
      ? rentalsData
      : rentalsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#fafcff] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Compact Modern Hero with Mesh Gradient */}
      <section className="relative pt-24 pb-12 overflow-hidden border-b border-slate-50">
        {/* Animated Background Mesh - More subtle for smaller height */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#fafcff_100%)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
              </span>
              Premium Fleet
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1] text-slate-900">
              Rent the <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Future</span> of Events
            </h1>

            <p className="text-base text-slate-500 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
              Professional equipment delivered to your venue in Kupwara.
            </p>

            {/* Compact Micro Stats Bar */}
            <div className="flex justify-center gap-8 md:gap-16 text-slate-400 font-black uppercase tracking-tighter text-[9px]">
              <div className="flex flex-col items-center">
                <span className="text-lg text-slate-900 leading-none mb-1">500+</span>
                <span>Events</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg text-slate-900 leading-none mb-1">4.9/5</span>
                <span>Rating</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg text-slate-900 leading-none mb-1">100%</span>
                <span>Reliable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern High-End Filtering Section */}
      <section className="sticky top-20 z-40  py-6 backdrop-blur-xl bg-white/60 border-y border-slate-100 shadow-sm">
        <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex justify-center items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-500 whitespace-nowrap overflow-hidden group ${
                  selectedCategory === category
                    ? "text-white shadow-xl shadow-blue-200"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {selectedCategory === category && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Product Showcase - The Master-Class Grid */}
      <section className="container mx-auto px-6 py-24 mb-12">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-slate-100 hover:border-blue-200/50"
              >
                {/* Visual Impact Container */}
                <div className="relative h-72 overflow-hidden rounded-[2.2rem] m-3 shadow-inner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* High-End Overlay Strategy */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Top Floating Controls */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <div className="flex gap-2">
                      {item.popular && (
                        <div className="bg-white/90 backdrop-blur-md text-orange-600 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl border border-white/20">
                          <FaFire className="animate-bounce" />
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border border-slate-50 group/fav"
                    >
                      <FaHeart
                        className={`text-lg transition-colors duration-300 ${
                          favorites.includes(item.id)
                            ? "text-red-500"
                            : "text-slate-300 group-hover/fav:text-red-400"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Quick Rating Pill */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-100 flex items-center gap-2 shadow-lg">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs font-black text-slate-800 tracking-tight">{item.rating}</span>
                  </div>
                </div>

                {/* Content Precision */}
                <div className="p-8 pt-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg ring-4 ring-slate-50`}>
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium line-clamp-2 h-10">
                    {item.description}
                  </p>

                  {/* Modern Action Bar */}
                  <div className="flex items-center gap-3">
                    <Link href={`/rentals/${item.id}`} className="flex-1">
                      <button className="w-full h-14 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 border border-slate-100 flex items-center justify-center gap-2 group/btn">
                        <FaEye className="text-slate-400 group-hover/btn:text-slate-900 transition-colors" />
                        Explore
                      </button>
                    </Link>
                    <button
                      onClick={() => handleRentNow(item.id)}
                      className="h-14 w-14 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black transition-all duration-500 flex items-center justify-center shadow-xl shadow-slate-200 hover:shadow-blue-200 active:scale-95"
                    >
                      <FaShoppingCart className="text-lg" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>


      {/* Final Call to Action Refinement */}
      <section className="container mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { icon: FaCamera, title: "Drone Cinema", tags: ["4K", "Aerial"], color: "blue" },
            { icon: FaChair, title: "Elite Furniture", tags: ["Velvet", "Modern"], color: "purple" }
          ].map((item, i) => (
            <div key={i} className="group bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700 text-center relative overflow-hidden">
              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-${item.color}-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`w-20 h-20 bg-${item.color}-50 text-${item.color}-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ring-8 ring-${item.color}-50/50`}>
                <item.icon className="text-3xl" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <div className="flex justify-center gap-2 mb-8">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={handleNotifyClick}
                className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border mb-2 ${
                  i === 0 
                  ? "bg-slate-900 text-white border-slate-900 hover:bg-blue-600 hover:border-blue-600" 
                  : "bg-white text-slate-900 border-slate-200 hover:border-purple-600 hover:text-purple-600"
                }`}
              >
                Coming Soon
              </button>
            </div>
          ))}
        </div>
      </section>

      <ToastContainer />
    </div>
  );
}
