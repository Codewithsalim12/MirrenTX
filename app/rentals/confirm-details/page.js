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
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Confirm Details
        </h2>
        <div className="space-y-4">
          <p className="text-gray-800">
            <strong>Name:</strong> {formData.name}
          </p>
          <p className="text-gray-800">
            <strong>Email:</strong> {formData.email}
          </p>
          <p className="text-gray-800">
            <strong>Contact:</strong> {formData.contact}
          </p>
          <p className="text-gray-800">
            <strong>District:</strong> {formData.district}
          </p>
          <p className="text-gray-800">
            <strong>Street Address:</strong> {formData.streetAddress}
          </p>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={() => router.back()}
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <button
            onClick={handleConfirm}
            className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Confirm <FaCheck className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
