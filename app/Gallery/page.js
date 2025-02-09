"use client";
import Image from "next/image";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaPlayCircle,
  FaIndustry,
  FaCalendarAlt,
  FaTools,
} from "react-icons/fa";

import Link from "next/link";
import { useState, useEffect } from "react";
const images = [
  "/about-header.avif",
  "/camera.avif",
  "/camping-img-slider.avif",
];

const galleryImages = [
  {
    id: "event1",
    src: "/bikers.jpg",
    alt: "Event 1",
    title: "Keran Valley – A Journey to Nature’s Paradise",
    description: "An electrifying night of music, lights, and energy.",
  },
  {
    id: "event2",
    src: "/fun-pic.jpg",
    alt: "Event 2",
    title: "Capturing the Scenic Beauty of Neelum Valley",
    description: "Explore stunning artworks from renowned artists.",
  },
  {
    id: "event3",
    src: "/lolab-valley.jpg",
    alt: "Event 3",
    title: "Exploring the Beauty of Green Lolab Valley",
    description: "Innovations and ideas shaping the future of tech.",
  },
  {
    id: "event4",
    src: "/manzoor-marriage.jpg",
    alt: "Event 4",
    title: "A Memorable Wedding Celebration with Mirrentx Rentals",
    description: "A taste of the best flavors from around the world.",
  },
  {
    id: "event5",
    src: "/pok.jpg",
    alt: "Event 4",
    title: "Stunning Snapshots of Pakistan’s Beauty on the Road to Keran",
    description: "A taste of the best flavors from around the world.",
  },
  {
    id: "event6",
    src: "/bangus.webp",
    alt: "Event 4",
    title: "Exploring the Beauty of Bangus Valley With MirRenTX .",
    description: "A taste of the best flavors from around the world.",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      {/* Section 1: Slider */}
      <section className="relative w-full">
        <div className="relative w-full h-96 sm:h-72 overflow-hidden rounded-lg">
          {/* Dark Overlay with Blur Effect */}
          <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex justify-between items-center z-10 px-4">
            <button
              onClick={prevSlide}
              className="text-white text-4xl sm:text-2xl bg-black bg-opacity-50 backdrop-blur-lg rounded-full w-12 h-12 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-opacity-100 transition hidden sm:flex"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="text-white text-4xl sm:text-2xl bg-black bg-opacity-50 backdrop-blur-lg rounded-full w-12 h-12 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-opacity-100 transition hidden sm:flex"
            >
              &gt;
            </button>
          </div>

          {/* Image */}
          <Image
            src={images[currentIndex]}
            alt="Gallery Slider"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Title */}
        <div className="absolute z-20 top-1/4 left-1/2 transform -translate-x-1/2 text-white text-5xl md:text-4xl sm:text-2xl font-bold drop-shadow-lg text-center w-full px-4">
          <h1>Explore Our Stunning Events</h1>
        </div>
      </section>

      {/* Section 2: Gallery Images */}
      <section className="max-w-6xl mx-auto mt-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Event Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full max-h-[20vh] object-cover rounded-t-lg filter brightness-110 contrast-125 saturate-150"
              />
              <div className="p-4">
                <p className="text-gray-600 text-lg">{image.title}</p>
                <Link href={`/Gallery/${image.id}`}>
                  <button className="flex items-center mt-4 gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
                    View Details <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Video Section */}
      <section className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Event Highlights Video
        </h2>
        <div className="relative mx-auto w-full max-w-[560px] aspect-[16/9]">
          {isPlaying ? (
            <video
              src="/video/event-highlights.mp4"
              controls
              autoPlay
              className="rounded-lg w-full h-full"
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src="/video-cover-image.png"
                alt="Video Cover"
                className="rounded-lg w-full h-full"
              />
              <button
                className="absolute inset-0 flex justify-center items-center text-white text-5xl"
                onClick={() => setIsPlaying(true)}
              >
                <FaPlayCircle className="bg-black bg-opacity-50 rounded-full p-2" />
              </button>
            </div>
          )}
        </div>
        <p className="mt-4 text-lg text-gray-600">
          Watch the highlights of our most successful events.
        </p>
      </section>

      {/* Section 4: Web Dev Blog */}
      <section className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Web Development Blog
        </h2>
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <p className="text-lg mb-4">
            Stay updated with the latest trends and tutorials in web
            development. Check out our blog for insights, tips, and guides.
          </p>
          <Link href="https://tech-blog-ten-iota.vercel.app">
            <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition">
              Visit Blog <FaExternalLinkAlt />
            </button>
          </Link>
        </div>
      </section>

      {/* Section 5: Our Portfolio */}
      <section className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Portfolio</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
            <FaIndustry className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl text-gray-900 font-semibold mb-2">
              Event Setup
            </h3>
            <p className="text-gray-600">
              Browse through our portfolio showcasing event setups and
              decoration ideas tailored to your needs.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
            <FaCalendarAlt className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl text-gray-900 font-semibold mb-2">
              Upcoming Events
            </h3>
            <p className="text-gray-600">
              Check out our upcoming events and make sure you don’t miss out on
              new opportunities and experiences.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
            <FaTools className="text-4xl text-yellow-600 mb-4" />
            <h3 className="text-xl text-gray-900 font-semibold mb-2">
              Event Rentals
            </h3>
            <p className="text-gray-600">
              Explore our rental options for your next event, from tents and
              lighting to equipment and props.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
