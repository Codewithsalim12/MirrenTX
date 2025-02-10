"use client";
import { useRouter } from "next/navigation";
import { FaWhatsapp, FaCreditCard } from "react-icons/fa";

export default function PaymentOptions() {
  const router = useRouter();

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/8082815863?text=Can%20I%20get%20more%20info%20about%20the%20rentals%3F",
      "_blank"
    );
  };

  const handlePayOnline = () => {
    router.push("/rentals/payment-details");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Options</h2>
        <div className="space-y-4">
          <button
            onClick={handlePayOnline}
            className="w-full flex items-center justify-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <FaCreditCard className="mr-2" /> Pay Online
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
