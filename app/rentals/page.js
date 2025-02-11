"use client";
import {
  FaBolt,
  FaCampground,
  FaLightbulb,
  FaCamera,
  FaChair,
  FaPalette,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const rentalsData = [
  {
    id: 1,
    title: "Generator",
    icon: <FaBolt className="w-12 h-12 mb-4 text-green-500" />,
    description: "Power up your events with our reliable generators.",
    image: "/generator.webp", // Add image path
  },
  {
    id: 2,
    title: "Tents",
    icon: <FaCampground className="w-12 h-12 mb-4 text-green-500" />,
    description: "Spacious and durable tents for all your outdoor needs.",
    image: "/Tent-img.jpg", // Add image path
  },
  {
    id: 3,
    title: "Lighting System",
    icon: <FaLightbulb className="w-12 h-12 mb-4 text-green-500" />,
    description:
      "Brighten up your events with our professional lighting systems.",
    image: "/Lighting Decoration.jpg", // Add image path
  },
  {
    id: 4,
    title: "DSLR Camera",
    icon: <FaCamera className="w-12 h-12 mb-4 text-green-500" />,
    description: "Capture every moment with our high-quality DSLR cameras.",
    image: "/Dslr.avif", // Add image path
  },
];

export default function RentalsPage() {
  const router = useRouter();

  // Add this click handler function
  const handleRentNow = (itemId) => {
    router.push(`/rentals/rent-form?item=${itemId}`);
  };

  const handleNotifyClick = () => {
    toast.success("You'll be notified soon!", {
      position: "bottom-center",
      autoClose: 3000, // Notification duration
      hideProgressBar: true, // Hide progress bar
      closeButton: false, // Remove close button
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Heading Section */}
      <section className="relative py-16 sm:py-12 md:py-16 text-center">
        {/* Gradient & Dark Overlay for Text Visibility */}
       

        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mt-10 drop-shadow-lg">
            Available Rentals
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-6 sm:mb-8 opacity-90">
            Rent everything you need for your events—from cameras to generators.
          </p>
        </div>
      </section>

      {/* Rental Cards Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rentalsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image} // Use your 8K image file here
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4 filter brightness-110 contrast-125 saturate-150"
              />

              {item.icon}
              <h2 className="text-xl text-black font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                onClick={() => handleRentNow(item.id)}
              >
                Rent Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* New Services Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-20 flex justify-center items-center min-h-screen">
        {/* Decorative Wave */}
        <div className="absolute top-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-20 text-green-200"
            fill="currentColor"
          >
            <path
              fillOpacity="1"
              d="M0,160L60,138.7C120,117,240,75,360,64C480,53,600,75,720,106.7C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 relative inline-block">
            New Services
            <span className="block w-20 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
          </h2>

          <p className="text-gray-600 mb-12 max-w-lg mx-auto">
            We’re introducing new services to elevate your events. Stay tuned
            for more!
          </p>

          <div className="relative flex justify-center">
            <div className="absolute w-80 h-80 bg-green-300 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-lg text-center w-96 border-t-4 border-green-500 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="absolute top-3 right-3 animate-spin-slow">
                <FaStar className="w-6 h-6 text-yellow-400" />
              </div>
              <FaPalette className="w-14 h-14 mb-4 text-green-500 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                Event Decoration
              </h3>
              <p className="text-gray-600 mb-4">
                Transform your events with our elegant and creative decoration
                services.
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-transform transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          <p className="text-gray-500 mt-8 text-sm">
            More exciting services coming soon... Stay updated!
          </p>
        </div>
      </section>

      {/* Upcoming Rentals Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 flex flex-col items-center min-h-screen">
        <div className="absolute top-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-20 text-blue-200"
            fill="currentColor"
          >
            <path
              fillOpacity="1"
              d="M0,160L60,138.7C120,117,240,75,360,64C480,53,600,75,720,106.7C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 relative inline-block">
            Upcoming Rentals
            <span className="block w-20 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
          </h2>

          <p className="text-gray-600 mb-12 max-w-lg mx-auto">
            Our latest rental services are coming soon! Be the first to know.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="relative bg-white p-8 rounded-lg shadow-lg text-center w-80 border-t-4 border-blue-500 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="absolute top-2 right-2 animate-bounce">
                <FaRocket className="w-6 h-6 text-blue-500" />
              </div>
              <FaCamera className="w-12 h-12 mb-4 text-green-500 mx-auto" />
              <h3 className="text-xl text-black font-semibold mb-2">
                Drone Rentals
              </h3>
              <p className="text-gray-600 mb-4">
                Capture stunning aerial views with our drones.
              </p>
              <button
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                onClick={handleNotifyClick}
              >
                Notify Me
              </button>
            </div>

            <div className="relative bg-white p-8 rounded-lg shadow-lg text-center w-80 border-t-4 border-blue-500 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="absolute top-2 right-2 animate-bounce">
                <FaRocket className="w-6 h-6 text-blue-500" />
              </div>
              <FaChair className="w-12 h-12 mb-4 text-green-500 mx-auto" />
              <h3 className="text-xl text-black font-semibold mb-2">
                Tables and Chairs
              </h3>
              <p className="text-gray-600 mb-4">
                Comfortable and stylish furniture for your events.
              </p>
              <button
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                onClick={handleNotifyClick}
              >
                Notify Me
              </button>
            </div>
          </div>
        </div>

        <ToastContainer />
      </section>
    </div>
  );
}
