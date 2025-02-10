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
      "https://wa.me/8082815863?text=Can%20I%20get%20more%20info%20about%20the%20rentals%3F",
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="text-blue-600 text-xl" />
          <span className="text-lg text-blue-600">Back</span>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Payment Options
        </h2>
        <div className="space-y-4">
          <button
            onClick={handlePayOnline}
            disabled={isLoading}
            className="w-full flex items-center justify-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin mr-2" /> Loading...
              </>
            ) : (
              <>
                <FaCreditCard className="mr-2" /> Pay Online
              </>
            )}
          </button>
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <FaWhatsapp className="mr-2" /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
