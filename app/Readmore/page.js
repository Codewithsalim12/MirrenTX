"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const About = () => {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className=" mt-10 flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-300 group"
      >
        <ArrowLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform duration-300"
        />
        <span className="font-medium">Back</span>
      </button>

      {/* Page Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          About{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
            MirRenTX
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner for premium event rentals and equipment solutions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Image & Description */}
        <div className="space-y-8">
          {/* Image with fancy frame */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/Readmore-img.avif"
              alt="Rental Service"
              className="relative w-full h-80 sm:h-96 object-cover rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          {/* Description Section */}
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              <span className="text-5xl font-bold float-left mr-2 mt-1 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
                W
              </span>
              elcome to MirRenTX, your premier destination for high-quality
              event rentals. We specialize in providing exceptional lighting
              systems for weddings, reliable generators for power solutions,
              professional DSLR cameras for photography, and premium tents to
              make your special occasions truly memorable.
            </p>
            <p className="text-lg leading-relaxed">
              Our commitment to excellence ensures every rental experience is
              seamless. With meticulously maintained equipment and a
              customer-first approach, we take pride in being the trusted choice
              for weddings, corporate events, and outdoor gatherings across the
              region.
            </p>
          </div>
        </div>

        {/* Right Side: Why Choose Us */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
              Why Choose MirRenTX?
            </h2>
            <ul className="space-y-4">
              {[
                "Wide range of premium rental equipment",
                "Competitive pricing with flexible rental terms",
                "Meticulously maintained, high-quality products",
                "Prompt delivery with professional setup",
                "24/7 dedicated customer support",
                "Years of trusted industry experience",
                "Custom solutions for unique events",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-100 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Events Served</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Elevate Your Event?
        </h3>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Let us provide the perfect equipment to make your occasion
          unforgettable
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => router.push("/rentals")}
            className="px-8 py-3 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Browse Rentals
          </button>
          <button
            onClick={() => router.push("/Contact")}
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
