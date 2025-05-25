"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaSpinner,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RentForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    district: "",
    streetAddress: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const districts = ["Kupwara"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/rent-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.info("Please wait... Redirecting");
        localStorage.setItem("rentFormData", JSON.stringify(formData));

        setTimeout(() => {
          router.push("/rentals/confirm-details");
        }, 2000);
      } else {
        throw new Error("Failed to send form");
      }
    } catch (error) {
      toast.error("Submission failed! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1b0918] to-[#280d21] flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md text-white mt-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Rent Now</h2>
        <div className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-2 pl-10 border rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-2 pl-10 border rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="tel"
              placeholder="Contact"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              className="w-full p-2 pl-10 border rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
            <select
              value={formData.district}
              onChange={(e) =>
                setFormData({ ...formData, district: e.target.value })
              }
              className="w-full p-2 pl-10 border rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            >
              <option className="text-gray-800" value="">Select District</option>
              {districts.map((district) => (
                <option
                  key={district}
                  value={district}
                  className="text-gray-900"
                >
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="relative">
            <FaHome className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Street Address"
              value={formData.streetAddress}
              onChange={(e) =>
                setFormData({ ...formData, streetAddress: e.target.value })
              }
              className="w-full p-2 pl-10 border rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-6 bg-purple-700 text-white py-2 rounded-lg transition-all flex items-center justify-center shadow-md transform hover:-translate-y-1 hover:bg-purple-600 active:scale-95"
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Please wait...
            </>
          ) : (
            "Next"
          )}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
