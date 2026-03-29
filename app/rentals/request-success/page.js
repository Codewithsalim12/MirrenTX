"use client";
import Link from "next/link";
import { FaCheckCircle, FaPhoneAlt, FaHome, FaArrowRight, FaClock, FaHeadset } from "react-icons/fa";

export default function RequestSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-[40px] shadow-2xl border border-purple-100 overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/30 animate-bounce">
                <FaCheckCircle className="text-white text-5xl" />
              </div>
              <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
                Request Received!
              </h1>
              <p className="text-white/80 text-lg font-medium">
                Your booking details have been successfully shared with our team.
              </p>
            </div>
          </div>

          <div className="p-10 lg:p-14">
            {/* Next Steps Section */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center uppercase tracking-wider text-sm opacity-60">
                What happens next?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                    <FaClock className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Detailed Review</h3>
                    <p className="text-gray-600">Our experts are reviewing your equipment needs and location logistics right now.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                    <FaHeadset className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Personal Callback</h3>
                    <p className="text-gray-600">You will receive a call within 30 minutes to finalize the best possible rate for you.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/"
                className="flex items-center justify-center px-8 py-5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold transition-all duration-300 group"
              >
                <FaHome className="mr-3 text-lg opacity-50 group-hover:opacity-100" />
                Back to Home
              </Link>
              <button 
                onClick={() => window.open("tel:+918082815863")}
                className="flex items-center justify-center px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-blue-200 transform hover:scale-105"
              >
                <FaPhoneAlt className="mr-3 text-xl" />
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
