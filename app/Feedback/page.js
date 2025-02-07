"use client";
import { FaStar, FaUserCircle, FaPen, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Feedback() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      {/* Section 1: Intro */}
      <section className="max-w-3xl mx-auto text-center mt-10 mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          We Appreciate Your Feedback
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Help us improve by sharing your experience with our services.
        </p>
      </section>

      {/* Section 2: Quick Rating */}
      <section className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Rate Your Experience
        </h2>
        <div className="flex justify-center gap-2 text-yellow-400 text-3xl mb-4">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-4"
          rows="3"
          placeholder="Share your thoughts..."
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
          Submit
        </button>
      </section>

      {/* Section 3: Detailed Feedback Form */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Leave a Detailed Feedback
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-lg mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <label className="block text-lg mb-2">Your Feedback</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Enter your feedback"
            ></textarea>
          </div>
          <button className="w-full bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition">
            Submit Feedback <FaPen className="inline ml-2" />
          </button>
        </form>
      </section>

      {/* Section 4: Feedback Stats & Improvements */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          What We’ve Improved So Far
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-600 mt-2">Customer Satisfaction</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-green-600">1,200+</h3>
            <p className="text-gray-600 mt-2">Positive Reviews</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-red-600">24/7</h3>
            <p className="text-gray-600 mt-2">Customer Support</p>
          </div>
        </div>
      </section>

      {/* Section 5: Client Feedback */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Testimonial 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Tanveer-img.jpg"
              alt="John Doe"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <div className="text-yellow-400 flex justify-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-600 mt-2">
              "Amazing service! Very professional and quick response. Highly
              recommend!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="/owner2.jpg"
              alt="Jane Smith"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <div className="text-yellow-400 flex justify-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-600 mt-2">
              "Absolutely loved the experience! The team was so responsive and
              helpful."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
