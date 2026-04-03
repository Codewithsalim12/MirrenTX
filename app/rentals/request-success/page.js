"use client";
import Link from "next/link";
import { FaCheckCircle, FaPhoneAlt, FaHome, FaArrowRight, FaClock, FaHeadset } from "react-icons/fa";

export default function RequestSuccess() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 bg-gradient-to-br from-white via-purple-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-sm sm:max-w-md w-full">
        <div className="bg-white rounded-[28px] shadow-2xl border border-purple-100 overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30 animate-bounce">
                <FaCheckCircle className="text-white text-3xl" />
              </div>
              <h1 className="text-2xl font-extrabold text-white mb-1 tracking-tight">
                Request Received!
              </h1>
              <p className="text-white/80 text-sm font-medium">
                Your booking details have been shared with our team.
              </p>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            {/* Next Steps Section */}
            <div className="mb-6">
              <h2 className="text-[10px] font-bold text-gray-400 mb-4 flex items-center uppercase tracking-[0.2em] opacity-80">
                What happens next?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <FaClock className="text-blue-600 text-xs" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Detailed Review</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">Experts are reviewing your request and logistics now.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <FaHeadset className="text-purple-600 text-xs" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Personal Callback</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">You'll receive a call within 30 mins to finalize the rate.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2">
              <Link 
                href="/"
                className="flex items-center justify-center px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl font-bold transition-all duration-300 group text-xs"
              >
                <FaHome className="mr-2 text-sm opacity-40 group-hover:opacity-100" />
                Back to Home
              </Link>
              <button 
                onClick={() => window.open("tel:+918082815863")}
                className="flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-50 transform hover:scale-105 text-xs"
              >
                <FaPhoneAlt className="mr-2 text-sm" />
                Call Now
              </button>
            </div>
          </div>

          {/* Footer Branding */}
          <div className="bg-gray-50/50 p-6 text-center border-t border-gray-100">
             <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
               MirrenTX Premium Rentals
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}
