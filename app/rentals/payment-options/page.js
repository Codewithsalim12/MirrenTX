"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaWhatsapp,
  FaCreditCard,
  FaArrowLeft,
  FaSpinner,
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
    <div className="bg-gradient-to-r from-[#1b0918] to-[#280d21] min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md text-white">
        {/* Back Button */}
        <div
          className="flex items-center space-x-2 mb-4 cursor-pointer hover:text-gray-300 transition-colors"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="text-white text-xl" />
          <span className="text-lg">Back</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-center">Payment Options</h2>
        <p className="text-center text-white/80 text-sm mb-6">
          Choose a preferred payment method to proceed with your rental.
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={handlePayOnline}
            disabled={isLoading}
            className="w-full flex items-center justify-center bg-[#FF9119] hover:bg-[#FF9119]/80 text-white py-3 rounded-lg transition-all font-medium shadow-md"
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin mr-2" /> Processing...
              </>
            ) : (
              <>
                <FaCreditCard className="mr-2" /> Pay Online
              </>
            )}
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-all font-medium shadow-md"
          >
            <FaWhatsapp className="mr-2" /> Chat on WhatsApp
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-white/70 mt-6">
          Secure & hassle-free transactions.
        </p>
      </div>
    </div>
  );
}
