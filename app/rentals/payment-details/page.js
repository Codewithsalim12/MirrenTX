"use client";
import { useState } from "react";
import { FaCopy, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles

export default function PaymentDetails() {
  const [isCopied1, setIsCopied1] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for the button

  const upiId1 = "8082815863@paytm";
  const upiId2 = "8082815863@ybl";

  const handleCopy1 = () => {
    navigator.clipboard.writeText(upiId1);
    setIsCopied1(true);
    setTimeout(() => setIsCopied1(false), 2000);
  };
  const handleCopy2 = () => {
    navigator.clipboard.writeText(upiId2);
    setIsCopied2(true);
    setTimeout(() => setIsCopied2(false), 2000);
  };

  // Handle screenshot submission (removed screenshot logic)
  const handleSubmit = async () => {
    setIsLoading(true); // Set loading to true when submission starts

    try {
      // Simulate API submission (no screenshot required now)
      toast.success("Payment screenshot submitted successfully!");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Set loading to false once the process is done
    }
  };

  const handleWhatsAppSubmit = () => {
    // Send message on WhatsApp without screenshot
    const whatsappMessage = "Hi, I want to send the payment screenshot.";
    const encodedMessage = encodeURIComponent(whatsappMessage);

    const url = `https://api.whatsapp.com/send?phone=+918082815863&text=${encodedMessage}`;

    window.open(url, "_blank"); // Open WhatsApp in a new tab for submission
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-14">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="text-blue-600 text-xl" />
          <span className="text-lg text-blue-600">Back</span>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Payment Details
        </h2>

        <div className="space-y-4">
          <p className="text-center text-gray-800 font-semibold">
            Scan the QR code or use the UPI ID below:
          </p>
          <img
            src="/Qr.jpg" // Replace with your QR code image
            alt="QR Code"
            className="w-48 h-48 mx-auto rounded-sm"
          />
          <div className="flex items-center justify-center">
            <p className="mr-2 text-gray-800">{upiId1}</p>
            <button onClick={handleCopy1} className="text-green-600">
              {isCopied1 ? <FaCheckCircle /> : <FaCopy />}
            </button>
          </div>
          <div className="flex items-center justify-center">
            <p className="mr-2 text-gray-800">{upiId2}</p>
            <button onClick={handleCopy2} className="text-green-600">
              {isCopied2 ? <FaCheckCircle /> : <FaCopy />}
            </button>
          </div>

          {/* Removed screenshot input field and upload button */}

          <div className="flex flex-col items-center">
            {/* <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors relative min-h-[48px] flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 1 1 16 0 8 8 0 1 1-16 0"
                    ></path>
                  </svg>
                  <span>Please wait...</span>
                </div>
              ) : (
                "Submit Payment Screenshot"
              )}
            </button> */}

            {/* WhatsApp Submit Button */}
            <button
              onClick={handleWhatsAppSubmit}
              className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 mt-4 transition-colors"
            >
              Send Payment Screenshot on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* ToastContainer for the toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </div>
  );
}
