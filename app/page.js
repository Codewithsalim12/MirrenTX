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
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden pt-16"
        style={{
          backgroundImage: "url('/hero-img.avif')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-black/70 to-green-900/90"></div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-gradient"></div>
        </div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-400 to-green-400"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-white/20 rounded-lg animate-bounce"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 py-24 max-w-6xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 text-sm font-medium"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Trusted by 50+ Happy Customers
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Premium Event Rentals <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-gradient drop-shadow-2xl">
              MirRenTX
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 mb-10 leading-relaxed max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Transform your events with our premium tents, professional lighting,
            high-end cameras, and reliable generators. Experience hassle-free
            booking, exceptional service, and unforgettable moments.
          </p>

          {/* Stats */}
          <div
            className="flex flex-wrap justify-center gap-8 mb-12 text-sm"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {[
              { number: "50+", label: "Events Completed" },
              { number: "24/7", label: "Support Available" },
              { number: "100%", label: "Quality Guaranteed" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link href="/rentals">
              <button className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-4 rounded-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-3 min-w-[200px]">
                <span className="relative z-10 flex items-center gap-3">
                  <FaShoppingCart className="text-xl" />
                  <span>Explore Rentals</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
            <Link href="/About">
              <button className="relative overflow-hidden group glass-effect border-2 border-white/30 text-white px-10 py-4 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-3 min-w-[200px]">
                <span className="relative z-10">Learn More</span>
                <FaArrowRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 relative"
              data-aos="fade-up"
            >
              <span className="relative inline-block">
                Why Choose
                <span className="gradient-text ml-3">MirRenTX</span>?
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full"></span>
              </span>
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Experience the difference with our premium rental services,
              trusted by hundreds of satisfied customers across Kashmir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: <FaCheckCircle className="text-green-500 text-5xl" />,
                title: "Trusted Service",
                text: "Reliable rentals with 100% quality assurance and on-time delivery",
                bg: "bg-gradient-to-br from-green-50 to-green-100/50",
                border: "border-green-200",
                accent: "text-green-600",
              },
              {
                icon: <FaStar className="text-yellow-500 text-5xl" />,
                title: "Premium Quality",
                text: "Top-tier equipment maintained to perfection for flawless events",
                bg: "bg-gradient-to-br from-yellow-50 to-yellow-100/50",
                border: "border-yellow-200",
                accent: "text-yellow-600",
              },
              {
                icon: <FaTools className="text-blue-500 text-5xl" />,
                title: "24/7 Support",
                text: "Dedicated assistance and technical support whenever you need it",
                bg: "bg-gradient-to-br from-blue-50 to-blue-100/50",
                border: "border-blue-200",
                accent: "text-blue-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.bg} p-8 lg:p-10 rounded-3xl modern-shadow hover:modern-shadow-lg transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border ${item.border} group cursor-pointer`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-base">
                    {item.text}
                  </p>
                  <Link
                    href="/About"
                    className={`${item.accent} hover:opacity-80 font-semibold flex items-center gap-2 transition-all duration-300 group-hover:gap-3`}
                  >
                    Learn more
                    <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Showcase */}
      <section className="py-24 px-6 bg-gradient-to-br from-white via-gray-50/50 to-green-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="relative group">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/hero-mg.avif"
                    alt="Event Rentals"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 p-6 rounded-2xl shadow-2xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 animate-float">
                  <FaStar className="text-white text-3xl" />
                </div>

                {/* Stats Overlay */}
                <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-gray-600">Happy Events</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="mb-8">
                <span className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Premium Services
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  Complete Event Solutions <br />
                  <span className="gradient-text">Tailored for You</span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                From intimate gatherings to grand celebrations, we provide
                everything you need to create unforgettable moments with our
                premium rental equipment and professional services. Experience
                the difference with MirRenTX.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    icon: <GiCampingTent className="text-green-600 text-3xl" />,
                    text: "Luxury Tents & Canopies",
                    desc: "Weather-resistant premium tents",
                  },
                  {
                    icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
                    text: "Elegant Lighting",
                    desc: "Professional LED & ambient lighting",
                  },
                  {
                    icon: <FaCamera className="text-blue-500 text-3xl" />,
                    text: "Professional Cameras",
                    desc: "High-end DSLR & video equipment",
                  },
                  {
                    icon: <FaBolt className="text-purple-500 text-3xl" />,
                    text: "Powerful Generators",
                    desc: "Silent & reliable power solutions",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 border border-gray-100 hover:border-gray-200 modern-shadow hover:modern-shadow-lg transform hover:-translate-y-1"
                  >
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors">
                        {item.text}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6">
                <Link href="/rentals">
                  <button className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 font-semibold flex items-center gap-3 min-w-[200px] transform hover:scale-105">
                    <span className="relative z-10">Browse All Rentals</span>
                    <FaArrowRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </Link>
                <Link href="/Contact">
                  <button className="relative overflow-hidden group glass-effect border-2 border-gray-200 text-gray-800 px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center gap-3 min-w-[200px] transform hover:scale-105">
                    <span className="relative z-10">Contact Us</span>
                    <FaArrowRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-gradient"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border border-white/20 rounded-lg animate-bounce"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 text-sm font-medium"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Start Your Journey Today
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            data-aos="fade-up"
          >
            Ready to Elevate Your
            <span className="block gradient-text">Event Experience?</span>
          </h2>

          <p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's create something extraordinary together. Join hundreds of
            satisfied customers who trust MirRenTX for their special moments.
          </p>

          {/* Stats */}
          <div
            className="flex flex-wrap justify-center gap-8 mb-12"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {[
              { number: "50+", label: "Events Completed" },
              { number: "24/7", label: "Customer Support" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link href="/rentals">
              <button className="relative overflow-hidden group bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center gap-3 min-w-[200px] transform hover:scale-105">
                <span className="relative z-10">Book Now</span>
                <FaShoppingCart className="relative z-10 text-lg group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
            <Link href="/Contact">
              <button className="relative overflow-hidden group glass-effect border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:shadow-white/10 transition-all duration-300 flex items-center gap-3 min-w-[200px] transform hover:scale-105">
                <span className="relative z-10">Get a Quote</span>
                <FaArrowRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
