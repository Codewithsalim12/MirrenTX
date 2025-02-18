"use client";
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaBell,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState(""); // To store phone error message
  const [emailError, setEmailError] = useState(""); // To store email error message

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/; // Basic phone number validation (10 digits)
    return phonePattern.test(phone);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Basic email validation
    return emailPattern.test(email);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.warning("Please fill in all the fields.", {
        position: "top-right",
      });
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
      });
      return;
    }

    // Validate phone number format
    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid phone number.", {
        position: "top-right",
      });
      return;
    }

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      toast.success("Message sent successfully!", {
        position: "top-right",
      });

      // Clear the form fields after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
      });
    }
  };

  const subscribe = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
      });
      return;
    }

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscribeEmail: email }),
    });

    const result = await response.json();
    if (result.success) {
      toast.success(`${email} subscribed successfully!`, {
        position: "top-right",
      });

      // Clear the email input field after successful subscription
      setEmail("");
    } else {
      toast.error("Failed to subscribe. Please try again later.", {
        position: "top-right",
      });
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 py-16 px-6">
        {/* Toast notifications container */}
        <ToastContainer />

        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Get in Touch
            </h2>
            <p className="text-gray-700 font-medium mb-4">
              We’d love to hear from you! Whether you have questions, feedback,
              or just want to connect, feel free to reach out. Our team is here
              to assist you and ensure you have a great experience. Don’t
              hesitate to get in touch!
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-gray-700">
                <FaMapMarkerAlt className="text-blue-600" /> Kralpora,
                (Kupwara), Jammu & Kashmir, India.
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <FaPhone className="text-green-600" />{" "}
                <Link href="tel: +91-8082815863">+91-8082815863</Link>
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <FaEnvelope className="text-red-600" />{" "}
                <Link href="mailto: mirrentx@gmail.com">
                  mirrentx@gmail.com
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-10 w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form onSubmit={sendMessage} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-1/2 p-3 border rounded-lg text-gray-800"
                  value={formData.firstName}
                  onChange={handleFormChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-1/2 p-3 border rounded-lg text-gray-800"
                  value={formData.lastName}
                  onChange={handleFormChange}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg text-gray-800"
                value={formData.email}
                onChange={handleFormChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg text-gray-800"
                value={formData.phone}
                onChange={handleFormChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 border rounded-lg h-32 text-gray-800"
                value={formData.message}
                onChange={handleFormChange}
              ></textarea>
              <button
                type="submit"
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </section>

        <section className="bg-blue-600 text-white p-12 text-center rounded-lg max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose{" "}
            <span className="text-green-500 shadow-sm font-extrabold">
              MirRenTX
            </span>
            ?
          </h2>
          <p className="text-lg mb-6">
            We provide high-quality rental services with fast delivery and 24/7
            support to make your events stress-free.
          </p>
          <Link href="/Readmore">
            {" "}
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
              Learn More
            </button>
          </Link>
        </section>

        <section className="bg-gray-800 text-white text-center p-12 rounded-lg max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter to get the latest updates on new rentals
            and special discounts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full sm:w-80 border rounded-lg text-gray-800"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              type="submit"
              onClick={subscribe}
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 w-full sm:w-auto rounded-xl font-semibold hover:bg-red-700 transition"
            >
              <FaBell /> Subscribe
            </button>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
