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
import ProtectedRoute from "../components/ProtectedRoute";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
const rentalsData = [
  {
    id: 1,
    title: "Generator",
    icon: <FaBolt className="w-6 h-6 text-white" />,
    description: "Power up your events with our reliable generators.",
    image: "/generator.webp",
    category: "Power Solutions",
    rating: 4.9,
    reviews: 45,
    price: "₹2,500/day",
    features: ["Silent Operation", "Fuel Efficient", "24/7 Support"],
    popular: true,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    title: "Tents",
    icon: <FaCampground className="w-6 h-6 text-white" />,
    description: "Spacious and durable tents for all your outdoor needs.",
    image: "/Tent-img.jpg",
    category: "Shelter & Comfort",
    rating: 4.8,
    reviews: 62,
    price: "₹3,000/day",
    features: ["Weather Resistant", "Easy Setup", "Multiple Sizes"],
    popular: false,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    id: 3,
    title: "Lighting System",
    icon: <FaLightbulb className="w-6 h-6 text-white" />,
    description:
      "Brighten up your events with our professional lighting systems.",
    image: "/Lighting Decoration.jpg",
    category: "Ambiance & Decor",
    rating: 4.9,
    reviews: 38,
    price: "₹1,800/day",
    features: ["LED Technology", "Color Shift", "Remote Control"],
    popular: true,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    id: 4,
    title: "DSLR Camera",
    icon: <FaCamera className="w-6 h-6 text-white" />,
    description: "Capture every moment with our high-quality DSLR cameras.",
    image: "/Dslr.avif",
    category: "Photography",
    rating: 4.7,
    reviews: 29,
    price: "₹2,200/day",
    features: ["4K Video", "Professional Lens", "Memory Card Included"],
    popular: false,
    gradient: "from-blue-400 to-cyan-500",
  },
];

export default function RentalsPage() {
  const router = useRouter();
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add this click handler function
  const handleRentNow = (itemId) => {
    router.push(`/rentals/rent-form?item=${itemId}`);
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
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                    Premium Equipment
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
                  Rentals
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl -z-10"></div>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Everything you need for your perfect event. Professional
                equipment, competitive prices, and exceptional service.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-12">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>50+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <span>4.9 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaThumbsUp className="text-blue-500" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Rental Cards Section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredData.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-blue-200"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Popular Badge */}
                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <FaFire className="text-xs animate-pulse" />
                      Popular
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:bg-white"
                  >
                    <FaHeart
                      className={`text-lg transition-colors duration-300 ${
                        favorites.includes(item.id)
                          ? "text-red-500"
                          : "text-gray-400 hover:text-red-400"
                      }`}
                    />
                  </button>

                  {/* Rating Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-sm font-bold text-gray-800">
                      {item.rating}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({item.reviews})
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wide">
                      {item.category}
                    </span>
                    <div
                      className={`p-2 rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium hover:bg-gray-200 transition-colors duration-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleRentNow(item.id)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <FaShoppingCart className="text-sm" />
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Services Section */}
        <section className="relative bg-gradient-to-b from-green-50 to-white py-20 flex justify-center items-center min-h-screen">
          {/* Decorative Wave */}
          <div className="absolute top-0 left-0 w-full">
            <svg
              viewBox="0 0 1440 320"
              className="w-full h-20 text-green-200"
              fill="currentColor"
            >
              <path
                fillOpacity="1"
                d="M0,160L60,138.7C120,117,240,75,360,64C480,53,600,75,720,106.7C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 relative inline-block">
              New Services
              <span className="block w-20 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
            </h2>

            <p className="text-gray-600 mb-12 max-w-lg mx-auto">
              We’re introducing new services to elevate your events. Stay tuned
              for more!
            </p>

            <div className="relative flex justify-center">
              <div className="absolute w-80 h-80 bg-green-300 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg text-center w-96 border-t-4 border-green-500 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                <div className="absolute top-3 right-3 animate-spin-slow">
                  <FaStar className="w-6 h-6 text-yellow-400" />
                </div>
                <FaPalette className="w-14 h-14 mb-4 text-green-500 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  Event Decoration
                </h3>
                <p className="text-gray-600 mb-4">
                  Transform your events with our elegant and creative decoration
                  services.
                </p>
                <button
                  onClick={handleNotifyClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Notify Me When Available
                </button>
              </div>
            </div>

            <p className="text-gray-500 mt-8 text-sm">
              More exciting services coming soon... Stay updated!
            </p>
          </div>
        </section>

        {/* Upcoming Rentals Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Rentals
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Exciting new rental options are coming soon. Be the first to
                know when they're available!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaCamera className="text-2xl text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Drone Rentals
                </h3>

                <p className="text-gray-600 mb-6">
                  Capture stunning aerial footage and photography with our
                  professional-grade drones.
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {["4K Recording", "GPS Enabled", "Professional Grade"].map(
                    (feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    )
                  )}
                </div>

                <button
                  onClick={handleNotifyClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Notify Me
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaChair className="text-2xl text-purple-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Tables & Chairs
                </h3>

                <p className="text-gray-600 mb-6">
                  Elegant and comfortable furniture sets perfect for weddings,
                  parties, and corporate events.
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {["Premium Quality", "Various Styles", "Event Ready"].map(
                    (feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    )
                  )}
                </div>

                <button
                  onClick={handleNotifyClick}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Notify Me
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500">
                Stay tuned for more exciting rental options!
              </p>
            </div>
          </div>

          <ToastContainer />
        </section>
      </div>
    </ProtectedRoute>
  );
}
