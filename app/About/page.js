"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaShoppingCart,
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import ProtectedRoute from "../components/ProtectedRoute";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const slides = [
  {
    image: "/about-slider1.avif",
    title: "Who We Are",
    description: "Discover our journey and passion for excellence.",
  },
  {
    image: "about-slider2.avif",
    title: "Our Mission",
    description: "Striving to provide the best services for our customers.",
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <ProtectedRoute>
      {/* <div className="min-h-screen bg-gray-100 py-16 "> */}
      {/* Section 1: Top Header with Background Blur */}
      <div className="relative w-full h-[400px] overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg mb-4">{slide.description}</p>
              <Link href="/rentals">
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 shadow-md transition-all">
                  Book Now
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-teal-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
      {/* Section 2: About MirRenTX */}
      <div className="min-h-screen bg-gray-100 py-16 px-6">
        <section className="mt-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/owner-img.jpg"
              alt="About MirRenTX"
              width={900}
              height={1080}
              className="rounded-lg shadow-lg object-cover"
              style={{
                filter: "brightness(1.1) contrast(1.2) saturate(1.5)", // Removed blur for clarity
                objectFit: "cover", // Ensures image covers the space while maintaining aspect ratio
              }}
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl font-bold mb-2">About MirRenTX</h2>

            <p className="text-lg text-gray-500 leading-relaxed mb-2">
              Founded in 2021 by Sameer and Tanveer Mir, MirRenTX offers
              top-tier event rental services across Kashmir. Specializing in a
              wide range of equipment, including tents, lighting, cameras, and
              generators, we cater to weddings, corporate events, and outdoor
              functions. Our mission is to provide reliable, affordable
              solutions that take the stress out of event planning. With a focus
              on quality, we ensure all rentals are delivered on time and in
              excellent condition. We are committed to customer satisfaction,
              making every event—big or small—seamless and memorable.
            </p>

            {/* <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Our commitment to excellence has earned us trust in the event rental
            industry, ensuring seamless events with reliable, affordable
            services.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We aim to make event planning stress-free, delivering rentals on
            time and in excellent condition. Whether it’s a small gathering or
            large corporate event, we have you covered.
          </p> */}

            <Link href="/Readmore" passHref>
              <button className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
                Readmore <ArrowRight />
              </button>
            </Link>
          </div>
        </section>
        {/* Section 3: Meet Our Business Owners Card */}
        <section className="max-w-6xl mx-auto mb-16 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Meet Our Business Owners
            </h3>
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-lg text-gray-600 mb-4 sm:mb-0">
                Get to know the team behind MirRenTX
              </p>
              <Link href="/Owners" passHref>
                <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition">
                  View Owners <FaExternalLinkAlt />
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* Section 4: Our Commitment */}
        <section className="bg-gray-50  p-6 rounded-md max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Commitment
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At MirRenTX, we prioritize customer satisfaction by providing
            top-quality rentals, fast delivery, and 24/7 support. Our mission is
            to make your special events stress-free with reliable and affordable
            rental solutions.
          </p>
        </section>
        {/* Section 5: Customer Testimonials */}
        <section className="max-w-6xl mx-auto text-center py-12 mb-16 rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 sm:mb-8 tracking-tight flex justify-center items-center gap-2">
            {/* Star icon for the heading */}
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-black p-6 sm:p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
              <FaQuoteLeft className="text-white text-3xl mb-4" />{" "}
              {/* Quote icon */}
              <p className="text-lg sm:text-xl italic mb-4 text-gray-800">
                “MirRenTX made our wedding stress-free with their top-notch
                service and high-quality rentals. Highly recommended!”
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                - SHEIKH BROTHERS.
              </h3>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-black p-6 sm:p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
              <FaQuoteLeft className="text-white text-3xl mb-4" />{" "}
              {/* Quote icon */}
              <p className="text-lg sm:text-xl italic mb-4 text-gray-800">
                “Professional, reliable, and affordable. The best rental service
                we have ever used!”
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                - MANZOOR PANDOW.
              </h3>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-yellow-500 text-black p-6 sm:p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
              <FaQuoteLeft className="text-white text-3xl mb-4" />{" "}
              {/* Quote icon */}
              <p className="text-lg sm:text-xl italic mb-4 text-gray-800">
                "MirRenTX provided exceptional rentals and seamless service,
                making our wedding day absolutely stress-free!"
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                - RAFIQ AHMAD.
              </h3>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-black p-6 sm:p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
              <FaQuoteLeft className="text-white text-3xl mb-4" />{" "}
              {/* Quote icon */}
              <p className="text-lg sm:text-xl italic mb-4 text-gray-800">
                "Thanks to MirRenTX, our wedding was hassle-free with
                top-quality rentals and outstanding service. Truly a great
                experience!"
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                - IFLAQ AHMAD.
              </h3>
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
