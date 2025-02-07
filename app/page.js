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
        className="min-h-[100vh] flex items-center justify-center bg-cover bg-center bg-fixed relative before:absolute before:inset-0 before:bg-black before:opacity-60"
        style={{ backgroundImage: "url('/hero-mg.avif')" }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center justify-center text-center text-white relative z-10 py-20">
          <h1 className="text-5xl font-extrabold mb-6">
            Welcome to <span className=" text-green-500">MirRenTX</span>{" "}
            Services
          </h1>
          <p
            className="text-lg font-light text-gray-300 mb-8 px-4"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            Rent tents, lighting, cameras, generators, and more for weddings,
            parties, and events. Hassle-free booking, <br />
            reliable service, and quality equipment for a memorable occasion.
          </p>
          <Link href="/rentals">
            <button
              className="bg-green-500 text-white px-8 py-3 rounded-lg shadow-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 mb-4 font-semibold"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              View Rentals
            </button>
          </Link>
          <Link href="#about">
            <button
              className="bg-transparent font-semibold text-white border-2 border-white px-8 py-3 rounded-lg shadow-md hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1500"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Sliding Text Section (Restored) */}
      {/* Sliding Text Section (Restored) */}
      <div className="absolute top-[12vh] left-0 w-full bg-yellow-600 text-white py-2 overflow-hidden z-20">
        <div className="animate-slide">
          <p className="text-sm sm:text-lg md:text-sm font-semibold whitespace-nowrap px-4">
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
      <section
        className="bg-gray-100 py-16 px-6 text-center"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2
          className="text-3xl font-bold text-gray-800 mb-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaCheckCircle className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Trusted Service</h3>
            <p className="text-gray-600">
              Providing reliable rentals with quality assurance.
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaTruck className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and hassle-free delivery for your events.
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaStar className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Top Quality</h3>
            <p className="text-gray-600">
              High-quality equipment to enhance your experience.
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaTools className="text-red-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock assistance for your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section
        className="py-16 px-6 bg-gray-100"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/rent-img.avif"
              alt="Rental Services"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Premium Rental Services for Your Events
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide high-quality rentals including tents, lighting,
              cameras, and generators to make your event seamless and memorable.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div
                className="flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <GiCampingTent className="text-green-600 text-3xl" />
                <span className="text-lg font-semibold">Tents & Canopies</span>
              </div>
              <div
                className="flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <FaLightbulb className="text-yellow-500 text-3xl" />
                <span className="text-lg font-semibold">Lighting & Decor</span>
              </div>
              <div
                className="flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <FaCamera className="text-blue-500 text-3xl" />
                <span className="text-lg font-semibold">Camera Rentals</span>
              </div>
              <div
                className="flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <FaBolt className="text-red-500 text-3xl" />
                <span className="text-lg font-semibold">Generator Rentals</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <FaShoppingCart /> <Link href="rentals">Book Now</Link>
              </button>
              <button
                className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-900 transition"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <FaCamera /> <Link href="Gallery">View Gallery</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
