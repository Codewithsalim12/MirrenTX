"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaEye,
  FaHeart,
} from "react-icons/fa";

const eventDetails = {
  event1: {
    src: "/bikers.jpg",
    title: "Keran Valley – A Journey to Nature's Paradise",
    location: "Kupwara District, Jammu and Kashmir",
    date: "Summer 2024",
    category: "Nature & Adventure",
    description:
      "Keran Valley, located in Kupwara district, Jammu and Kashmir, is a hidden gem along the Neelum River. Surrounded by lush meadows, dense forests, and snow-capped peaks, the valley offers breathtaking views of Pakistan's Neelum Valley just across the river.",
    fullDescription:
      "The trip was a serene escape, with moments like standing at the Indian Keran viewpoint and seeing the peaceful villages of Neelum Valley on the other side. It was a unique experience, reflecting on how nature connects people despite borders. The friendly locals, traditional wooden houses, and authentic Kashmiri food made this journey even more special. As the sun set, the golden reflections on the river created a mesmerizing scene, making it a memory to cherish forever.",
    highlights: [
      "Breathtaking views of Neelum Valley",
      "Traditional Kashmiri cuisine experience",
      "Golden sunset reflections on the river",
      "Cross-border cultural connections",
    ],
    youtube: "https://youtu.be/0mZiyN9wbzs?si=Tebrp2pYMVqbVlDs",
    views: "2.5K",
    likes: "156",
  },
  event2: {
    src: "/fun-pic.jpg",
    title: "Capturing the Scenic Beauty of Neelum Valley",
    location: "Neelum Valley, Pakistan",
    date: "Spring 2024",
    category: "Photography",
    description:
      "Neelum Valley, often called The Blue Gem of Pakistan, is a photographer's paradise. With lush meadows, snow-capped peaks, and crystal-clear rivers, every corner offers stunning views.",
    fullDescription:
      "One of my favorite moments was taking pictures right at the edge of the Neelum River, capturing the serene landscape as the water flowed gently by. The valley's sunrise and sunset views were perfect for framing, with the changing light casting magical hues on the mountains. Whether it was the tranquil lakes or the picturesque villages, every scene in Neelum Valley felt like it was made to be captured.",
    highlights: [
      "Crystal-clear river photography",
      "Sunrise and sunset captures",
      "Mountain landscape shots",
      "Village life documentation",
    ],
    views: "1.8K",
    likes: "124",
  },
  event3: {
    src: "/lolab-valley.jpg",
    title: "Exploring the Beauty of Green Lolab Valley",
    location: "Lolab Valley, Kashmir",
    date: "Monsoon 2024",
    category: "Nature Exploration",
    description:
      "Green Lolab Valley, located in Kupwara district, is an untouched paradise that feels like a secret garden. With lush green meadows, vibrant wildflowers, and tranquil streams.",
    fullDescription:
      "Taking pictures by the crystal-clear Lolab River, surrounded by rolling hills and dense forests, provides some of the most serene and breathtaking views. The entire landscape exudes a sense of calm, making it the perfect place to connect with nature. For those planning a trip to this stunning destination, Mirrentx provides excellent rental services.",
    highlights: [
      "Untouched natural beauty",
      "Vibrant wildflower meadows",
      "Crystal-clear river streams",
      "Dense forest exploration",
    ],
    views: "3.2K",
    likes: "198",
  },
  event4: {
    src: "/lighting-decor.jpg",
    title: "A Memorable Wedding Celebration with Mirrentx Rentals",
    location: "Kashmir Valley",
    date: "Winter 2024",
    category: "Wedding Events",
    description:
      "We had the privilege of being part of a beautiful wedding event where everything was perfectly arranged, thanks to the high-quality rental services provided by Mirrentx.",
    fullDescription:
      "From stunning lighting setups that illuminated the venue to elegant decorations that created a magical atmosphere, every detail was designed to make the day unforgettable. The wedding also featured a generator to ensure the event went smoothly, even in case of power interruptions. The camera shoots and videography services captured every special moment.",
    highlights: [
      "Professional lighting setup",
      "Elegant venue decoration",
      "Backup power solutions",
      "Complete videography services",
    ],
    views: "4.1K",
    likes: "267",
  },
  event5: {
    src: "/azad-kashmir.jpg",
    title: "Stunning Snapshots of Pakistan's Beauty on the Road to Keran",
    location: "Road to Keran Valley",
    date: "Summer 2024",
    category: "Travel Photography",
    description:
      "During our unforgettable journey toward Keran Valley, we captured some truly beautiful pictures of Pakistan's mesmerizing landscapes.",
    fullDescription:
      "As we traveled through the winding roads, the view of lush green meadows, majestic mountains, and flowing rivers along the way was simply breathtaking. The vibrant scenery, with the distant peaks and tranquil rivers, offered endless opportunities for stunning photos. Each stop along the way revealed a new angle of Pakistan's beauty.",
    highlights: [
      "Winding mountain roads",
      "Lush green meadows",
      "Majestic mountain peaks",
      "Flowing river landscapes",
    ],
    views: "2.9K",
    likes: "189",
  },
  event6: {
    src: "/bungus-2.webp",
    title: "Exploring the Beauty of Bangus Valley",
    location: "Bangus Valley, Kashmir",
    date: "Autumn 2024",
    category: "Adventure Travel",
    description:
      "Located in the Kupwara district of Jammu and Kashmir, Bangus Valley is a hidden gem, known for its breathtaking landscapes.",
    fullDescription:
      "Our journey to this serene valley with the Mirrentx team was filled with unforgettable moments, perfect for photography. The lush green meadows, snow-capped mountains, and tranquil streams offered endless opportunities for stunning shots. The soft morning light and golden hour brought the valley to life, making it a photographer's paradise.",
    highlights: [
      "Hidden valley exploration",
      "Snow-capped mountain views",
      "Golden hour photography",
      "Team adventure experience",
    ],
    views: "3.7K",
    likes: "234",
  },
};

