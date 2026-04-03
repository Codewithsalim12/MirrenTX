"use client";
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaBell,
  FaUser,
  FaComments,
  FaStar,
  FaHeart,
  FaCheckCircle,
  FaGlobe,
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaQuoteLeft,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";

export default function Contact() {
  const pathname = usePathname();
  const router = useRouter();
  const { status } = useSession();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (status !== "authenticated") {
      router.push("/sign-in?callbackUrl=" + encodeURIComponent(pathname));
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.warning("Please fill in all the fields.", {
        position: "top-right",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
      });
      return;
    }
    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid phone number.", {
        position: "top-right",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!", {
          position: "top-right",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          address: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again later.", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const subscribe = async (e) => {
    e.preventDefault();

    if (status !== "authenticated") {
      router.push("/sign-in?callbackUrl=" + encodeURIComponent(pathname));
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subscribeEmail: email }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success(`${email} subscribed successfully!`, {
          position: "top-right",
        });
        setEmail("");
      } else {
        toast.error("Failed to subscribe. Please try again later.", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 selection:bg-indigo-100 selection:text-indigo-900">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-5 py-2 mb-8">
              <FaComments className="text-indigo-600 animate-pulse text-sm" />
              <span className="text-indigo-700 font-bold text-xs uppercase tracking-wider">
                Support Center
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8 text-left">
              Contact <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                MirRenTX
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-lg text-left">
              Not sure what you need? Our team at MirRenTX will be happy to listen to you and suggest the best equipment for your specific event.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Email us at</p>
                  <a href="mailto:mirrentx@gmail.com" className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors block text-left">mirrentx@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Call for Support</p>
                  <a href="tel:+919876543210" className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors block text-left">+91 8082815863</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Our Location</p>
                  <p className="text-lg font-bold text-slate-900 leading-tight text-left">Awathkulla, Kralpora<br /><span className="text-sm text-slate-500">Kupwara, J&K</span></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>

            <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-slate-200/50">
              <div className="mb-10 text-left">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">We&apos;d love to hear from you!</h2>
                <p className="text-slate-500 font-medium italic">Let&apos;s get in touch</p>
              </div>

              <form onSubmit={sendMessage} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-4 text-left">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Your name"
                        value={formData.firstName}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-transparent p-4 rounded-2xl focus:bg-white focus:border-indigo-200 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-4 text-left">Company</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-transparent p-4 rounded-2xl focus:bg-white focus:border-indigo-200 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-4 text-left">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-transparent p-4 rounded-2xl focus:bg-white focus:border-indigo-200 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-4 text-left">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-transparent p-4 rounded-2xl focus:bg-white focus:border-indigo-200 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-4 text-left">Address</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      placeholder="Physical address"
                      value={formData.address}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-transparent p-4 rounded-2xl focus:bg-white focus:border-indigo-200 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-4 text-left">Your Message</label>
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-transparent p-4 rounded-2xl h-32 focus:bg-white focus:border-indigo-200 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300 resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all shadow-xl disabled:bg-slate-200 disabled:text-slate-400 flex items-center justify-center gap-3"
                >
                  <FaPaperPlane className={loading ? "animate-bounce" : ""} />
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <section className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-slate-100 rounded-[3rem] shadow-xl shadow-slate-100/50 overflow-hidden"
          >
            <div className="p-12 border-b border-slate-50 text-left">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block text-left">Visit Us</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight text-left">Come see us in person</h2>
            </div>
            <div className="relative h-96 w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d74.0770615!3d34.5472003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e0dd5b7f2e2b91%3A0xb8c9927825eadd0e!2sMir%20Computers!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-32 bg-slate-900 rounded-[3rem] p-8 sm:p-20 relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 h-full border-white/5">
              {[...Array(6)].map((_, i) => <div key={i} className="border-r border-white/5" />)}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-2xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">Stay Updated with Latest Offers</h2>
            <p className="text-slate-400 font-medium mb-10 leading-relaxed">
              Subscribe to our newsletter to get updates on new rentals, special discounts, and exclusive event planning tips.
            </p>

            <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="flex-1 bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-indigo-500 transition-all font-medium"
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all disabled:bg-slate-700"
              >
                {submitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
