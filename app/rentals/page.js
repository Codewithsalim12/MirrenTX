"use client";
import { useState } from "react";
import Modal from "react-modal";
import {
  FaBolt,
  FaLightbulb,
  FaCamera,
  FaTools,
  FaClock,
  FaWhatsapp,
  FaClipboard,
} from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { MdEmail, MdLocationOn, MdArrowBack } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import axios from "axios";
import { useEffect } from "react";
// // Set the app element for accessibility
// if (typeof window !== "undefined") {
//   Modal.setAppElement("#__next");
// }

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
    image: "/generator.webp", // Add image path here
  },
  {
    id: 2,
    name: "Tent",
    icon: <GiCampingTent className="text-green-600 text-5xl mx-auto mb-3" />,
    description: "Durable and spacious tents for weddings.",
    contact: "Call us for price details",
    image: "/Tent-img.jpg", // Add image path here
  },
  {
    id: 3,
    name: "Lighting System",
    icon: <FaLightbulb />,
    description: "Brighten up your events with premium lighting setups.",
    contact: "Call us for price details",
    image: "/Lighting Decoration.jpg", // Add image path here
  },
  {
    id: 4,
    name: "DSLR Camera",
    icon: <FaCamera />,
    description: "Capture every moment with high-quality DSLR cameras.",
    contact: "Call us for price details",
    image: "/Dslr.avif", // Add image path here
  },
];

export default function Rentals() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement("#__next");
    }
  }, []);
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
      <div className="text-center py-16 bg-blue-600 text-white px-6 sm:px-8">
        <h1 className="text-5xl font-bold drop-shadow-lg sm:text-4xl xs:text-3xl">
          Available Rentals
        </h1>
        <p className="text-lg mt-2 sm:text-base xs:text-sm">
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
          <div className="max-w-md w-full p-4 sm:p-6 bg-white rounded-lg shadow-lg mx-auto opacity-90 sm:opacity-100">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
              Confirm Your Order
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="flex items-center text-sm sm:text-base text-gray-700">
                <RiContactsBookLine className="text-gray-500 mr-2" />
                <strong>Name:</strong> {formData.name}
              </p>
              <p className="flex items-center text-sm sm:text-base text-gray-700">
                <RiContactsBookLine className="text-gray-500 mr-2" />
                <strong>Contact:</strong> {formData.contact}
              </p>
              <p className="flex items-center text-sm sm:text-base text-gray-700">
                <MdEmail className="text-gray-500 mr-2" />
                <strong>Email:</strong> {formData.email}
              </p>
              <p className="flex items-center text-sm sm:text-base text-gray-700">
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
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg mx-auto">
            <h2 className="text-2xl sm:text-xl font-bold mb-6 text-center text-gray-800">
              Payment Options
            </h2>
            <div className="flex flex-col sm:flex-col sm:gap-4 sm:mt-4 gap-4">
              <button
                onClick={openUpiModal}
                className="w-full bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition font-semibold text-lg sm:text-base"
              >
                Make Payment
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/6006798656?text=Hi%2C%20can%20I%20get%20more%20information%20about%20the%20rentals%3F%20میں%20چاہوں%20گا%20کہ%20میرے%20لئے%20مزید%20معلومات%20دیں۔",
                    "_blank"
                  )
                }
                className="w-full bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition font-semibold text-lg sm:text-base flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-white text-lg" /> Know Price
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
        style={{
          ...customStyles,
          overlay: {
            ...customStyles.overlay,
            opacity: "0.9", // Keep high opacity
          },
          content: {
            ...customStyles.content,
            maxWidth: "500px",
            height: "auto", // Default for smaller devices
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
          ...(window.innerWidth > 700 && {
            height: "60vh", // Reduce height for larger screens
            display: "flex",
            flexDirection: "row", // Side-by-side layout for large screens
            justifyContent: "space-between",
            padding: "20px",
          }),
        }}
        contentLabel="UPI Payment Modal"
      >
        <div className="flex flex-col sm:flex-col lg:flex-row lg:items-center lg:justify-between w-full">
          {/* Left Side: Payment Options */}
          <div className="flex flex-col gap-5 sm:w-full lg:w-2/3">
            {["Paytm", "PhonePe", "Google Pay"].map((service, index) => {
              const colors = ["blue", "green", "red"];
              const imgSrcs = ["/paytm.png", "/phonepay.png", "/gpay.png"];
              const numbers = [
                "6006798656@ybl",
                "6006798656@ybl",
                "6006798656@ybl",
              ];

              return (
                <div
                  key={index}
                  className="flex items-center justify-between space-x-4 sm:flex-col sm:space-y-4 sm:text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={imgSrcs[index]}
                      alt={service}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span
                      className={`text-${colors[index]}-600 hover:text-${colors[index]}-800 sm:text-xs`}
                    >
                      {service}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(numbers[index])}
                    className={`bg-${colors[index]}-500 text-white px-3 py-1 rounded sm:w-full lg:w-auto`}
                  >
                    <FaClipboard className="text-xl sm:text-lg" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Side: QR Code */}
          <div className="flex justify-center mt-4 lg:mt-0 lg:w-1/3">
            <img
              src="/QR.jpg"
              alt="QR Code"
              className="h-32 w-32 rounded shadow-md"
            />
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-4 w-full flex justify-center">
          <button
            onClick={closeUpiModal}
            className="w-40 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition sm:w-full"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
