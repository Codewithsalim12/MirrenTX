"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const About = () => {
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 min-h-screen flex flex-col">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 text-center sm:text-left mb-6 sm:mb-10 leading-tight mt-14">
        More About <span className="text-green-500">MirRenTX</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
        {/* Left Side: Image & Description */}
        <div>
          {/* Full-width Image */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/Readmore-img.avif"
              alt="Rental Service"
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>

          {/* Description Section */}
          <div className="mt-8 space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              <span className="text-5xl font-bold text-gray-800">W</span>
              elcome to our trusted rental service, your one-stop solution for
              event and business equipment rentals. We specialize in providing
              lighting systems for marriages, generators for power backup, DSLR
              cameras for photography, and high-quality tents to ensure your
              special occasions and business needs are met with professionalism
              and reliability.
            </p>
            <p className="text-lg leading-relaxed">
              Our rental business is built on trust, affordability, and customer
              satisfaction. We provide well-maintained, high-quality equipment
              for weddings, corporate functions, and outdoor events, ensuring
              smooth execution without hassle.
            </p>
          </div>
        </div>

        {/* Right Side: Why Choose Us */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center sm:text-left">
            Why Choose Us?
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3 bg-gray-100 px-5 py-3 rounded-md shadow-sm">
              ✔ Wide range of rental equipment
            </li>
            <li className="flex items-center gap-3 bg-gray-100 px-5 py-3 rounded-md shadow-sm">
              ✔ Affordable pricing & flexible terms
            </li>
            <li className="flex items-center gap-3 bg-gray-100 px-5 py-3 rounded-md shadow-sm">
              ✔ High-quality & well-maintained products
            </li>
            <li className="flex items-center gap-3 bg-gray-100 px-5 py-3 rounded-md shadow-sm">
              ✔ Timely delivery & setup assistance
            </li>
            <li className="flex items-center gap-3 bg-gray-100 px-5 py-3 rounded-md shadow-sm">
              ✔ Reliable customer support
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Info */}
      <p className="max-w-3xl text-lg text-gray-700 mt-12 text-center sm:text-left leading-relaxed">
        Whether you're planning a wedding, corporate event, or outdoor
        gathering, our rental service ensures you have the right equipment at
        the right time. Let us help create unforgettable experiences with our
        top-notch rental solutions.
      </p>

      {/* Go Back Button */}
      <div className="mt-12 flex justify-center sm:justify-start">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <ArrowLeft size={20} /> Go Back
        </button>
      </div>
    </div>
  );
};

export default About;
