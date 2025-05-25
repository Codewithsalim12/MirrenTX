"use client";
import Link from "next/link";
import {
  FaCheckCircle,
  FaTruck,
  FaStar,
  FaTools,
  FaCamera,
  FaLightbulb,
  FaBolt,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/hero-img.avif')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        {/* Enhanced Animated Particles Background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map(
            (
              _,
              i // Increased from 20 to 50 bubbles
            ) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 10 + 3}px`, // Increased max size from 5 to 10px
                  height: `${Math.random() * 10 + 3}px`, // Increased max size from 5 to 10px
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 15 + 5}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              ></div>
            )
          )}
        </div>

        <div className="relative z-10 text-center text-white px-6 py-24">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Premium Event Rentals <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-2xl">
              MirRenTX
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl font-light text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Elevate your events with our premium tents, lighting, cameras, and
            generators. Hassle-free booking, exceptional service, and
            unforgettable experiences.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link href="/rentals">
              <button className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-2">
                <span className="relative z-10 flex items-center gap-2">
                  <FaShoppingCart className="text-xl" /> Explore Rentals
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
            <Link href="/About">
              {" "}
              {/* Changed from #about to /about */}
              <button className="relative overflow-hidden group bg-transparent border-2 border-blue-400 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-2">
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>

      {/* Features Grid Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-gray-800 mb-16 relative"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              Why Choose MirRenTX?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCheckCircle className="text-green-500 text-4xl" />,
                title: "Trusted Service",
                text: "Reliable rentals with 100% quality assurance",
                bg: "bg-green-50",
              },
              {
                icon: <FaStar className="text-yellow-500 text-4xl" />,
                title: "Premium Quality",
                text: "Top-tier equipment for flawless events",
                bg: "bg-yellow-50",
              },
              {
                icon: <FaTools className="text-red-500 text-4xl" />,
                title: "24/7 Support",
                text: "Dedicated assistance whenever needed",
                bg: "bg-red-50",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.bg} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-white rounded-full shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{item.text}</p>
                  <Link
                    href="/About"
                    className="text-blue-500 hover:text-blue-600 font-medium flex items-center gap-2 transition-colors"
                  >
                    Learn more <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Showcase */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="relative group">
                <img
                  src="/hero-mg.avif"
                  alt="Event Rentals"
                  className="w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500 object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-xl shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                  <FaStar className="text-white text-2xl" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Complete Event Solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                  Tailored for You
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From intimate gatherings to grand celebrations, we provide
                everything you need to create unforgettable moments with our
                premium rental equipment and professional services.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    icon: <GiCampingTent className="text-green-600 text-2xl" />,
                    text: "Luxury Tents & Canopies",
                  },
                  {
                    icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
                    text: "Elegant Lighting",
                  },
                  {
                    icon: <FaCamera className="text-blue-500 text-2xl" />,
                    text: "Professional Cameras",
                  },
                  {
                    icon: <FaBolt className="text-red-500 text-2xl" />,
                    text: "Powerful Generators",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-100"
                  >
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      {item.icon}
                    </div>
                    <span className="font-medium text-gray-800">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/rentals">
                  <button className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 font-medium flex items-center gap-2">
                    <span className="relative z-10">Browse All Rentals</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </Link>
                <Link href="/Contact">
                  <button className="relative overflow-hidden group bg-white border border-gray-300 text-gray-800 px-8 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 font-medium flex items-center gap-2">
                    <span className="relative z-10">Contact Us</span>
                    <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Elevate Your Event?
          </h2>
          <p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's create something extraordinary together. Get in touch with our
            team today.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link href="/rentals">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center gap-2 shadow-lg hover:shadow-xl">
                Book Now
              </button>
            </Link>
            <Link href="/Contact">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition flex items-center gap-2">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
