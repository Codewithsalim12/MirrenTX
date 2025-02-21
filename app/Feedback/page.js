// "use client";

// import { useState } from "react";
// import { toast } from "react-hot-toast";
// import { FaStar } from "react-icons/fa";
// import ProtectedRoute from "../components/ProtectedRoute";
// export default function FeedbackPage() {
//   const [form, setForm] = useState({ name: "", email: "", feedback: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.feedback) {
//       toast.error("All fields are required.");
//       return;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       toast.error("Invalid email address.");
//       return;
//     }

//     if (form.feedback.length > 300) {
//       toast.error("Feedback must be under 300 characters.");
//       return;
//     }

//     setLoading(true);

//     const response = await fetch("/api/feedback", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await response.json();
//     setLoading(false);

//     if (data.success) {
//       toast.success(data.message);
//       setForm({ name: "", email: "", feedback: "" });
//     } else {
//       toast.error(data.message);
//     }
//   };

//   return (
//     <ProtectedRoute>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
//         {/* Top Beautiful Header
//       <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-8 text-center rounded-lg shadow-lg mb-6">
//         <h1 className="text-4xl font-extrabold mt-16">Your Feedback Matters</h1>
//         <p className="text-lg mt-2 opacity-90">
//           Help us improve by sharing your thoughts
//         </p>
//       </div> */}
//         {/* Section 1: Intro */}
//         <section className="max-w-3xl mx-auto text-center mt-28 mb-12">
//           <h1 className="text-4xl font-bold text-gray-900">
//             We Appreciate Your Feedback
//           </h1>
//           <p className="text-lg text-gray-600 mt-4">
//             Help us improve by sharing your experience with our services.
//           </p>
//         </section>

//         <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full border border-gray-200">
//           <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//             Share Your Feedback
//           </h2>
//           <div className="flex justify-center gap-2 text-yellow-400 text-3xl mb-4">
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full text-gray-800 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full p-3 text-gray-800 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
//               required
//             />
//             <textarea
//               name="feedback"
//               placeholder="Your Feedback (Max 300 characters)"
//               value={form.feedback}
//               onChange={handleChange}
//               maxLength="300"
//               className="w-full p-3 text-gray-800 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
//               required
//             />
//             <p className="text-gray-500 text-sm">Max 300 characters allowed.</p>
//             <p className="text-gray-600 text-center font-semibold text-sm">
//               {" "}
//               Kindly take a moment to tell us what you think
//             </p>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition font-semibold shadow-md"
//             >
//               {loading ? "Submitting..." : "Share My Feedback"}
//             </button>
//           </form>
//         </div>

//         {/* Additional Section Below Form */}
//         <div className="mt-10 max-w-lg text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-300">
//           <h3 className="text-2xl font-semibold text-gray-800">
//             Why Your Feedback is Important
//           </h3>
//           <p className="text-gray-600 mt-3 leading-relaxed">
//             Your insights help us enhance our services and deliver a better
//             experience. We value every suggestion and appreciate you taking the
//             time to help us improve.
//           </p>
//         </div>

//         <section className="max-w-6xl mx-auto text-center mt-4">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//             What Our Users Say 💬
//           </h2>
//           <div className="flex flex-wrap justify-center gap-8">
//             {/* Testimonial 1 */}
//             <div className="w-full sm:w-1/2 md:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
//               <img
//                 src="/profile-black.jpg"
//                 alt="John Doe"
//                 className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="text-xl text-gray-800 font-semibold mb-2">
//                 RASHID EHMAD
//               </h3>
//               <div className="text-yellow-400 flex justify-center gap-1">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </div>
//               <p className="text-gray-600 mt-2">
//                 "Amazing service! Very professional and quick response. Highly
//                 recommend!"
//               </p>
//             </div>

//             {/* Testimonial 2 */}
//             <div className="w-full sm:w-1/2 md:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
//               <img
//                 src="/profile-black.jpg"
//                 alt="Jane Smith"
//                 className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="text-xl text-gray-800 font-semibold mb-2">
//                 IFLAQ AHMAD
//               </h3>
//               <div className="text-yellow-400 flex justify-center gap-1">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </div>
//               <p className="text-gray-600 mt-2">
//                 "Absolutely loved the experience! The team was so responsive and
//                 helpful."
//               </p>
//             </div>
//             {/* Testnomial 3 */}
//             <div className="w-full sm:w-1/2 md:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
//               <img
//                 src="/profile-black.jpg"
//                 alt="Jane Smith"
//                 className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="text-xl text-gray-800 font-semibold mb-2">
//                 LONE MANZOOR
//               </h3>
//               <div className="text-yellow-400 flex justify-center gap-1">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </div>
//               <p className="text-gray-600 mt-2">
//                 "The experience was fantastic! The team was quick to respond and
//                 very supportive."
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </ProtectedRoute>
//   );
// }
 "use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import ProtectedRoute from "../components/ProtectedRoute";

export default function FeedbackPage() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const emojis = ["😞", "😐", "😊", "😁", "🤩"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.feedback) {
      toast.error("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Invalid email address.");
      return;
    }

    if (form.feedback.length > 500) {
      toast.error("Feedback must be under 500 characters.");
      return;
    }

    setLoading(true);

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, rating }),
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      toast.success(data.message);
      setForm({ name: "", email: "", feedback: "" });
    } else {
      toast.error(data.message);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
        <section className="max-w-3xl mx-auto text-center mt-28 mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            We Appreciate Your Feedback
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Help us improve by sharing your experience with our services.
          </p>
        </section>

        {/* Star Rating System */}
        {!submitted ? (
          <div className="flex justify-center gap-2 text-gray-400 text-3xl mb-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <FaStar
                key={num}
                onClick={() => {
                  setRating(num);
                  setSubmitted(true);
                }}
                className={`cursor-pointer ${
                  num <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-2xl font-bold text-gray-800">
            <span>{emojis[rating - 1]}</span>
            <p className="text-lg mt-2">Thank you for your feedback!</p>
          </div>
        )}

        {/* Feedback Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Share Your Feedback
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full text-gray-800 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 text-gray-800 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
              required
            />
            <textarea
              name="feedback"
              placeholder="Your Feedback (Max 500 characters)"
              value={form.feedback}
              onChange={handleChange}
              maxLength="500"
              className="w-full p-3 text-gray-800 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
              required
            />
            <p className="text-gray-500 text-sm">Max 500 characters allowed.</p>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition font-semibold shadow-md"
            >
              {loading ? "Submitting..." : "Share My Feedback"}
            </button>
          </form>
        </div>

        {/* Additional Section Below Form */}
        <div className="mt-10 max-w-lg text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-300">
          <h3 className="text-2xl font-semibold text-gray-800">
            Why Your Feedback is Important
          </h3>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Your insights help us enhance our services and deliver a better
            experience. We value every suggestion and appreciate you taking the
            time to help us improve.
          </p>
        </div>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            What Our Users Say 💬
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "RASHID EHMAD",
                review:
                  "Amazing service! Very professional and quick response. Highly recommend!",
              },
              {
                name: "IFLAQ AHMAD",
                review:
                  "Absolutely loved the experience! The team was so responsive and helpful.",
              },
              {
                name: "LONE MANZOOR",
                review:
                  "The experience was fantastic! The team was quick to respond and very supportive.",
              },
            ].map((user, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src="/profile-black.jpg"
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl text-gray-800 font-semibold mb-2">
                  {user.name}
                </h3>
                <div className="text-yellow-400 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 mt-2">"{user.review}"</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
