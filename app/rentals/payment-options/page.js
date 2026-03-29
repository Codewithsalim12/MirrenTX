"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaWhatsapp,
  FaCreditCard,
  FaArrowLeft,
  FaSpinner,
  FaCheck,
  FaShieldAlt,
  FaLock,
  FaMobile,
  FaGlobe,
  FaHeadset,
  FaInfoCircle,
  FaHistory,
  FaFileInvoiceDollar,
  FaPhoneAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function PaymentOptions() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/918082815863?text=I%20just%20submitted%20a%20rental%20request.%20Can%20we%20finalize%20the%20quote%3F",
      "_blank"
    );
  };

  const handleCall = () => {
    window.open("tel:+918082815863");
  };

  const handleCallback = async () => {
    setIsLoading(true);
    try {
      // Get rental data from localStorage
      const savedData = localStorage.getItem("rentalFormState");
      const rentalData = savedData ? JSON.parse(savedData) : {};

      const response = await fetch("/api/callback-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rentalData),
      });

      if (!response.ok) throw new Error("Failed to send request");

      toast.success("Callback request sent successfully!");
      router.push("/rentals/request-success");
    } catch (error) {
      console.error("Callback error:", error);
      toast.error("Failed to send request. Please try again or use WhatsApp.");
      setIsLoading(false);
    }
  };

  const handlePayOnline = () => {
    setIsLoading(true);
    // For now, this still leads to payment details, but we'll frame it as a deposit/advance
    setTimeout(() => {
      router.push("/rentals/payment-details");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 py-12 px-4 shadow-inner">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Finalize Your Quote
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Because every rental is unique (location, duration, and setup), we
            provide custom quotes to ensure you get the best deal.
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                <FaCheck />
              </div>
              <span className="ml-2 text-sm font-medium text-green-600">
                Details
              </span>
            </div>
            <div className="w-12 h-0.5 bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                <FaCheck />
              </div>
              <span className="ml-2 text-sm font-medium text-green-600">
                Confirm
              </span>
            </div>
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-sm font-medium text-blue-600">
                Finalize
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left Side - Payment Options */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              <div className="mb-8">
                <button
                  onClick={() => router.back()}
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-6"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to Confirmation
                </button>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Booking Personalization
                </h2>
                <p className="text-gray-600">
                  Select how you would like to finalize your rental price and
                  secure the dates.
                </p>
              </div>

              {/* Pricing Context Note */}
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 mb-8">
                <div className="flex items-start">
                  <FaInfoCircle className="text-purple-600 mt-1 mr-4 text-xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-purple-900 mb-1">
                      Why are rates not fixed?
                    </h4>
                    <p className="text-purple-700 text-sm leading-relaxed">
                      To ensure you don&apos;t overpay, we calculate delivery
                      charges based on your exact location and provide discounts
                      for longer rental durations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* WhatsApp Option - Recommended */}
                <div className="group border-2 border-purple-200 bg-purple-50/30 rounded-2xl p-6 hover:border-green-500 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    Recommended
                  </div>
                  <div className="w-full text-left">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <FaWhatsapp className="text-white text-2xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Instant Quote via Call or WhatsApp
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Call us or message for immediate, personalized pricing
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                      <div className="bg-white/80 rounded-lg p-3 text-center border border-purple-100">
                        <FaHeadset className="text-green-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Live Support</span>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3 text-center border border-purple-100">
                        <FaFileInvoiceDollar className="text-blue-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Final Price</span>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3 text-center border border-purple-100">
                        <FaCheck className="text-purple-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Easy Chat</span>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3 text-center border border-purple-100">
                        <FaHistory className="text-orange-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Fast Reply</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleWhatsApp(); }}
                        className="flex-1 bg-green-600 text-white rounded-xl p-4 text-center font-bold hover:bg-green-700 transition-colors shadow-md flex items-center justify-center"
                      >
                        <FaWhatsapp className="mr-2 text-xl" />
                        Chat on WhatsApp
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleCall(); }}
                        className="flex-1 bg-blue-600 text-white rounded-xl p-4 text-center font-bold hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center"
                      >
                        <FaPhoneAlt className="mr-2 text-xl" />
                        Call Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Callback Option - Commented out as per user request
                <div className="group border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 cursor-pointer">
                  <button onClick={handleCallback} className="w-full text-left">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                        <FaHeadset className="text-blue-600 group-hover:text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          Request a Call Back
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Our team will call you to finalize the rate
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
                */}

                {/* Online Payment Option - For Advance */}
                <div className="group border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300 cursor-pointer opacity-80 hover:opacity-100">
                  <button
                    onClick={handlePayOnline}
                    disabled={isLoading}
                    className="w-full text-left"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-600 transition-colors duration-300">
                        <FaCreditCard className="text-gray-600 group-hover:text-white text-xl" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-gray-900">
                            Secure Booking Advance
                          </h3>
                          <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                            Adjustable
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Pay ₹500 token amount to lock your dates. 
                          <span className="block mt-1 text-[11px] italic text-purple-600 font-medium">
                            *This amount will be deducted from your final bill.
                          </span>
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Coordination Info */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 text-white">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Direct Coordination</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaShieldAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Professional Review</h4>
                      <p className="text-white/80 text-sm">
                        Every request is handled by a specialist to ensure equipment 
                        compatibility and optimal setup for your project.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaFileInvoiceDollar className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Custom Quoting</h4>
                      <p className="text-white/80 text-sm">
                        We calculate the best possible rates based on your 
                        specific location and rental duration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaHeadset className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Local Support</h4>
                      <p className="text-white/80 text-sm">
                        Our Kupwara-based coordination team provides 24/7 
                        assistance for all your rental queries.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                  <p className="text-sm text-white/90">
                    <strong>Need help?</strong> Contact our coordination team at{" "}
                    <span className="font-semibold">+91 8082815863</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
