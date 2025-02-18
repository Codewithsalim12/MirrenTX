"use client";

import { useParams } from "next/navigation";
import { FaTools, FaCamera, FaVideo, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const servicesData = [
  {
    id: "event-setup-decoration",
    name: "Event Setup & Decoration",
    image: "/event-setup.jpg",
    longDescription:
      "Transform any occasion into a breathtaking event with our premium setup and decoration services. Whether it's a wedding, corporate event, or private party, we bring creativity and precision to make your event unforgettable.",
    icon: <FaTools className="text-blue-600" />,
    cta: "Get a Free Consultation",
  },
  {
    id: "photography-videography",
    name: "Photography & Videography",
    image: "/videoGraphy.avif",
    longDescription:
      "Capture every special moment with our expert photographers and videographers. We create stunning visuals using state-of-the-art equipment, preserving memories in a unique and timeless way.",
    icon: <FaCamera className="text-blue-600" />,
    cta: "Book Your Session Now",
  },
  {
    id: "event-video-editing",
    name: "Event Video Editing",
    image: "/video-editing.avif",
    longDescription:
      "Our professional video editors turn your raw event footage into a compelling story. We offer high-quality editing, including color grading, special effects, and cinematic transitions.",
    icon: <FaVideo className="text-blue-600" />,
    cta: "Start Your Project Today",
  },
];

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-center text-red-500 text-xl mt-20">
        Service not found!
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-12 bg-white rounded-lg shadow-2xl">
      {/* Back Button - Now on the Top Left */}
      <Link
        href="/services"
        className="mt-20 fixed bottom-10 right-6 bg-purple-900 text-white p-3 rounded-full text-sm hover:bg-gray-700 transition-all shadow-lg flex items-center gap-2"
      >
        <FaArrowLeft />
        <span className="hidden md:inline-block">Back</span>
      </Link>

      {/* Left Side: Image */}
      <div className="md:w-1/2 flex justify-center mt-20">
        <img
          src={service.image}
          alt={service.name}
          className="w-full max-w-md h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <div className="text-6xl">{service.icon}</div>
        <h1 className="text-4xl font-bold text-gray-900">{service.name}</h1>
        <p className="text-gray-700 leading-relaxed">
          {service.longDescription}
        </p>
        <Link href="/Contact">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300 text-lg font-medium">
            {service.cta}
          </button>
        </Link>
      </div>
    </section>
  );
}
