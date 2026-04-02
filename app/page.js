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
    <div className="overflow-x-hidden min-h-screen bg-white">
      {/* Hero Section: Cinema-Light Edition */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 px-4 bg-[#f8fafc]"
      >
        {/* Animated Cinema Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/50 to-blue-50/30"></div>
        
        {/* Premium Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-purple-200/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[150px] animate-pulse delay-700"></div>
        </div>

        {/* Dynamic Micro-Particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-tr from-purple-400 to-blue-400"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-up ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          {/* Elite Trust Badge */}
          <div
            className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-purple-100/50 rounded-full px-6 py-2.5 mb-10 text-xs font-black uppercase tracking-[0.2em] text-purple-600 shadow-sm"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            Premium Equipment & Event Services
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95] text-slate-900"
            data-aos="zoom-out-up"
            data-aos-duration="1200"
          >
            The Gold Standard in <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 drop-shadow-sm">
              Event Excellence.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl font-medium text-slate-500 mb-14 leading-relaxed max-w-3xl mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Elite equipment solutions for visionary events. From state-of-the-art 
            lighting to professional logistics, we deliver the precision your 
            occasion deserves.
          </p>

          {/* Premium High-Impact CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 px-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link href="/rentals" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-[24px] shadow-2xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] font-black text-xs uppercase tracking-widest overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  <FaShoppingCart className="text-lg group-hover:rotate-12 transition-transform" />
                  Explore Rentals
                </span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </Link>
            
            <Link href="/About" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-white border-2 border-slate-100 hover:border-purple-200 text-slate-600 hover:text-purple-600 px-10 py-5 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] font-black text-xs uppercase tracking-widest">
                <span>Our Story</span>
                <FaArrowRight className="text-sm group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>

          {/* High-End Stats Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-20 pt-16 border-t border-slate-100/60 max-w-4xl mx-auto px-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {[
              { number: "250+", label: "Verified Reviews" },
              { number: "50+", label: "Premium Events" },
              { number: "24/7", label: "Elite Support" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.number}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
        }
      `}</style>

      {/* Features Grid Section: Premium Edition */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div 
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-[0.2em] border border-purple-100"
              data-aos="fade-up"
            >
              Why MirRenTX?
            </div>
            <h2
              className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter"
              data-aos="fade-up"
            >
              Excellence in <br className="sm:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Every Detail.</span>
            </h2>
            <p
              className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We provide more than just equipment. We deliver the reliability 
              and premium quality that turns ordinary events into extraordinary memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <FaCheckCircle className="text-blue-600 text-4xl" />,
                title: "Certified Quality",
                text: "Every piece of equipment undergoes rigorous 12-point inspection before delivery.",
                delay: 150
              },
              {
                icon: <FaStar className="text-purple-600 text-4xl" />,
                title: "Premium Catalog",
                text: "Access to industry-leading brands and state-of-the-art cinematic equipment.",
                delay: 300
              },
              {
                icon: <FaTools className="text-indigo-600 text-4xl" />,
                title: "Expert Logistics",
                text: "Professional setup and on-site technical support for a seamless experience.",
                delay: 450
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-10 rounded-[32px] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(94,74,227,0.1)] transition-all duration-500 transform hover:-translate-y-2 cursor-default"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className="mb-8 p-5 bg-slate-50 rounded-2xl w-fit group-hover:bg-purple-50 transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase: Cinematic Split */}
      <section className="py-32 px-6 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="relative">
                {/* Master Image Frame */}
                <div className="relative overflow-hidden rounded-[40px] shadow-2xl border-8 border-white">
                  <img
                    src="/hero-mg.avif"
                    alt="Event Excellence"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Detail Plate */}
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[32px] shadow-2xl border border-slate-100 animate-float hidden sm:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-black text-xs">
                      100%
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Satisfaction</div>
                      <div className="text-sm font-black text-slate-900">Guaranteed Result</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="mb-10">
                <div className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-4">Elite Capabilities</div>
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
                  Everything You Need <br />
                  <span className="text-slate-400 italic font-medium">For Your Next Event.</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  We specialize in high-end rental solutions that bring your vision to life. 
                  Whether it's a corporate gala or a private celebration, our premium 
                  catalog ensures every moment is spectacular.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {[
                  { icon: <GiCampingTent />, title: "Luxury Canopies", color: "bg-blue-50 text-blue-600" },
                  { icon: <FaLightbulb />, title: "Ambient Lighting", color: "bg-yellow-50 text-yellow-600" },
                  { icon: <FaCamera />, title: "Cinema Gear", color: "bg-purple-50 text-purple-600" },
                  { icon: <FaBolt />, title: "Static Power", color: "bg-slate-900 text-white" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-3xl bg-white border border-slate-100 hover:border-purple-200 transition-all shadow-sm">
                    <div className={`${item.color} p-3 rounded-2xl text-xl`}>
                      {item.icon}
                    </div>
                    <span className="font-black text-slate-900 text-xs uppercase tracking-wider">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/rentals" className="w-full sm:w-auto">
                  <button className="w-full px-12 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-3xl font-black text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-[0.98]">
                    Explore Rentals
                  </button>
                </Link>
                <Link href="/Contact" className="w-full sm:w-auto">
                  <button className="w-full px-12 py-5 bg-white border-2 border-slate-100 hover:border-purple-200 text-slate-600 hover:text-purple-600 rounded-3xl font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-[0.98]">
                    Contact Agent
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section: Brand Masterpiece */}
      <section className="py-24 px-6 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-6xl mx-auto rounded-[60px] bg-slate-900 overflow-hidden relative p-12 md:p-24 text-center">
          {/* Animated Background Splashes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6 animate-pulse">
              Ready to begin?
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.95]">
              Let’s Create Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Next Masterpiece.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-14 font-medium leading-relaxed">
              Experience the MirRenTX difference today. Join 100+ visionaries 
              who trust us with their most important moments.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/rentals" className="w-full sm:w-auto">
                <button className="w-full px-12 py-6 bg-white text-slate-900 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all active:scale-[0.98]">
                  Reserve Now
                </button>
              </Link>
              <Link href="/Contact" className="w-full sm:w-auto">
                <button className="w-full px-12 py-6 bg-slate-800 text-white rounded-[24px] font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-700 transition-all hover:scale-105 active:scale-[0.98]">
                  Get Proposal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
