"use client";

import { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AllTestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        const res = await fetch("/api/feedback");
        const data = await res.json();
        if (data.success) {
          setTestimonials(data.testimonials);
        }
      } catch (error) {
        console.error("Error fetching all testimonials:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafcff] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-32 pb-40">
      {/* Header */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
           <div className="max-w-2xl text-center md:text-left">
              <Link href="/Feedback" className="group inline-flex items-center gap-3 text-slate-400 hover:text-blue-600 font-black text-[10px] uppercase tracking-widest mb-8 transition-colors">
                 <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                 Back to Feedback
              </Link>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[0.9]">
                 Common <br />
                 <span className="text-blue-600 font-black italic">Voice.</span>
              </h1>
           </div>
           {testimonials.length > 0 && (
             <div className="bg-white border border-slate-100 px-8 py-6 rounded-[2rem] shadow-sm text-center">
                <span className="block text-4xl font-black text-slate-900 mb-1">{testimonials.length}</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Reviews</span>
             </div>
           )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[...Array(6)].map((_, i) => (
                <div key={i} className="h-80 bg-slate-50 rounded-[2.5rem] animate-pulse border border-slate-100"></div>
             ))}
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-yellow-400 text-sm gap-1 mb-8">
                    {[...Array(5)].map((_, starI) => (
                      <FaStar key={starI} className={starI < t.rating ? "text-yellow-400" : "text-slate-100"} />
                    ))}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-10 italic">
                    &ldquo;{t.feedback}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-white shadow-sm">
                    {t.userImage ? (
                      <Image src={t.userImage} alt={t.name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-black text-sm uppercase">
                        {t.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm tracking-tight">{t.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {new Date(t.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
             <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-100">
                <FaComments className="text-slate-200 text-2xl" />
             </div>
             <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No feedback has been recorded yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
