"use client";
import { useState } from "react";
import Modal from "react-modal";
import {
  FaBolt,
  FaLightbulb,
  FaCamera,
  FaTools,
  FaClock,
} from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { MdEmail, MdLocationOn, MdArrowBack } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { BsCreditCard, BsWhatsapp, BsClipboard } from "react-icons/bs";
import axios from "axios";

// Set the app element for accessibility
if (typeof window !== "undefined") {
  Modal.setAppElement("#__next");
}

// Modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    width: "90%",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
  },
};

// Rentals data
const rentalsData = [
  {
    id: 1,
    name: "Generator",
    icon: <FaBolt />,
    description: "Reliable power backup for your events and functions.",
    contact: "Call us for price details",
    image: "/images/generator.jpg", // Add image path here
  },
  {
    id: 2,
    name: "Tent",
    icon: <GiCampingTent className="text-green-600 text-5xl mx-auto mb-3" />,
    description: "Durable and spacious tents for weddings.",
    contact: "Call us for price details",
    image: "/images/tent.jpg", // Add image path here
  },
  {
    id: 3,
    name: "Lighting System",
    icon: <FaLightbulb />,
    description: "Brighten up your events with premium lighting setups.",
    contact: "Call us for price details",
    image: "/images/lighting.jpg", // Add image path here
  },
  {
    id: 4,
    name: "DSLR Camera",
    icon: <FaCamera />,
    description: "Capture every moment with high-quality DSLR cameras.",
    contact: "Call us for price details",
    image: "/images/camera.jpg", // Add image path here
  },
];

