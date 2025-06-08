"use client";
import { useState } from "react";
import {
  FaCopy,
  FaCheckCircle,
  FaArrowLeft,
  FaWhatsapp,
  FaQrcode,
  FaShieldAlt,
  FaClock,
  FaCheck,
  FaMobile,
  FaCamera,
} from "react-icons/fa";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Complete Payment
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scan the QR code or use UPI ID to complete your rental booking
            payment.
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
            <div className="w-12 h-0.5 bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                <FaCheck />
              </div>
              <span className="ml-2 text-sm font-medium text-green-600">
                Confirm
              </span>
            </div>
            <div className="w-12 h-0.5 bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                <FaCheck />
              </div>
              <span className="ml-2 text-sm font-medium text-green-600">
                Payment
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left Side - Payment Details */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              <div className="mb-8">
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-6"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to Payment Options
                </button>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Payment Details
                </h2>
                <p className="text-gray-600">
                  Complete your payment using any of the methods below.
                </p>
              </div>

              <div className="space-y-8">
                {/* QR Code Section */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                        <FaQrcode className="text-white text-xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Scan QR Code
                      </h3>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                      <img
                        src="/QR.jpg"
                        alt="Payment QR Code"
                        className="w-48 h-48 mx-auto rounded-xl"
                      />
                    </div>

                    <p className="text-gray-600 mt-4 text-sm">
                      Open any UPI app and scan this QR code to pay instantly
                    </p>
                  </div>
                </div>

                {/* UPI IDs Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <FaMobile className="mr-3 text-blue-600" />
                    Or Use UPI ID
                  </h3>

                  <div className="space-y-3">
                    {[
                      {
                        id: upiId1,
                        setCopied: setIsCopied1,
                        copied: isCopied1,
                        label: "Paytm UPI",
                      },
                      {
                        id: upiId2,
                        setCopied: setIsCopied2,
                        copied: isCopied2,
                        label: "PhonePe UPI",
                      },
                    ].map((upi, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                              {upi.label}
                            </p>
                            <p className="text-gray-900 font-mono text-lg">
                              {upi.id}
                            </p>
                          </div>
                          <button
                            onClick={() => handleCopy(upi.id, upi.setCopied)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                              upi.copied
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                            }`}
                          >
                            {upi.copied ? (
                              <>
                                <FaCheckCircle />
                                Copied!
                              </>
                            ) : (
                              <>
                                <FaCopy />
                                Copy
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Screenshot Section */}
                <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <FaCamera className="mr-3 text-green-600" />
                    After Payment
                  </h3>

                  <p className="text-gray-700 mb-4">
                    Once you've completed the payment, please send us the
                    screenshot for verification.
                  </p>

                  <button
                    onClick={handleWhatsAppSubmit}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <FaWhatsapp className="mr-3 text-xl" />
                    Send Payment Screenshot
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Help & Security */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 text-white">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Payment Help</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaShieldAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Secure Payment</h4>
                      <p className="text-white/80 text-sm">
                        All UPI transactions are protected by bank-level
                        security.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        Instant Verification
                      </h4>
                      <p className="text-white/80 text-sm">
                        Send screenshot via WhatsApp for quick payment
                        verification.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaWhatsapp className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Support</h4>
                      <p className="text-white/80 text-sm">
                        Our team is available on WhatsApp for any payment
                        queries.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                  <p className="text-sm text-white/90">
                    <strong>Payment Issues?</strong> Contact us immediately at{" "}
                    <span className="font-semibold">+91 8082815863</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
