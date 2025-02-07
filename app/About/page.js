"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaShoppingCart,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      {/* Section 1: Top Header with Background Blur */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/About-header.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-32">
          <h1 className="text-5xl font-bold drop-shadow-lg">
            Welcome to MirRenTX
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
            src="/owner-img.jpg" // Ensure this is a high-quality image
            alt="About MirRenTX"
            width={900} // High resolution
            height={1080}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-3xl font-bold mb-4">About MirRenTX</h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Founded in 2021 by Tanveer Mir, Sameer Mir, and Mohammad Salim,
            MirRenTX offers top-quality event rental services. Based in Kashmir,
            we specialize in tents, lighting, cameras, and generators for
            weddings, corporate events, and outdoor functions.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Our commitment to excellence has earned us trust in the event rental
            industry, ensuring seamless events with reliable, affordable
            services.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We aim to make event planning stress-free, delivering rentals on
            time and in excellent condition. Whether it’s a small gathering or
            large corporate event, we have you covered.
          </p>

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
      <section className="max-w-6xl mx-auto text-center  py-12 mb-16 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-50 shadow-2xl rounded-lg p-6 text-gray-800">
            <p className="text-lg italic">
              “MirRenTX made our wedding stress-free with their top-notch
              service and high-quality rentals. Highly recommended!”
            </p>
            <h3 className="text-xl font-semibold mt-4">- Sheikh Brothers</h3>
          </div>
          <div className="bg-purple-50 shadow-2xl rounded-lg p-6 text-gray-800">
            <p className="text-lg italic">
              “Professional, reliable, and affordable. The best rental service
              we have ever used!”
            </p>
            <h3 className="text-xl font-semibold mt-4">- Manzoor Pandow.</h3>
          </div>
          <div className="bg-purple-50 shadow-2xl rounded-lg p-6 text-gray-800">
            <p className="text-lg italic">
              “MirRenTX made our wedding stress-free with their top-notch
              service and high-quality rentals. Highly recommended!”
            </p>
            <h3 className="text-xl font-semibold mt-4">- Sheikh Brothers</h3>
          </div>{" "}
          <div className="bg-purple-50 shadow-2xl rounded-lg p-6 text-gray-800">
            <p className="text-lg italic">
              “MirRenTX made our wedding stress-free with their top-notch
              service and high-quality rentals. Highly recommended!”
            </p>
            <h3 className="text-xl font-semibold mt-4">- Sheikh Brothers</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
