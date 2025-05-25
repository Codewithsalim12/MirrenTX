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
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

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
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

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

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
      });
      return;
    }
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
      setEmail("");
    } else {
      toast.error("Failed to subscribe. Please try again later.", {
        position: "top-right",
      });
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6 ">
        {" "}
        {/* Added mt-8 for top margin */}
        <ToastContainer />
        {/* Main Contact Section */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6 mb-12 mt-14">
          {" "}
          {/* Reduced gap and mb */}
          {/* Contact Info Card - Made slightly smaller */}
          <div className="w-full md:w-2/5 bg-white p-6 rounded-xl shadow-lg">
            {" "}
            {/* Reduced padding */}
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b border-blue-100 pb-3">
              {" "}
              {/* Smaller text */}
              Contact Information
            </h2>
            <p className="text-gray-700 mb-5 text-sm leading-relaxed">
              {" "}
              {/* Smaller text */}
              We'd love to hear from you! Whether you have questions, feedback,
              or want to connect, we're here to assist you.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-blue-100 rounded-full text-blue-600">
                  {" "}
                  {/* Smaller icon container */}
                  <FaMapMarkerAlt className="text-sm" /> {/* Smaller icon */}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Awathkulla, Kralpora
                  </h3>{" "}
                  {/* Smaller text */}
                  <p className="text-gray-600 text-xs">
                    {" "}
                    {/* Smaller text */}
                    Kupwara, Jammu & Kashmir, India
                    <br />
                    Street: MirComputers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-green-100 rounded-full text-green-600">
                  <FaPhone className="text-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Phone Number
                  </h3>
                  <Link
                    href="tel: +91-8082815863"
                    className="text-gray-600 hover:text-blue-600 transition text-xs"
                  >
                    +91-8082815863
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-red-100 rounded-full text-red-600">
                  <FaEnvelope className="text-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Email Address
                  </h3>
                  <Link
                    href="mailto: mirrentx@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition text-xs"
                  >
                    mirrentx@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form Card - Made slightly smaller */}
          <div className="w-full md:w-3/5 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-blue-100 pb-3">
              Send Us a Message
            </h2>
            <form onSubmit={sendMessage} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 mb-1 text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
                    value={formData.firstName}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 mb-1 text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
                    value={formData.lastName}
                    onChange={handleFormChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="9876543210"
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
                  value={formData.phone}
                  onChange={handleFormChange}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg h-28 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
                  value={formData.message}
                  onChange={handleFormChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all shadow-md text-sm"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </section>
        {/* Map Section with precise location */}
        <section className="max-w-6xl mx-auto mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Our Location
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Find us at Awathkulla, Kralpora, Kupwara
            </p>
          </div>
          <div className="h-80 w-full">
            {" "}
            {/* Slightly smaller map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.041567423084!2d74.2665783152159!3d34.10479998059084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1b0b8e8a6a6a9%3A0x8a6a6a9e1b0b8e8a!2sKupwara%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-b-xl"
            ></iframe>
          </div>
        </section>
        {/* Why Choose Us Section - Made slightly smaller
        <section className="max-w-6xl mx-auto mb-12 bg-gradient-to-r from-blue-700 to-blue-600 text-white p-8 text-center rounded-xl shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">
              Why Choose{" "}
              <span className="text-green-300 font-bold">MirRenTX</span>?
            </h2>
            <p className="text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
              We provide high-quality rental services with fast delivery and
              24/7 support to make your events stress-free and memorable.
            </p>
            <Link href="/Readmore">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-md text-sm">
                Learn More About Us
              </button>
            </Link>
          </div>
        </section> */}
        {/* Newsletter Section - Made slightly smaller */}
        <section className="max-w-6xl mx-auto bg-gray-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
              <p className="text-sm text-gray-300 max-w-xl mx-auto">
                Subscribe to our newsletter to get the latest updates on new
                rentals and special discounts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full rounded-lg text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition text-sm"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                type="submit"
                onClick={subscribe}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 w-full sm:w-auto rounded-lg font-medium hover:from-red-700 hover:to-red-600 transition-all shadow-md text-sm"
              >
                <FaBell /> Subscribe Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
