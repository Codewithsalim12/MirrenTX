import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold">Your Rental Service</h2>
          <p className="mt-2 text-gray-400">
            Rent tents, lighting decorations, DSLR cameras, generators, and more
            for weddings, parties, and special events. Enjoy hassle-free
            booking, reliable service, and quality equipment to make your
            occasion memorable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-400 hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium">Contact Us</h3>
          <p className="mt-2 text-gray-400">
            193224 Kralpora Kupwara, Jammu & Kashmir, India
          </p>
          <p className="text-gray-400">Phone: +91-8082815863</p>
          <p className="text-gray-400">Email: mirrentx@gmail.com</p>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="#" className="text-blue-600 text-2xl">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-pink-500 text-2xl">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-red-600 text-2xl">
            <FaYoutube />
          </Link>
          <Link href="#" className="text-blue-400 text-2xl">
            <FaTwitter />
          </Link>
        </div>
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} MirRenTX Rental Service. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
