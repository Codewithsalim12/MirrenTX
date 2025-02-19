"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaCheck } from "react-icons/fa";

export default function ConfirmDetails() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    district: "",
    streetAddress: "",
  });

  useEffect(() => {
    // Retrieve stored data from local storage
    const storedData = localStorage.getItem("rentFormData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleConfirm = () => {
    // Proceed to payment options
    router.push("/rentals/payment-options");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1b0918] to-[#280d21] flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md text-white">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center">Confirm Details</h2>
        <div className="space-y-4">
          <p className="text-white/90">
            <strong>Name:</strong> {formData.name}
          </p>
          <p className="text-white/90">
            <strong>Email:</strong> {formData.email}
          </p>
          <p className="text-white/90">
            <strong>Contact:</strong> {formData.contact}
          </p>
          <p className="text-white/90">
            <strong>District:</strong> {formData.district}
          </p>
          <p className="text-white/90">
            <strong>Street Address:</strong> {formData.streetAddress}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => router.back()}
            className="flex items-center px-4 py-2 rounded-lg bg-gray-600 text-white transition-all shadow-md transform hover:-translate-y-1 hover:bg-gray-700 active:scale-95"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <button
            onClick={handleConfirm}
            className="flex items-center justify-center px-4 py-2 rounded-lg bg-green-500 text-white transition-all shadow-md transform hover:-translate-y-1 hover:bg-green-400 active:scale-95"
          >
            Confirm <FaCheck className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
