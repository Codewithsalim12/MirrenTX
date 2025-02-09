"use client";
import { servicesData } from "@/app/data/servicesData";
import { useState } from "react";
import Link from "next/link";
import {
  FaTools,
  FaCamera,
  FaTruck,
  FaUsers,
  FaConciergeBell,
  FaStar,
  FaCheckCircle,
  FaShoppingCart,
  FaVideo,
  FaCampground,
  FaLightbulb,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  "/hero-mg.avif",
  "/slider2.avif",
  "/camping-img-slider.avif",
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      <div className="relative h-[70vh] overflow-hidden">
        <Slider {...settings} className="h-full">
          {sliderImages.map((img, index) => (
            <div key={index} className="h-[70vh]">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-5xl font-bold drop-shadow-lg">
                  Premium Event Services
                </h1>
                <p className="text-lg mt-3 mb-4 max-w-2xl">
                  From professional event setups to top-notch logistics, we
                  ensure a hassle-free experience.
                </p>
                <Link href="/rentals">
                  <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition">
                    <FaShoppingCart /> Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-center border border-gray-100"
          >
            <div className="text-6xl text-blue-500 mx-auto mb-6">
              {service.icon}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {service.name}
            </h2>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              {service.description}
            </p>
            <Link href={`/services/${service.id}`}>
              <button className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all font-semibold hover:shadow-md">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </section>
      {/* Pricing Plans Section */}
      <section
        id="Pricing"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center"
      >
        <h2 className="text-4xl font-bold">Our Pricing Plans</h2>
        <p className="text-lg mt-3 max-w-3xl mx-auto">
          Choose a plan that fits your needs. We offer flexible pricing options
          for every event size.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              id: 1,
              title: "Lighting & Generator",
              description:
                "Enhance your event with beautiful lighting setups and reliable generator support.",
              price: "$150",
              icon: <FaLightbulb className="w-12 h-12 text-indigo-600" />, // Icon
              subTitle: "Lighting with Generator",
            },
            {
              id: 2,
              title: "DSLR Camera Rental",
              description:
                "Capture your special moments with top-quality DSLR cameras for your event.",
              price: "$200",
              icon: <FaCamera className="w-12 h-12 text-indigo-600" />, // Icon
              subTitle: "High-Resolution Photography",
            },
            {
              id: 3,
              title: "Tents & Camping Gear",
              description:
                "Perfect for outdoor events, offering tents and camping equipment for all sizes.",
              price: "$300",
              icon: <FaCampground className="w-12 h-12 text-indigo-600" />, // Icon
              subTitle: "Comfortable Outdoor Setup",
            },
          ].map((plan) => (
            <div
              key={plan.id}
              className="bg-white text-gray-900 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 flex flex-col items-center justify-center text-center relative overflow-hidden"
            >
              {/* Gradient Background for Icon */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              {/* Icon Container */}
              <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
                {plan.icon}
              </div>
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <p className="text-lg text-gray-500 mt-1">{plan.subTitle}</p>
              <p className="text-3xl font-bold mt-4">
                {plan.price} <span className="text-lg">Starting from</span>
              </p>
              <Link href="/rentals">
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 flex items-center justify-center space-x-2 transition-all">
                  <span>Book Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* Additional Info Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          <div className="md:w-1/2">
            <img
              src="/services-img.avif"
              alt="Service Details"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800">
              Comprehensive Event Solutions
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We provide tailored event services, including logistics, decor,
              and professional photography. Ensure a seamless experience with
              our dedicated team.
            </p>
            <a
              href="/services"
              className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition font-semibold"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// const servicesData = [
//   {
//     id: "event-setup-decoration",
//     name: "Event Setup & Decoration",
//     description:
//       "We bring your vision to life with breathtaking decorations, transforming any space into a stunning and unforgettable setting for your special occasions.",
//     icon: <FaTools />,
//   },
//   {
//     id: "photography-videography",
//     name: "Photography & Videography",
//     description:
//       "Capture every precious moment with our skilled photographers and videographers, ensuring stunning visuals and lasting memories for any occasion.",
//     icon: <FaCamera />,
//   },
//   {
//     id: "event-video-editing",
//     name: "Event Video Editing",
//     description:
//       "Enhance your event footage with our professional video editing services. From highlights to full event videos, we provide top-tier editing to create lasting memories.",
//     icon: <FaVideo />,
//   },
// ];
const whyChooseUs = [
  {
    id: 1,
    title: "Experienced Team",
    description:
      "Our team of professionals ensures high-quality service with attention to detail.",
    icon: <FaUsers className="text-blue-600" />,
  },
  {
    id: 2,
    title: "24/7 Support",
    description: "We are always available to assist you, anytime, anywhere.",
    icon: <FaConciergeBell className="text-green-600" />,
  },
  {
    id: 3,
    title: "Trusted by Clients",
    description:
      "Our commitment to excellence has earned us trust and repeat customers.",
    icon: <FaStar className="text-yellow-500" />,
  },
  {
    id: 4,
    title: "Reliable & Efficient",
    description:
      "We ensure timely and efficient service to make your event stress-free.",
    icon: <FaCheckCircle className="text-indigo-500" />,
  },
];
