import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
  AiOutlinePhone,
} from "react-icons/ai";

const OwnersPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Heading Section */}
      <section className="text-center mb-16 mt-14">
        <h1 className="text-5xl  drop-shadow-lg font-bold text-gray-800 mb-4">
          Meet the Owners
        </h1>
        <p className="text-lg text-gray-600">The team behind MirRenTX</p>
      </section>

      {/* Owner Cards Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 px-4">
        {/* Owner Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="w-32 h-32 mx-auto mb-4">
            <img
              src="/Tanveer-img.jpg" // Replace with the owner's image
              alt="Owner 1"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Tanveer Mir
          </h3>
          <p className="text-gray-600 mb-4">Co-Founder</p>
          <div className="flex justify-center gap-4">
            <Link href="https://instagram.com/owner1" passHref>
              <AiOutlineInstagram className="text-2xl text-gray-700 hover:text-blue-500" />
            </Link>
            <Link href="https://facebook.com/owner1" passHref>
              <AiOutlineFacebook className="text-2xl text-gray-700 hover:text-blue-500" />
            </Link>
            <Link href="https://wa.me/owner1" passHref>
              <AiOutlineWhatsApp className="text-2xl text-gray-700 hover:text-green-500" />
            </Link>
          </div>
          <div className="mt-4">
            <a href="tel:+91-8082815863">
              <AiOutlinePhone className="text-2xl text-gray-700 hover:text-green-500 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Owner Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="w-32 h-32 mx-auto mb-4">
            <img
              src="/owner2.jpg" // Replace with the owner's image
              alt="Owner 2"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Abdul Sameer Mir
          </h3>
          <p className="text-gray-600 mb-4">Founder & Manager</p>
          <div className="flex justify-center gap-4">
            <Link href="https://instagram.com/owner2" passHref>
              <AiOutlineInstagram className="text-2xl text-gray-700 hover:text-blue-500" />
            </Link>
            <Link href="https://facebook.com/owner2" passHref>
              <AiOutlineFacebook className="text-2xl text-gray-700 hover:text-blue-500" />
            </Link>
            <Link href="https://wa.me/owner2" passHref>
              <AiOutlineWhatsApp className="text-2xl text-gray-700 hover:text-green-500" />
            </Link>
          </div>
          <div className="mt-4">
            <a href="tel:+91-7006403256">
              <AiOutlinePhone className="text-2xl text-gray-700 hover:text-green-500 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Owner Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="w-32 h-32 mx-auto mb-4">
            <img
              src="/social-media-handler.jpg" // Replace with the owner's image
              alt="Owner 3"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Mohammad Salim mir
          </h3>
          <p className="text-gray-600 mb-4">Social Media Handler</p>
          <div className="flex justify-center gap-4">
            <Link href="https://instagram.com/owner3" passHref>
              <AiOutlineInstagram className="text-2xl text-gray-700 hover:text-blue-500" />
            </Link>
            <Link href="https://facebook.com/owner3" passHref>
              <AiOutlineFacebook className="text-2xl text-gray-700 hover:text-blue-500" />
            </Link>
            <Link href="https://wa.me/owner3" passHref>
              <AiOutlineWhatsApp className="text-2xl text-gray-700 hover:text-green-500" />
            </Link>
          </div>
          <div className="mt-4">
            <a href="tel:+91-6006798656">
              <AiOutlinePhone className="text-2xl text-gray-700 hover:text-green-500 cursor-pointer" />
            </a>
          </div>
        </div>
      </section>

      {/* About Owners Section */}
      <section className="max-w-6xl mx-auto px-4 text-center">
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
