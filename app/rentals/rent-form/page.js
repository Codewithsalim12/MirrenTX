"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
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

  const districts = ["Kupwara", "Handwara", "Baramulla", "Sopore"];

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
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-10"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Rent Now
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded-lg text-gray-800"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 border rounded-lg text-gray-800"
            required
          />
          <input
            type="tel"
            placeholder="Contact"
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
            className="w-full p-2 border rounded-lg text-gray-800"
            required
          />
          <select
            value={formData.district}
            onChange={(e) =>
              setFormData({ ...formData, district: e.target.value })
            }
            className="w-full bg-gray-50 p-2 border rounded-lg text-gray-800"
            required
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={(e) =>
              setFormData({ ...formData, streetAddress: e.target.value })
            }
            className="w-full p-2 border rounded-lg text-gray-800"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-6 bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition-colors flex items-center justify-center"
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
