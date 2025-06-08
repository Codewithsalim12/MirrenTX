"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaCheck,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
  FaEdit,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Confirm Your Details
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please review your information before proceeding to payment. You can
            edit any details if needed.
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
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-blue-600">
                Confirm
              </span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">
                Payment
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left Side - Details */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Review Your Information
                </h2>
                <p className="text-gray-600">
                  Make sure all details are correct before proceeding.
                </p>
              </div>

              <div className="space-y-6">
                {/* Personal Information Card */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <FaUser className="mr-3 text-blue-600" />
                      Personal Information
                    </h3>
                    <button
                      onClick={() => router.back()}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center transition-colors duration-200"
                    >
                      <FaEdit className="mr-1" />
                      Edit
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Full Name
                      </label>
                      <p className="text-gray-900 font-medium">
                        {formData.name || "Not provided"}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Email Address
                      </label>
                      <p className="text-gray-900 font-medium">
                        {formData.email || "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information Card */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
                    <FaPhone className="mr-3 text-green-600" />
                    Contact Information
                  </h3>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <p className="text-gray-900 font-medium">
                      {formData.contact || "Not provided"}
                    </p>
                  </div>
                </div>

                {/* Address Information Card */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
                    <FaMapMarkerAlt className="mr-3 text-purple-600" />
                    Address Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        District
                      </label>
                      <p className="text-gray-900 font-medium">
                        {formData.district || "Not provided"}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Street Address
                      </label>
                      <p className="text-gray-900 font-medium">
                        {formData.streetAddress || "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => router.back()}
                  className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to Edit
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Proceed to Payment
                  <FaCheck className="ml-2" />
                </button>
              </div>
            </div>

            {/* Right Side - Security Info */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 text-white">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Secure & Protected</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaShieldAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Data Protection</h4>
                      <p className="text-white/80 text-sm">
                        Your information is encrypted and stored securely using
                        industry standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Quick Process</h4>
                      <p className="text-white/80 text-sm">
                        Complete your rental booking in just a few simple steps.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Verified Service</h4>
                      <p className="text-white/80 text-sm">
                        All our equipment and services are verified and quality
                        assured.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                  <p className="text-sm text-white/90">
                    <strong>Questions?</strong> Our support team is here to help
                    you every step of the way.
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