export default function EventPage({ params }) {
  const event = eventDetails[params.id];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Event Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The event you are looking for does not exist.
          </p>
          <Link href="/gallery">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Back to Gallery
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <Image
          src={event.src}
          alt={event.title}
          fill
          className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-transparent to-purple-900/30"></div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-24 left-8 z-20"
        >
          <Link href="/gallery">
            <button className="group bg-white/10 backdrop-blur-xl border border-white/20 text-white p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-white/10">
              <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>

        {/* Floating Action Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-24 right-8 z-20 flex gap-3"
        >
          <button className="bg-white/10 backdrop-blur-xl border border-white/20 text-white p-4 rounded-2xl hover:bg-red-500/20 transition-all duration-300 shadow-2xl group">
            <FaHeart className="text-lg group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button className="bg-white/10 backdrop-blur-xl border border-white/20 text-white p-4 rounded-2xl hover:bg-blue-500/20 transition-all duration-300 shadow-2xl group">
            <FaEye className="text-lg group-hover:scale-110 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 mb-6"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-2xl backdrop-blur-sm border border-white/20">
                <FaTag className="inline mr-1" />
                {event.category}
              </span>
              <span className="bg-white/15 backdrop-blur-xl text-white px-4 py-2 rounded-full text-xs font-medium shadow-2xl border border-white/20">
                <FaMapMarkerAlt className="inline mr-1" />
                {event.location}
              </span>
              <span className="bg-white/15 backdrop-blur-xl text-white px-4 py-2 rounded-full text-xs font-medium shadow-2xl border border-white/20">
                <FaCalendarAlt className="inline mr-1" />
                {event.date}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
              style={{
                textShadow:
                  "0 0 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.4)",
              }}
            >
              {event.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light mb-6"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
            >
              {event.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/20 shadow-2xl">
                <FaEye className="text-blue-400 text-lg" />
                <span className="text-white font-semibold">
                  {event.views} views
                </span>
              </div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col items-center"
              >
                <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
                  <div className="w-1 h-2 bg-white rounded-full mt-1 animate-bounce"></div>
                </div>
                <p className="text-white/70 text-xs mt-1 font-medium">Scroll</p>
              </motion.div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/20 shadow-2xl">
                <FaHeart className="text-red-400 text-lg" />
                <span className="text-white font-semibold">
                  {event.likes} likes
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <FaTag className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    About This Experience
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-10 font-light">
                  {event.fullDescription}
                </p>

                {/* Highlights */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {event.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium text-lg">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* YouTube Video Link */}
                {event.youtube && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 border border-red-100"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Watch the Journey
                    </h3>
                    <Link
                      href={event.youtube}
                      target="_blank"
                      className="group inline-flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-5 rounded-2xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25"
                    >
                      <FaYoutube className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                      Watch on YouTube
                      <div className="w-2 h-2 bg-white/30 rounded-full group-hover:animate-ping"></div>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 sticky top-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Event Details
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Location
                      </p>
                      <p className="text-gray-900 font-semibold text-lg">
                        {event.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                      <FaCalendarAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Date</p>
                      <p className="text-gray-900 font-semibold text-lg">
                        {event.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <FaTag className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Category
                      </p>
                      <p className="text-gray-900 font-semibold text-lg">
                        {event.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                      <FaEye className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Views</p>
                      <p className="text-gray-900 font-semibold text-lg">
                        {event.views}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 space-y-4">
                  <Link href="/Contact">
                    {" "}
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-indigo-500/25">
                      Book Similar Experience
                    </button>
                  </Link>
                  <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300 border border-gray-200">
                    Contact for Details
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
