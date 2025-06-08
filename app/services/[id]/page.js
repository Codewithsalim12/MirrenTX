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
      "Transform any occasion into a breathtaking event with our premium setup and decoration services. Whether it's a wedding, corporate event, or private party, we bring creativity and precision to make your event unforgettable.",
    icon: <FaTools className="text-blue-600" />,
    cta: "Get a Free Consultation",
    rating: 4.9,
    reviews: 127,
    price: "Starting from $299",
    features: [
      "Custom Themes",
      "Professional Setup",
      "Quality Materials",
      "24/7 Support",
    ],
    category: "Decoration",
    duration: "4-8 hours",
  },
  {
    id: "photography-videography",
    name: "Photography & Videography",
    image: "/videoGraphy.avif",
    longDescription:
      "Capture every special moment with our expert photographers and videographers. We create stunning visuals using state-of-the-art equipment, preserving memories in a unique and timeless way.",
    icon: <FaCamera className="text-blue-600" />,
    cta: "Book Your Session Now",
    rating: 4.8,
    reviews: 89,
    price: "Starting from $199",
    features: [
      "4K Video Quality",
      "Professional Editing",
      "Same Day Delivery",
      "Unlimited Shots",
    ],
    category: "Photography",
    duration: "2-6 hours",
  },
  {
    id: "event-video-editing",
    name: "Event Video Editing",
    image: "/video-editing.avif",
    longDescription:
      "Our professional video editors turn your raw event footage into a compelling story. We offer high-quality editing, including color grading, special effects, and cinematic transitions.",
    icon: <FaVideo className="text-blue-600" />,
    cta: "Start Your Project Today",
    rating: 4.9,
    reviews: 156,
    price: "Starting from $149",
    features: [
      "Color Grading",
      "Special Effects",
      "Music Integration",
      "Fast Turnaround",
    ],
    category: "Video Editing",
    duration: "3-5 days",
  },
];

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-center text-red-500 text-xl mt-20">
        Service not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 pt-16 lg:pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 group mb-6"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Services</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-t-3xl shadow-2xl overflow-hidden"
        >
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Service Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-3xl text-blue-600">{service.icon}</div>
              </div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                <span>{service.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {service.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-lg ${
                        i < Math.floor(service.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-gray-900 font-bold ml-2 text-lg">
                    {service.rating}
                  </span>
                </div>
                <span className="text-gray-600 font-medium">
                  ({service.reviews} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.longDescription}
              </p>

              {/* Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  What&apos;s Included:
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheckCircle className="text-green-600" />
                      </div>
                      <span className="text-gray-800 font-medium text-lg">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link href="/Contact">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {service.cta}
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    24/7
                  </div>
                  <div className="text-blue-700 font-medium">
                    Support Available
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    100%
                  </div>
                  <div className="text-green-700 font-medium">
                    Satisfaction Guaranteed
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
