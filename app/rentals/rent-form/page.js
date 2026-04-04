"use client";
import { useState, useEffect, Suspense } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FaSpinner,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaBuilding,
} from "react-icons/fa";
import { toast } from "sonner";

function RentFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    district: "Kupwara",
    tehsilVillage: "",
    streetAddress: "",
    rentDuration: "",
    customDuration: "",
    equipmentName: "",
    dates: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Migration: Remove the old, unscoped key to prevent legacy leakage
    if (localStorage.getItem("rentFormData")) {
      localStorage.removeItem("rentFormData");
    }

    // Determine the scoped key if a user is authenticated
    const storageKey = session?.user?.email ? `rentFormData_${session.user.email}` : "rentFormData";

    if (session?.user?.email) {
      // Load saved data for THIS specific user
      const savedData = localStorage.getItem(storageKey);
      if (savedData) {
        setFormData(JSON.parse(savedData));
      } else {
        // No saved data for this user, clean the form except for the email
        setFormData((prev) => ({
          ...prev,
          name: "",
          contact: "",
          tehsilVillage: "",
          streetAddress: "",
          rentDuration: "",
          customDuration: "",
          dates: "",
          email: session.user.email,
        }));
      }
    } else if (status === "unauthenticated") {
      // No user, reset form to default
      setFormData({
        name: "",
        email: "",
        contact: "",
        district: "Kupwara",
        tehsilVillage: "",
        streetAddress: "",
        rentDuration: "",
        customDuration: "",
        equipmentName: "",
        dates: "",
      });
    }
  }, [session, status]);

  // Standardized helper for fetching the correct user-scoped storage key
  const getScopedKey = () => (session?.user?.email ? `rentFormData_${session.user.email}` : "rentFormData");

  const rentalsData = [
    { id: 1, title: "Generator" },
    { id: 2, title: "Tents" },
    { id: 3, title: "Lighting System" },
    { id: 4, title: "DSLR Camera" },
  ];

  useEffect(() => {
    const itemId = searchParams.get("item");
    if (itemId) {
      const item = rentalsData.find((r) => r.id === parseInt(itemId));
      if (item) {
        setFormData((prev) => ({ ...prev, equipmentName: item.title }));
      }
    }
  }, [searchParams]);

  const districts = ["Kupwara"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Store form data to a user-scoped key to prevent cross-account leakage
      localStorage.setItem(getScopedKey(), JSON.stringify(formData));
      toast.info("Saving details... Redirecting to confirmation");

      setTimeout(() => {
        router.push("/rentals/confirm-details");
      }, 1000);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rental Information
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please provide your details to proceed with the rental booking. All
            information is secure and encrypted.
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                1
              </div>
              <span className="ml-2 text-sm font-medium text-blue-600">
                Details
              </span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">
                Confirm
              </span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">
                Finalize
              </span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Personal Information
                </h2>
                <p className="text-gray-600">
                  Fill in your details to continue with the rental process.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="e.g., Sahil Khan"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>



                {/* Contact Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="e.g., +91 98765 43210"
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* District Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    District
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-[42%] transform -translate-y-1/2 text-gray-400" />
                    <select
                      value={formData.district}
                      onChange={(e) =>
                        setFormData({ ...formData, district: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                      required
                    >
                      <option value="">Select your district</option>
                      {districts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                    <p className="text-[11px] text-blue-600 font-medium mt-2 italic px-1">
                      * Currently we are only providing services in Kupwara district only.
                    </p>
                  </div>
                </div>

                {/* Tehsil / Village Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Tehsil / Village
                  </label>
                  <div className="relative">
                    <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="e.g., Kralpora, Trehgam"
                      value={formData.tehsilVillage}
                      onChange={(e) =>
                        setFormData({ ...formData, tehsilVillage: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Street Address Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Street Address
                  </label>
                  <div className="relative">
                    <FaHome className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="e.g., Mirpora, Chowkibal, Kralpora"
                      value={formData.streetAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          streetAddress: e.target.value,
                        })
                      }
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Rent Duration Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Rent Duration
                  </label>
                  <div className="relative">
                    <FaClock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      value={formData.rentDuration}
                      onChange={(e) =>
                        setFormData({ ...formData, rentDuration: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                      required
                    >
                      <option value="">Select duration</option>
                      <option value="Half Day">Half Day</option>
                      <option value="One Day">One Day</option>
                      <option value="One Night">One Night</option>
                      <option value="2 Days">2 Days</option>
                      <option value="3 Days">3 Days</option>
                      <option value="1 Week">1 Week</option>
                      <option value="Custom">Custom Duration</option>
                    </select>
                  </div>
                </div>

                {/* Custom Duration Field (Conditional) */}
                {formData.rentDuration === "Custom" && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    <label className="text-sm font-semibold text-gray-700">
                      Specify Duration
                    </label>
                    <div className="relative">
                      <FaClock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="e.g., 5 Days or 1 Month"
                        value={formData.customDuration}
                        onChange={(e) =>
                          setFormData({ ...formData, customDuration: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Preferred Date Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <FaHome className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 opacity-0" />
                    <input
                      type="date"
                      value={formData.dates}
                      onChange={(e) =>
                        setFormData({ ...formData, dates: e.target.value })
                      }
                      className="w-full pl-6 pr-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin mr-3" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Continue to Confirmation
                      <FaArrowRight className="ml-3" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Side - Info Panel */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 text-white">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose MirRenTX?
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Premium Quality</h4>
                      <p className="text-white/80 text-sm">
                        All our equipment is professionally maintained and
                        tested before every rental.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaShieldAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Secure & Safe</h4>
                      <p className="text-white/80 text-sm">
                        Your personal information is encrypted and protected
                        with industry-standard security.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Support</h4>
                      <p className="text-white/80 text-sm">
                        Our customer support team is available round the clock
                        to assist you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                  <p className="text-sm text-white/90">
                    <strong>Need help?</strong> Contact our support team at{" "}
                    <span className="font-semibold text-white">mirrentx@gmail.com</span>
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

export default function RentForm() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
          <FaSpinner className="animate-spin text-blue-600 text-3xl mb-4" />
          <p className="text-gray-500 font-medium">Loading booking form...</p>
        </div>
      }
    >
      <RentFormContent />
    </Suspense>
  );
}
