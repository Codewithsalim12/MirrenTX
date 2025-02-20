import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaKey,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Company Info */}
        <div className="md:pr-4 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start gap-2"
            >
              <FaKey size={25} />
              <span className="text-green-50 font-extrabold">MirRenTX</span>
            </Link>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Your trusted partner for event rentals. Quality equipment,
            exceptional service.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4 mb-6 md:mb-0 text-center md:text-left">
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-green-50">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                ["About", "/About"],
                ["Services", "/services"],
                ["Privacy", "/PrivacyPolicy"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    href={url}
                    className="text-gray-300 hover:text-green-500 text-sm md:text-base transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-green-50">
              More Info
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                ["Contact", "/Contact"],
                ["Feedback", "/Feedback"],
                ["Terms of Service", "/TermsofService"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    href={url}
                    className="text-gray-300 hover:text-green-500 text-sm md:text-base transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-green-50">
            Contact Us
          </h3>
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-white md:text-blue-500 shrink-0" />
              <p className="text-gray-300 text-sm md:text-base">
                Kupwara, Jammu & Kashmir, India
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone className="text-white md:text-green-500 shrink-0" />
              <Link
                href="tel:+918082815863"
                className="text-gray-300 hover:text-green-500 text-sm md:text-base"
              >
                +91-8082815863
              </Link>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-white md:text-red-500 shrink-0" />
              <Link
                href="mailto:mirrentx@gmail.com"
                className="text-gray-300 hover:text-green-500 text-sm md:text-base"
              >
                mirrentx@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-800 mt-6 md:mt-12 pt-6 md:pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between px-12 gap-4">
          <div className="flex space-x-6 order-2 md:order-1 justify-center md:justify-start">
            {[
              [FaFacebook, "#", "text-gray-300 hover:text-gray-400"],
              [FaInstagram, "#", "text-gray-300 hover:text-gray-400"],
              [
                FaYoutube,
                "https://youtube.com/@scenicwanderers?si=me6NdoJfKjh8gdYl",
                "text-gray-300 hover:text-gray-400",
              ],
            ].map(([Icon, url, colorClass]) => (
              <Link
                key={url}
                href={url}
                className={`${colorClass} hover:opacity-75 transition-opacity text-lg md:text-xl`}
                aria-label={`Visit our ${Icon.name} page`}
              >
                <Icon />
              </Link>
            ))}
          </div>

          <p className="text-gray-400 text-xs md:text-sm order-1 md:order-2 text-center">
            &copy; {new Date().getFullYear()} MirRenTX Rental Service. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
