"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { rentalsData } from "../data";
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaStar, 
  FaShoppingCart, 
  FaShieldAlt, 
  FaClock, 
  FaTruck 
} from "react-icons/fa";
import Link from "next/link";

export default function RentalDetailPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const { status } = useSession();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = rentalsData.find((d) => d.id === parseInt(id));
    if (foundItem) {
      setItem(foundItem);
    }
  }, [id]);

  const handleRentNow = () => {
    if (status !== "authenticated") {
      router.push("/sign-in?callbackUrl=" + encodeURIComponent(`/rentals/rent-form?item=${id}`));
    } else {
      router.push(`/rentals/rent-form?item=${id}`);
    }
  };

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500 font-medium">Loading rental details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Immersive Header */}
      <div className="relative h-[50vh] lg:h-[60vh] w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
        
        {/* Navigation */}
        <div className="absolute top-8 left-8 z-20">
          <Link href="/rentals">
            <button className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to Fleet
            </button>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-12 left-8 right-8 z-20 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  {item.category}
                </span>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="text-white font-bold">{item.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                {item.title}
              </h1>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
              <div className="text-white/60 text-sm mb-1">Rental Starts At</div>
              <div className="text-3xl font-bold text-white">{item.price}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 -mt-10 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About this Equipment</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {item.fullDescription || item.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-50">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-blue-600" />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-3xl">
                  <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <FaShieldAlt className="text-blue-600" />
                    MirRenTX Guarantee
                  </h3>
                  <p className="text-blue-700/80 text-sm leading-relaxed">
                    All our equipment undergoes rigorous 50-point inspection before every rental. We guarantee 99.9% uptime and immediate replacement in case of any issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Rent From Us Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: FaClock, title: "24/7 Delivery", desc: "Express delivery across Kupwara, Kashmir" },
                { icon: FaCheckCircle, title: "Expert Setup", desc: "Professional installation included" },
                { icon: FaTruck, title: "Flexible Tenure", desc: "Daily, weekly and monthly plans" }
              ].map((benefit, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-xs text-gray-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Booking Widget */}
          <div className="relative">
            <div className="sticky top-32 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg ring-8 ring-blue-50`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-green-600 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available Now
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm py-3 border-b border-gray-50">
                  <span className="text-gray-500">Service Status</span>
                  <span className="font-bold text-green-600">Active / Qualified</span>
                </div>
                <div className="flex justify-between text-sm py-3 border-b border-gray-50">
                  <span className="text-gray-500">Availability</span>
                  <span className="text-blue-600 font-bold">Kupwara, Kashmir</span>
                </div>
                <div className="flex justify-between text-sm py-3">
                  <span className="text-gray-500">Support</span>
                  <span className="text-gray-900 font-bold">24/7 Priority</span>
                </div>
              </div>

              <button
                onClick={handleRentNow}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95"
              >
                <FaShoppingCart />
                Proceed to Booking
              </button>

              <p className="text-center text-[10px] text-gray-400 mt-6 px-4">
                By clicking proceed, you agree to our rental terms and safety guidelines. No hidden charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
