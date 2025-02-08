import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlinePhone,
} from "react-icons/ai";

const OwnersPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      {/* Heading Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 drop-shadow-lg mt-10">
          Meet the Owners
        </h1>
        <p className="text-lg text-gray-600">The team behind MirRenTX</p>
      </section>

      {/* Owner Cards Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Owner Card 1 */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600">
            <img
              src="/Tanveer-img.jpg" // Replace with high-quality image
              alt="Tanveer Mir"
              className="w-32 h-32 rounded-full object-cover border-4 border-white absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
            />
          </div>
          <div className="p-6 mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Tanveer Mir
            </h3>
            <p className="text-gray-600 mb-4">Co-Founder</p>
            <p className="text-gray-500 text-sm mb-4">
              With a vision for innovation, Tanveer ensures MirRenTX delivers
              top-notch event solutions.
            </p>
            <div className="flex justify-center gap-4">
              <a href="tel:+91-8082815863">
                <AiOutlinePhone className="text-2xl text-gray-700 hover:text-green-500 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Owner Card 2 */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-600">
            <img
              src="/owner2.jpg" // Replace with high-quality image
              alt="Abdul Sameer Mir"
              className="w-32 h-32 rounded-full object-cover border-4 border-white absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
            />
          </div>
          <div className="p-6 mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Abdul Sameer Mir
            </h3>
            <p className="text-gray-600 mb-4">Founder & Manager</p>
            <p className="text-gray-500 text-sm mb-4">
              Sameer brings years of experience and leadership to ensure every
              event is seamless.
            </p>
            <div className="flex justify-center gap-4">
              <a href="tel:+91-7006403256">
                <AiOutlinePhone className="text-2xl text-gray-700 hover:text-green-500 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Owner Card 3 */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="relative h-48 bg-gradient-to-r from-green-500 to-teal-600">
            <img
              src="/social-media-handler.jpg" // Replace with high-quality image
              alt="Mohammad Salim Mir"
              className="w-32 h-32 rounded-full object-cover border-4 border-white absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
            />
          </div>
          <div className="p-6 mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Mohammad Salim Mir
            </h3>
            <p className="text-gray-600 mb-4">Social Media Handler</p>
            <p className="text-gray-500 text-sm mb-4">
              Salim connects MirRenTX with the world, ensuring our brand shines
              online.
            </p>
            <div className="flex justify-center gap-4">
              <a href="tel:+91-6006798656">
                <AiOutlinePhone className="text-2xl text-gray-700 hover:text-green-500 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Owners Section */}
      <section className="max-w-6xl mx-auto px-4 text-center mt-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          About Our Owners
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          The founders of MirRenTX, Tanveer Mir, Sameer Mir, and Mohammad Salim,
          are passionate about providing reliable, high-quality event rental
          services. With their diverse backgrounds and experience, they are
          committed to ensuring every event is a success. Their dedication and
          hard work have helped MirRenTX become a trusted name in the event
          rental industry.
        </p>
      </section>
    </div>
  );
};

export default OwnersPage;
