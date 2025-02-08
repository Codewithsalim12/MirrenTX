// app/services/[id]/page.js
"use client";

import { useRouter } from "next/navigation";
import {
  FaTools,
  FaCamera,
  FaVideo,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";

// Inline service data (this can be moved to a separate data file if preferred)
const servicesData = [
  {
    id: "event-setup-decoration",
    name: "Event Setup & Decoration",
    image: "/event-setup.jpg", // Ensure this image is in your public/images folder
    longDescription:
      "Whether you’re celebrating a grand wedding, hosting a corporate gala, or planning an intimate private gathering, we provide a comprehensive solution that covers every aspect of event décor. From initial concept design and seamless execution to post-event support, we handle everything with precision and creativity. Our passion lies in making your special occasions truly remarkable, leaving you and your guests with lasting memories of a beautifully curated experience.",
    icon: <FaTools className="inline-block text-gray-700" />,
    externalLinks: [
      { text: "Follow us", url: "https://twitter.com/yourprofile" },
      { text: "Visit Blog", url: "https://yourblog.com" },
    ],
  },
  {
    id: "photography-videography",
    name: "Photography & Videography",
    image: "/videoGraphy.avif",
    longDescription:
      "Capture every precious moment with our skilled photographers and videographers. We deliver stunning visuals and lasting memories, using state-of-the-art equipment and creative techniques. Our services range from candid snapshots to full event documentaries, each tailored to capture the essence of your event in a unique narrative.",
    icon: <FaCamera className="inline-block text-gray-700" />,
    externalLinks: [
      { text: "Follow us", url: "https://instagram.com/yourprofile" },
      { text: "Visit Blog", url: "https://yourblog.com" },
    ],
  },
  {
    id: "event-video-editing",
    name: "Event Video Editing",
    image: "/editing-video.avif",
    longDescription:
      "Enhance your event footage with our professional video editing services. We provide comprehensive editing including color grading, transitions, and special effects. Our experienced editors transform raw footage into a compelling narrative that highlights the best moments of your event, delivering polished results whether you need a highlight reel or a full-length video.",
    icon: <FaVideo className="inline-block text-gray-700" />,
    externalLinks: [
      { text: "Follow us", url: "https://facebook.com/yourprofile" },
      { text: "Visit Blog", url: "https://yourblog.com" },
    ],
  },
];

export default function ServiceDetail({ params }) {
  const router = useRouter();
  const { id } = params; // Dynamic route parameter

  // Find the service matching the dynamic id
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-center text-red-500 text-xl mt-20">
        Service not found!
      </div>
    );
  }

  return (
    <>
      <article className="max-w-3xl mx-auto py-20 px-6 relative bg-white">
        {/* Cover Image */}
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-80 mt-6 object-cover mb-8 rounded-lg shadow-lg"
        />
        {/* Header with Icon and Title */}
        <header className="text-center mb-8">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {service.name}
          </h1>
        </header>
        {/* Blog Post Style Description */}
        <section className="prose max-w-none mx-auto mb-8">
          <p className="text-gray-700">{service.longDescription}</p>
        </section>
        {/* Footer with External Links */}
        <footer className="flex justify-center gap-6 mt-10">
          {service.externalLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              {link.text} <FaExternalLinkAlt />
            </a>
          ))}
        </footer>
      </article>
      {/* Back Button - Fixed at the bottom left corner */}
      <button
        onClick={() => router.back()}
        className="fixed bottom-10 right-4 bg-green-600 text-blue-600 p-3 rounded-full shadow-2xl hover:bg-green-400 flex items-center justify-center"
      >
        <FaArrowLeft className="h-5 w-5 text-black" />
      </button>
    </>
  );
}
