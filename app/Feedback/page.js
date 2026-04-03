"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  FaStar,
  FaHeart,
  FaComments,
  FaUsers,
  FaRocket,
  FaMagic,
  FaArrowRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function FeedbackPage() {
  const pathname = usePathname();
  const router = useRouter();
  const { status, data: session } = useSession();
  const [form, setForm] = useState({ feedback: "" });
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const emojis = ["😞", "😐", "😊", "😁", "🤩"];

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/api/feedback?limit=3");
      const data = await res.json();
      if (data.success) {
        setTestimonials(data.testimonials);
        setTotalCount(data.totalCount);
      }
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status !== "authenticated") {
      router.push("/sign-in?callbackUrl=" + encodeURIComponent(pathname));
      return;
    }

    if (rating === 0) {
      toast.error("Please provide a star rating.");
      return;
    }

    if (!form.feedback) {
      toast.error("Please provide your feedback.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, rating }),
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        toast.success(data.message);
        setForm({ feedback: "" });
        setRating(0);
        setSubmitted(false); // Reset star section to initial state if needed, or keep 'Thank You'
        fetchTestimonials(); // Refresh list
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcff] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 pt-28 sm:pt-32">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm"
            >
              <FaMagic className="text-blue-600 text-xl" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
              We Value Your <span className="text-blue-600">Voice</span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto px-2">
            Your feedback shapes our future. Share your experience and help us
            create something extraordinary together.
          </p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {[
              { icon: FaUsers, label: "Community Driven", color: "blue" },
              { icon: FaHeart, label: "User Focused", color: "red" },
              { icon: FaRocket, label: "Always Evolving", color: "purple" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 px-6 py-3 rounded-2xl shadow-sm">
                <stat.icon className={`text-${stat.color}-500`} />
                <span className="text-slate-700 font-bold text-sm tracking-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Dynamic Star Rating & Form Container */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-32">
          
          {/* Rate Section (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-6 lg:p-10 shadow-xl shadow-slate-100/50">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8 tracking-tight">
                Rate Your <br className="hidden sm:block" /> Experience
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <motion.button
                      key={num}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setRating(num);
                        setSubmitted(true);
                      }}
                      className={`text-3xl sm:text-4xl transition-all duration-300 ${
                        num <= rating
                          ? "text-yellow-400 drop-shadow-md"
                          : "text-slate-200 hover:text-yellow-200"
                      }`}
                    >
                      <FaStar />
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="thanks"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="bg-blue-50 border border-blue-100/50 rounded-2xl p-6 relative overflow-hidden"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-5xl mb-4"
                      >
                        {emojis[rating - 1]}
                      </motion.div>
                      
                      <h4 className="text-lg font-black text-blue-900 mb-1 italic">
                        {rating === 5 && "You made our day! 🚀"}
                        {rating === 4 && "Looking good! Thanks! ✨"}
                        {rating === 3 && "We're getting there! 😊"}
                        {rating === 2 && "We'll do better! 💪"}
                        {rating === 1 && "Talk to us, we'll fix it! 🛠️"}
                      </h4>
                      <p className="text-blue-700/70 text-sm font-medium">
                        {rating === 5 ? "Mind sharing why you loved it?" : "Help us reach that 5th star!"}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.p 
                      key="prompt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-slate-400 text-sm font-medium italic"
                    >
                      Your rating is the heart of your feedback.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Form Section (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-6 lg:p-10 shadow-xl shadow-slate-100/50 relative overflow-hidden mt-6 lg:mt-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-12 translate-x-12 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 sm:mb-10">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white text-sm">
                    <FaComments />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Tell us more
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <textarea
                      name="feedback"
                      placeholder="What's on your mind?..."
                      value={form.feedback}
                      onChange={handleChange}
                      maxLength="500"
                      rows="5"
                      className="w-full bg-slate-50 border border-transparent p-6 rounded-[2rem] focus:bg-white focus:border-blue-200 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 resize-none"
                      required
                    />
                    <div className="absolute bottom-6 right-6 text-[10px] font-black text-slate-300 uppercase tracking-widest bg-white/50 px-3 py-1 rounded-full">
                      {form.feedback.length}/500
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-slate-900 text-white p-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl disabled:bg-slate-200 disabled:text-slate-400"
                  >
                    {loading ? "Processing..." : "Submit My Experience"}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Real Testimonials Section */}
        <section className="w-full max-w-7xl mx-auto mb-32">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              User Stories
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              What Our <br className="hidden sm:block" />
              <span className="text-blue-600 font-black italic">Customers Say</span>
            </h2>
          </div>

          {testimonials.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
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
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-white shadow-sm flex items-center justify-center">
                        {t.userImage ? (
                          <img src={t.userImage} alt={t.name} className="w-full h-full object-cover" />
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

              {totalCount > 3 && (
                <div className="mt-16 text-center">
                  <Link href="/Feedback/all">
                    <button className="group bg-white border border-slate-100 px-10 py-5 rounded-3xl font-black text-xs uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm flex items-center gap-4 mx-auto">
                      View All Testimonials ({totalCount})
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-slate-100">
               <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No feedback yet. Be the first to share your experience!</p>
            </div>
          )}
        </section>

        {/* Footer Accent */}
        <div className="pb-20 text-center">
          <div className="flex justify-center gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
