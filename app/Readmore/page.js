"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const About = () => {
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mt-16 sm:mt-24 mb-6 sm:mb-10 leading-tight">
        More About <span className="text-green-500">MirRenTX</span>
      </h1>

      {/* Full-width Image */}
      <div className="w-full overflow-hidden rounded-xl shadow-lg">
        <img
          src="/Readmore-img.avif"
          alt="Rental Service"
          className="w-full h-64 sm:h-96 object-cover"
        />
      </div>

      {/* Description Section */}
      <div className="max-w-3xl text-center mt-8 sm:mt-12 space-y-6 text-gray-700">
        <p className="text-lg leading-relaxed">
          <span className="text-5xl font-bold text-gray-800">W</span>
          elcome to our trusted rental service, your one-stop solution for event
          and business equipment rentals. We specialize in providing lighting
          systems for marriages, generators for power backup, DSLR cameras for
          photography, and high-quality tents to ensure your special occasions
          and business needs are met with professionalism and reliability.
        </p>

        <p className="text-lg leading-relaxed">
          Our rental business is built on trust, affordability, and customer
          satisfaction. We provide well-maintained, high-quality equipment for
          weddings, corporate functions, and outdoor events, ensuring smooth
          execution without hassle.
        </p>

        <p className="text-lg leading-relaxed">
          With years of experience, we have helped countless customers bring
          their visions to life. Whether you need ambient lighting, a reliable
          generator, a professional-grade camera, or spacious tents, we’ve got
          you covered.
        </p>

        <p className="text-lg leading-relaxed">
          Our commitment to excellence and customer satisfaction makes us stand
          out. We offer flexible rental plans to suit different budgets and
          event sizes, ensuring a seamless experience for all our clients.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-3xl mt-8 sm:mt-12 text-gray-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Why Choose Us?
        </h2>
        <ul className="mt-4 space-y-3 text-lg text-gray-700 text-center">
          <li className="bg-white px-4 py-2 rounded-md shadow-sm">
            ✔ Wide range of rental equipment
          </li>
          <li className="bg-white px-4 py-2 rounded-md shadow-sm">
            ✔ Affordable pricing & flexible terms
          </li>
          <li className="bg-white px-4 py-2 rounded-md shadow-sm">
            ✔ High-quality & well-maintained products
          </li>
          <li className="bg-white px-4 py-2 rounded-md shadow-sm">
            ✔ Timely delivery & setup assistance
          </li>
          <li className="bg-white px-4 py-2 rounded-md shadow-sm">
            ✔ Reliable customer support
          </li>
        </ul>
      </div>

      <p className="max-w-3xl text-lg text-gray-700 mt-8 sm:mt-10 text-center leading-relaxed">
        Whether you're planning a wedding, corporate event, or outdoor
        gathering, our rental service ensures you have the right equipment at
        the right time. Let us help create unforgettable experiences with our
        top-notch rental solutions.
      </p>

      {/* Go Back Button */}
      <div className="mt-10">
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
