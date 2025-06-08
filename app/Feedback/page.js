"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaStar,
  FaHeart,
  FaComments,
  FaUsers,
  FaRocket,
  FaMagic,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ProtectedRoute from "../components/ProtectedRoute";

export default function FeedbackPage() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const emojis = ["😞", "😐", "😊", "😁", "🤩"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.feedback) {
      toast.error("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Invalid email address.");
      return;
    }

    if (form.feedback.length > 500) {
      toast.error("Feedback must be under 500 characters.");
      return;
    }

    setLoading(true);

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, rating }),
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      toast.success(data.message);
      setForm({ name: "", email: "", feedback: "" });
    } else {
      toast.error(data.message);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mt-20 mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center"
              >
                <FaMagic className="text-white text-xl" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                We Value Your Voice
              </h1>
            </div>
            <p className="text-xl text-gray-700 font-light leading-relaxed max-w-2xl mx-auto">
              Your feedback shapes our future. Share your experience and help us
              create something extraordinary together.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-8"
            >
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40">
                <FaUsers className="text-purple-600" />
                <span className="text-gray-700 font-semibold">
                  100+ Happy Users
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40">
                <FaHeart className="text-red-500" />
                <span className="text-gray-700 font-semibold">
                  99% Satisfaction
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40">
                <FaRocket className="text-blue-600" />
                <span className="text-gray-700 font-semibold">
                  Always Improving
                </span>
              </div>
            </motion.div>
          </motion.section>

          {/* Star Rating System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            {!submitted ? (
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Rate Your Experience
                </h3>
                <div className="flex justify-center gap-3 mb-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <motion.button
                      key={num}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setRating(num);
                        setSubmitted(true);
                      }}
                      className={`text-4xl transition-all duration-300 ${
                        num <= rating
                          ? "text-yellow-400 drop-shadow-lg"
                          : "text-gray-300 hover:text-yellow-300"
                      }`}
                    >
                      <FaStar />
                    </motion.button>
                  ))}
                </div>
                <p className="text-gray-600 text-center">
                  Click a star to rate us!
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-3xl p-8 shadow-2xl text-center"
              >
                <div className="text-6xl mb-4">{emojis[rating - 1]}</div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-lg opacity-90">
                  Your rating means the world to us!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-2xl w-full border border-white/40 relative overflow-hidden"
          >
            {/* Form Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-10 translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <FaComments className="text-3xl text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Share Your Thoughts
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full text-gray-800 p-4 border-2 border-gray-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-purple-400/20 focus:border-purple-400 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full p-4 text-gray-800 border-2 border-gray-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-purple-400/20 focus:border-purple-400 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                  <textarea
                    name="feedback"
                    placeholder="Share your experience with us... (Max 500 characters)"
                    value={form.feedback}
                    onChange={handleChange}
                    maxLength="500"
                    rows="5"
                    className="w-full p-4 text-gray-800 border-2 border-gray-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-purple-400/20 focus:border-purple-400 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                    required
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-full">
                    {form.feedback.length}/500
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white p-4 rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  {loading && (
                    <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <span className={loading ? "opacity-0" : "opacity-100"}>
                    {loading ? "Submitting..." : "✨ Share My Feedback"}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Why Your Feedback is Important Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Why Your Feedback Matters
              </h2>
              <p className="text-gray-600 text-lg font-light">
                Every voice shapes our journey towards excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/40 text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaRocket className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Drive Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your insights fuel our innovation engine, helping us create
                  cutting-edge solutions that exceed expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/40 text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Build Community
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Together we create a community where every opinion matters and
                  collective wisdom guides our path forward.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/40 text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Enhance Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every piece of feedback helps us refine and perfect the
                  experience, making it more delightful for everyone.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* What Our Customers Say Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-20 max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 text-lg font-light">
                Real stories from real people who trust us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0, duration: 0.6 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-xl border border-white/60 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-lg">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    &ldquo;Amazing service! Very professional and quick
                    response. The team went above and beyond to ensure
                    everything was perfect. Highly recommend!&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                      R
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Rashid Ahmad
                      </h4>
                      {/* <p className="text-gray-500 text-sm">Event Organizer</p> */}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-xl border border-white/60 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-10 -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-lg">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    &ldquo;Absolutely loved the experience! The team was so
                    responsive and helpful. They made our event memorable and
                    stress-free.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                      I
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Iflaq Ahmad
                      </h4>
                      {/* <p className="text-gray-500 text-sm">Wedding Planner</p> */}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4, duration: 0.6 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-xl border border-white/60 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-10 -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-lg">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    &ldquo;The experience was fantastic! The team was quick to
                    respond and very supportive throughout the entire process.
                    Outstanding quality!&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                      L
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Lone Manzoor
                      </h4>
                      {/* <p className="text-gray-500 text-sm">Corporate Manager</p> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Bottom Decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 font-light">
              Your feedback helps us build better experiences for everyone
            </p>
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
