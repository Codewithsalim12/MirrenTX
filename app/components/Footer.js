import Link from "next/link";
import { FaFacebook, FaKey, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-primary">
            <Link className="flex items-center justify-center gap-1" href="/">
              <h2 className="text-3xl font-extrabold text-primary">
                <span className="text-green-700 font-extrabold">MirRenTX</span>{" "}
                Rental Services
              </h2>
            </Link>
          </h2>
          <p className="text-gray-300 text-[15px] leading-relaxed tracking-wide">
            Rent tents, lighting, DSLR cameras, generators, and more for
            weddings, parties, and events. Enjoy easy booking, reliable service,
            and top-quality equipment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-start mt-4 md:mt-0 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/About"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              More Info
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Contact"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/Feedback"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-primary transition duration-300"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mt-8 md:mt-0">
          <h3 className="text-xl font-semibold text-primary">Contact Us</h3>
          <p className="text-gray-400">193224 Kupwara, Jammu & Kashmir, India</p>
          <p className="text-gray-400">Phone: +91-8082815863</p>
          <p className="text-gray-400">Email: mirrentx@gmail.com</p>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="text-center mt-12 border-t border-gray-700 pt-6">
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="#"
            className="text-blue-600 text-3xl hover:text-primary transition duration-300"
          >
            <FaFacebook />
          </Link>
          <Link
            href="#"
            className="text-pink-500 text-3xl hover:text-primary transition duration-300"
          >
            <FaInstagram />
          </Link>
          <Link
            href="#"
            className="text-red-600 text-3xl hover:text-primary transition duration-300"
          >
            <FaYoutube />
          </Link>
        </div>
        <p className="text-gray-500 text-lg">
          &copy; {new Date().getFullYear()} MirRenTX Rental Service. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
