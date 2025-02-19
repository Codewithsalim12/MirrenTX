"use client";
import { useState } from "react";
import { FaCopy, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PaymentDetails() {
  const [isCopied1, setIsCopied1] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);

  const upiId1 = "8082815863@paytm";
  const upiId2 = "8082815863@ybl";

  const handleCopy = (upiId, setIsCopied) => {
    navigator.clipboard.writeText(upiId);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    toast.success("UPI ID copied!");
  };

  const handleWhatsAppSubmit = () => {
    const whatsappMessage = "Hi, I want to send the payment screenshot.";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const url = `https://api.whatsapp.com/send?phone=918082815863&text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1b0918] to-[#280d21]">
      <div className="p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 text-white mt-16">
        {/* Back Button */}
        <div
          className="flex items-center space-x-2 mb-4 cursor-pointer text-white/80 hover:text-white"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="text-lg" />
          <span className="text-md">Back</span>
        </div>

        <h2 className="text-xl font-semibold text-center mb-4">
          Payment Details
        </h2>

        <p className="text-center text-white/90 text-sm mb-3">
          Scan the QR code or use the UPI ID below:
        </p>
        <img
          src="/QR.jpg"
          alt="QR Code"
          className="w-32 h-32 mx-auto rounded-lg shadow-md"
        />

        {/* UPI IDs */}
        <div className="space-y-2 mt-3">
          {[
            { id: upiId1, setCopied: setIsCopied1, copied: isCopied1 },
            { id: upiId2, setCopied: setIsCopied2, copied: isCopied2 },
          ].map((upi, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/20 p-2 rounded-lg"
            >
              <p className="text-white text-sm">{upi.id}</p>
              <button
                onClick={() => handleCopy(upi.id, upi.setCopied)}
                className="text-green-300 hover:text-green-400"
              >
                {upi.copied ? <FaCheckCircle /> : <FaCopy />}
              </button>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg mt-4 transition-all"
        >
          Send Payment Screenshot on WhatsApp
        </button>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
}
