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


export default function About() {
  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      {/* Section 1: Top Header with Background Blur */}
      <section
        className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] rounded-lg"
        style={{ backgroundImage: "url('/about-header.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 rounded-lg overflow-hidden"></div>
        <div className="relative z-10 text-center text-white py-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-50 tracking-tight leading-tight mt- drop-shadow-lg ">
            Welcome To MirRenTX
          </h1>
          <p className="mt-4 text-lg">
            Your trusted partner in event rental services
            <Link className="flex justify-center mt-4" href="/rentals">
              <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition">
                <FaShoppingCart /> Book Now
              </button>
            </Link>
          </p>
        </div>
      </section>
      {/* Section 2: About MirRenTX */}
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
            Founded in 2021 by Sameer and Tanveer Mir, MirRenTX offers top-tier
            event rental services across Kashmir. Specializing in a wide range
            of equipment, including tents, lighting, cameras, and generators, we
            cater to weddings, corporate events, and outdoor functions. Our
            mission is to provide reliable, affordable solutions that take the
            stress out of event planning. With a focus on quality, we ensure all
            rentals are delivered on time and in excellent condition. We are
            committed to customer satisfaction, making every event—big or
            small—seamless and memorable.
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
              "Thanks to MirRenTX, our wedding was hassle-free with top-quality
              rentals and outstanding service. Truly a great experience!"
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
