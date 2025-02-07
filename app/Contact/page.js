"use client";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaBell,
} from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      {/* Section 1: Contact Header */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            We’d love to hear from you! Whether you have questions, feedback, or
            just want to connect, feel free to reach out. Our team is here to
            assist you and ensure you have a great experience. Don’t hesitate to
            get in touch!
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600" /> Kralpora, (Kupwara),
              Jammu & Kashmir, India 193224
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaPhone className="text-green-600" /> +91-8082815863
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-red-600" /> mirrentx@gmail.com
            </p>
          </div>
        </div>
        <div className=" mt-10 w-full  md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 border rounded-lg"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded-lg h-32"
            ></textarea>
            <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Section 2: Why Choose Us */}
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

      {/* Section 3: Subscribe for Updates */}
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
          />
          <button className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 w-full sm:w-auto rounded-xl font-semibold hover:bg-red-700 transition">
            <FaBell /> Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
