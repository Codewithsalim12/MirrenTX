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
} from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init(); // Initialize AOS for scroll animations
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative before:absolute before:inset-0 before:bg-black before:opacity-60"
        style={{ backgroundImage: "url('/hero-mg.avif')" }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="relative z-10 text-center text-white px-6 py-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Welcome to{" "}
            <span className="text-green-400 drop-shadow-md">MirRenTX</span>{" "}
            Services
          </h1>
          <p
            className="text-lg sm:text-xl font-light text-gray-300 mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Rent tents, lighting, cameras, generators, and more for weddings,
            parties, and events. Hassle-free booking, <br />
            reliable service, and quality equipment for a memorable occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/rentals">
              <button
                className="bg-green-500 text-white px-8 py-3 rounded-lg shadow-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 font-semibold"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                View Rentals
              </button>
            </Link>
            <Link href="#about">
              <button
                className="bg-transparent font-semibold text-white border-2 border-white px-8 py-3 rounded-lg shadow-md hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sliding Text Section */}
      <div className="hidden sm:block absolute top-[12vh] left-0 w-full bg-yellow-600 text-white py-2 overflow-hidden z-20">
        <div className="animate-slide">
          <p className="text-lg font-semibold whitespace-nowrap px-4">
            Discover quality rental services for your events. Rent cameras,
            tents, and generators. Enjoy seamless booking!
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-slide {
          display: inline-block;
          animation: slide 15s linear infinite;
        }
      `}</style>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaCheckCircle className="text-green-500 text-5xl mb-4" />,
              title: "Trusted Service",
              text: "Providing reliable rentals with quality assurance.",
            },
            {
              icon: <FaTruck className="text-blue-500 text-5xl mb-4" />,
              title: "Fast Delivery",
              text: "Quick and hassle-free delivery for your events.",
            },
            {
              icon: <FaStar className="text-yellow-500 text-5xl mb-4" />,
              title: "Top Quality",
              text: "High-quality equipment to enhance your experience.",
            },
            {
              icon: <FaTools className="text-red-500 text-5xl mb-4" />,
              title: "24/7 Support",
              text: "Round-the-clock assistance for your convenience.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img
              src="/rent-img.avif"
              alt="Rental Services"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-aos="fade-up"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Premium Rental Services for Your Events
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We provide high-quality rentals including tents, lighting,
              cameras, and generators to make your event seamless and memorable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <GiCampingTent className="text-green-600 text-3xl" />,
                  text: "Tents & Canopies",
                },
                {
                  icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
                  text: "Lighting & Decor",
                },
                {
                  icon: <FaCamera className="text-blue-500 text-3xl" />,
                  text: "Camera Rentals",
                },
                {
                  icon: <FaBolt className="text-red-500 text-3xl" />,
                  text: "Generator Rentals",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-lg font-semibold text-gray-800">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mt-6">
              <Link href="/rentals">
                <button className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition">
                  <FaShoppingCart className="inline-block mr-2" /> Book Now
                </button>
              </Link>
              <Link href="/gallery">
                <button className="bg-gray-800 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-900 transition">
                  <FaCamera className="inline-block mr-2" /> View Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
