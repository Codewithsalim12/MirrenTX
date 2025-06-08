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
} from "react-icons/fa";

export default function PaymentOptions() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/918082815863?text=Can%20I%20get%20more%20info%20about%20the%20rentals%3F",
      "_blank"
    );
  };

  const handlePayOnline = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/rentals/payment-details");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Choose Payment Method
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your preferred payment option to complete your rental booking
            securely.
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
                Payment
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
                  Payment Options
                </h2>
                <p className="text-gray-600">
                  Choose your preferred payment method to complete the booking.
                </p>
              </div>

              <div className="space-y-6">
                {/* Online Payment Option */}
                <div className="group border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 cursor-pointer">
                  <button
                    onClick={handlePayOnline}
                    disabled={isLoading}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                          <FaCreditCard className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            Pay Online
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Secure online payment with cards
                          </p>
                        </div>
                      </div>
                      {isLoading && (
                        <FaSpinner className="animate-spin text-blue-600" />
                      )}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <FaLock className="text-green-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Secure</span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <FaMobile className="text-blue-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Mobile</span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <FaGlobe className="text-purple-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Global</span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <FaCheck className="text-green-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Instant</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-blue-800 text-sm font-medium">
                        {isLoading
                          ? "Processing your request..."
                          : "Supports all major credit/debit cards and digital wallets"}
                      </p>
                    </div>
                  </button>
                </div>

                {/* WhatsApp Option */}
                <div className="group border-2 border-gray-200 rounded-2xl p-6 hover:border-green-500 transition-all duration-300 cursor-pointer">
                  <button onClick={handleWhatsApp} className="w-full text-left">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                          <FaWhatsapp className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            Chat on WhatsApp
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Get personalized assistance
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <FaHeadset className="text-green-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Support</span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <FaMobile className="text-blue-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Mobile</span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <FaCheck className="text-purple-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Quick</span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <FaWhatsapp className="text-green-600 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Direct</span>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-green-800 text-sm font-medium">
                        Connect directly with our team for custom pricing and
                        flexible payment options
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Security Info */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 text-white">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Secure Payments</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaShieldAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        Bank-Level Security
                      </h4>
                      <p className="text-white/80 text-sm">
                        All transactions are protected with 256-bit SSL
                        encryption.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaLock className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Data Protection</h4>
                      <p className="text-white/80 text-sm">
                        Your payment information is never stored on our servers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaHeadset className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Support</h4>
                      <p className="text-white/80 text-sm">
                        Our payment support team is available around the clock.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                  <p className="text-sm text-white/90">
                    <strong>Need help?</strong> Contact us at{" "}
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