export default function Rentals() {
  const [rentals, setRentals] = useState(rentalsData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [upiModalIsOpen, setUpiModalIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    streetAddress: "",
  });

  // Open modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Open UPI payment modal
  const openUpiModal = () => {
    setUpiModalIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalIsOpen(false);
    setStep(1); // Reset to step 1
    setFormData({ name: "", contact: "", email: "", streetAddress: "" }); // Reset form data
  };

  // Close UPI modal
  const closeUpiModal = () => {
    setUpiModalIsOpen(false);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2); // Move to confirmation step
    } else if (step === 2) {
      setStep(3); // Move to payment step
    } else if (step === 3) {
      // Send email with user details
      try {
        await axios.post("/api/send-email", formData);
        alert("Your rental order has been confirmed!");
        closeModal();
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to confirm your order. Please try again.");
      }
    }
  };

  // Function to copy UPI ID to clipboard
  const copyToClipboard = (upiId) => {
    navigator.clipboard.writeText(upiId).then(() => {
      // Beautified alert
      const alertContainer = document.createElement("div");
      alertContainer.classList.add("alert", "alert-success");
      alertContainer.innerHTML = `UPI ID copied: ${upiId}`;
      document.body.appendChild(alertContainer);
      setTimeout(() => alertContainer.remove(), 3000); // Remove alert after 3 seconds
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-10">
      {/* Page Heading */}
      <div className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold drop-shadow-lg">Available Rentals</h1>
        <p className="text-lg mt-2">
          Explore our top-quality rental services for all your event needs.
        </p>
      </div>

      {/* Rental Items */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {rentals.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <div className="text-5xl text-blue-500 mx-auto mb-4">
              {item.icon}
            </div>
            <h2 className="text-2xl font-semibold mt-4">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <button
              onClick={openModal}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Rent Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal for entering details */}
      {/* Modal for entering details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Rental Order Modal"
      >
        {step === 1 && (
          <form onSubmit={handleSubmit} className="sm:w-full sm:px-4 sm:py-2">
            <h2 className="text-2xl font-bold mb-6 text-center sm:text-xl">
              Enter Your Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-center border rounded p-2">
                <RiContactsBookLine className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full outline-none sm:text-sm"
                  required
                />
              </div>
              <div className="flex items-center border rounded p-2">
                <RiContactsBookLine className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full outline-none sm:text-sm"
                  required
                />
              </div>
              <div className="flex items-center border rounded p-2">
                <MdEmail className="text-gray-500 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full outline-none sm:text-sm"
                  required
                />
              </div>
              <div className="flex items-center border rounded p-2">
                <MdLocationOn className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="Street Address"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full outline-none sm:text-sm"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition sm:text-sm"
            >
              Next
            </button>
          </form>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="max-w-md w-full p-4 sm:p-6 bg-white rounded-lg shadow-lg mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
              Confirm Your Order
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="flex items-center text-sm sm:text-base">
                <RiContactsBookLine className="text-gray-500 mr-2" />
                <strong>Name:</strong> {formData.name}
              </p>
              <p className="flex items-center text-sm sm:text-base">
                <RiContactsBookLine className="text-gray-500 mr-2" />
                <strong>Contact:</strong> {formData.contact}
              </p>
              <p className="flex items-center text-sm sm:text-base">
                <MdEmail className="text-gray-500 mr-2" />
                <strong>Email:</strong> {formData.email}
              </p>
              <p className="flex items-center text-sm sm:text-base">
                <MdLocationOn className="text-gray-500 mr-2" />
                <strong>Address:</strong> {formData.streetAddress}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4 sm:mt-6">
              <button
                onClick={() => setStep(1)}
                className="w-full sm:w-1/2 bg-gray-500 text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-600 transition flex items-center font-semibold justify-center text-sm sm:text-base"
              >
                <MdArrowBack className="mr-2 mt-1" /> Back
              </button>
              <button
                onClick={handleSubmit}
                className="w-full sm:w-1/2 bg-green-500 text-white px-4 sm:px-6 py-2 rounded hover:bg-green-600 transition font-semibold text-sm sm:text-base"
              >
                Confirm
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center sm:text-xl">
              Payment Options
            </h2>
            <div className="flex gap-4 sm:flex-col sm:gap-2 sm:mt-4">
              <button
                onClick={openUpiModal}
                className="w-1/2 sm:w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              >
                Make Payment
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/6006798656?text=I%20would%20like%20to%20rent%20items.",
                    "_blank"
                  )
                }
                className="w-1/2 sm:w-full bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
              >
                Know Price 
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* UPI Payment Modal */}
      {/* UPI Payment Modal */}
      <Modal
        isOpen={upiModalIsOpen}
        onRequestClose={closeUpiModal}
        style={customStyles}
        contentLabel="UPI Payment Modal"
      >
        <h2 className="text-2xl font-bold mb-6 text-center mt-12 sm:text-xl">
          UPI Payment Options
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center space-x-4 sm:flex-col sm:space-y-4 sm:text-sm">
            <div className="flex items-center space-x-2">
              <img src="/paytm.png" alt="Paytm" className="h-8 w-8" />
              <button
                onClick={() => copyToClipboard("6006798656@ybl")}
                className="text-xl text-blue-600 hover:text-blue-800 sm:text-sm"
              >
                Paytm
              </button>
            </div>
            <button
              onClick={() => copyToClipboard("6006798656@ybl")}
              className="bg-blue-500 text-white px-4 py-2 rounded sm:w-full"
            >
              Copy
            </button>
          </div>
          <div className="flex justify-between items-center space-x-4 sm:flex-col sm:space-y-4 sm:text-sm">
            <div className="flex items-center space-x-2">
              <img src="/phonepay.png" alt="PhonePe" className="h-8 w-8" />
              <button
                onClick={() => copyToClipboard("6006798656@ybl")}
                className="text-sm text-green-600 hover:text-green-800 sm:text-xs"
              >
                PhonePe
              </button>
            </div>
            <button
              onClick={() => copyToClipboard("6006798656@ybl")}
              className="bg-green-500 text-white px-4 py-2 rounded sm:w-full"
            >
              Copy
            </button>
          </div>
          <div className="flex justify-between items-center space-x-4 sm:flex-col sm:space-y-4 sm:text-sm">
            <div className="flex items-center space-x-2">
              <img src="/gpay.png" alt="Google Pay" className="h-8 w-8" />
              <button
                onClick={() => copyToClipboard("6006798656@ybl")}
                className="text-sm mr-2 text-red-600 hover:text-red-800 sm:text-xs"
              >
                Google Pay
              </button>
            </div>
            <button
              onClick={() => copyToClipboard("6006798656@ybl")}
              className="bg-red-500 text-white px-4 py-2 rounded sm:w-full"
            >
              Copy
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <img
              src="/QR.jpg" // Add QR code image path here
              alt="QR Code"
              className="h-32 w-32 rounded shadow-md"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={closeUpiModal}
            className="w-full bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition sm:text-sm"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
