"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const About = () => {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Page Heading */}
      <h1 className="text-5xl font-bold drop-shadow-lg text-center text-gray-900 mt-24 mb-8">
        More About <span className="text-green-500"> MirRenTX</span>
      </h1>

      {/* Full-width Image */}
      <img
        src="/Readmore-img.avif"
        alt="Rental Service"
        className="w-full h-80 object-cover rounded-lg shadow-lg"
      />

      {/* Description Section */}
      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        <span className="text-5xl font-bold text-gray-700 float-left mr-3">
          W
        </span>
        elcome to our trusted rental service, your one-stop solution for event
        and business equipment rentals. We specialize in providing lighting
        systems for marriages, generators for power backup, DSLR cameras for
        photography, and high-quality tents to ensure that your special
        occasions and business needs are met with professionalism and
        reliability.
      </p>

      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Our rental business is built on trust, affordability, and customer
        satisfaction. We understand that every event, whether a wedding,
        corporate function, or outdoor festival, requires seamless planning and
        execution. That’s why we offer well-maintained, high-quality equipment
        that caters to various requirements, ensuring that your event runs
        smoothly without any inconvenience.
      </p>

      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        With years of experience in the rental industry, we have served
        countless customers, helping them bring their visions to life. Whether
        you need ambient lighting to set the perfect wedding mood, a reliable
        generator for uninterrupted power, a professional-grade camera to
        capture memorable moments, or spacious and sturdy tents for outdoor
        setups, we’ve got you covered.
      </p>

      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Our commitment to excellence and customer-first approach makes us stand
        out. We believe in providing affordable and hassle-free rental services,
        ensuring that our clients receive equipment that is well-maintained,
        delivered on time, and fully functional. Your convenience is our
        priority, and we offer flexible rental plans to suit different budgets
        and event sizes.
      </p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed font-semibold">
        Why Choose Us?
      </p>
      <ul className="mt-2 text-lg text-gray-600 leading-relaxed list-disc list-inside">
        <li>Wide range of rental equipment for different occasions</li>
        <li>Affordable pricing with flexible rental terms</li>
        <li>Well-maintained and high-quality products</li>
        <li>Timely delivery and setup assistance</li>
        <li>Customer support to help you with any inquiries</li>
      </ul>

      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Whether you’re planning a wedding, a corporate event, a birthday
        celebration, or an outdoor gathering, our rental service ensures that
        you have the right equipment at the right time. Let us help you create
        unforgettable experiences with our top-notch rental solutions.
      </p>

      {/* Go Back Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          <ArrowLeft size={20} /> Go Back
        </button>
      </div>
    </div>
  );
};

export default About;
