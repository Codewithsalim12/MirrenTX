"use client";
import { servicesData } from "../data/servicesData";
import { useState } from "react";
import Link from "next/link";
import {
  FaTools,
  FaCamera,
  FaTruck,
  FaUsers,
  FaConciergeBell,
  FaStar,
  FaCheckCircle,
  FaShoppingCart,
  FaVideo,
  FaCampground,
  FaLightbulb,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProtectedRoute from "../components/ProtectedRoute";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const slides = [
  {
    id: 1,
    title: "Our Services",
    subtitle: "High-quality services tailored for you.",
    image: "/slider2.avif",
  },
  {
    id: 2,
    title: "Pricing Plans",
    subtitle: "Affordable plans for every budget.",
    image: "/slider1.avif",
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Slider */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            >
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold">
                  {slides[currentIndex].title}
                </h2>
                <p className="text-lg">{slides[currentIndex].subtitle}</p>
                <button className="text-white bg-gradient-to-r from-green-500 to-teal-500 transition-all hover:from-green-600 hover:to-teal-600 px-10 py-4 rounded-lg shadow-md">
                  Book Now
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-800" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        {/* Services Section */}
        <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-center border border-gray-100"
            >
              <div className="text-6xl text-blue-500 mx-auto mb-6">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {service.name}
              </h2>
              <p className="text-gray-600 mt-4 text-base leading-relaxed">
                {service.description}
              </p>
              <Link href={`/services/${service.id}`}>
                <button className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all font-semibold hover:shadow-md">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </section>

        {/* Pricing Plans Section */}
        <section
          id="Pricing"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4 md:px-10 text-center"
        >
          <h2 className="text-4xl font-bold">Our Pricing Plans</h2>
          <p className="text-lg mt-3 max-w-3xl mx-auto">
            Choose a plan that fits your needs. We offer flexible pricing
            options for every event size.
          </p>

          {/* Pricing Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                id: 1,
                title: "Lighting & Generator",
                description:
                  "Enhance your event with beautiful lighting setups and reliable generator.",
                price: "$150",
                icon: <FaLightbulb className="w-14 h-14 text-blue-600" />,
                subTitle: "Lighting with Generator",
              },
              {
                id: 2,
                title: "DSLR Camera Rental",
                description:
                  "Capture your special moments with top-quality DSLR cameras for your event.",
                price: "$200",
                icon: <FaCamera className="w-14 h-14 text-blue-600" />,
                subTitle: "High-Resolution Photography",
              },
              {
                id: 3,
                title: "Tents & Camping Gear",
                description:
                  "Perfect for outdoor events, offering tents and camping equipment for all sizes.",
                price: "$300",
                icon: <FaCampground className="w-14 h-14 text-blue-600" />,
                subTitle: "Comfortable Outdoor Setup",
              },
            ].map((plan) => (
              <div
                key={plan.id}
                className="bg-white/90 backdrop-blur-lg text-gray-900 p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden flex flex-col items-center text-center border border-gray-200"
              >
                {/* Gradient Border on Top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

                {/* Icon Container */}
                <div className="p-5 bg-blue-100 rounded-full shadow-lg mb-6">
                  {plan.icon}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-semibold">{plan.title}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
                <p className="text-lg text-gray-500 mt-1">{plan.subTitle}</p>

                {/* Price */}
                <p className="text-3xl font-bold mt-4">
                  {plan.price}{" "}
                  <span className="text-lg text-gray-600">/ Starting from</span>
                </p>

                {/* Call to Action */}
                <Link href="/rentals">
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 flex items-center justify-center space-x-2 transition-all">
                    <span>Book Now</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
            {/* Image Section with Shadow & Rounded Corners */}
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="/services-img.avif"
                  alt="Service Details"
                  className="w-full rounded-xl shadow-2xl transform transition duration-500 hover:scale-105"
                />
                {/* Decorative Overlay */}
                <div className="absolute top-5 left-5 w-16 h-16 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 text-center md:text-left bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg">
              <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
                Comprehensive Event Solutions
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                We provide tailored event services, including logistics, decor,
                and professional photography. Ensure a seamless experience with
                our dedicated team.
              </p>

              {/* Animated Button */}
              <Link
                className="mt-6 inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition transform hover:scale-105 font-semibold"
                href="/services"
              >
                Explore Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
