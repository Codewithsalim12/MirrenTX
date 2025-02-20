"use client";

import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import ProtectedRoute from "../components/ProtectedRoute";
const projects = [
  {
    title: "Tech-Bog",
    description: "A Blog for Web Developers.",
    image: "/Tech-blog.png",
    demoLink: "https://tech-blog-ten-iota.vercel.app/",
  },
  {
    title: "Bitlinks(URL Shortener)",
    description: "Shorten URL with this free Bitlinks Url Shortener. ",
    image: "/Bitlinks.png",
    demoLink: "https://bitlinks-omega.vercel.app/",
  },
  {
    title: "Tour & Travels UI",
    description: "An interactive UI/UX design showcase.",
    image: "/Tourly - Travel agancy.png",
    demoLink: "https://codewithsalim12.github.io/tour-guide.github.io/",
  },
];

export default function WebDevServices() {
  return (
    <ProtectedRoute>
      <div className="p-8 space-y-16 bg-white">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mt-44 drop-shadow-lg ">
            Web Development Services
          </h1>
          <p className="text-lg text-gray-600">
            Creating stunning, responsive, and modern websites for your
            business.
          </p>
        </section>

        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: FaCode,
              title: "Web Development",
              color: "text-blue-500",
              desc: "Custom web applications tailored to your needs.",
            },
            {
              icon: FaPaintBrush,
              title: "Web Design",
              color: "text-green-500",
              desc: "Beautiful and engaging designs that attract users.",
            },
            {
              icon: FaLaptopCode,
              title: "UI/UX",
              color: "text-purple-500",
              desc: "User-centric design for an intuitive experience.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 text-center border rounded-lg shadow-md bg-white transition-all"
            >
              <service.icon className={`text-5xl mx-auto ${service.color}`} />
              <h2 className="text-xl text-gray-900 font-semibold mt-4">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </section>

        {/* Recent Projects Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden border rounded-lg shadow-md bg-white"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg text-gray-900 font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border bg-blue-600 border-blue-700 rounded-lg inline-flex items-center transition-all text-gray-50 hover:bg-blue-700 hover:shadow-lg transform hover:scale-105"
                  >
                    <p className="title text-gray-50 ">View Demo</p>
                    <FaExternalLinkAlt className="ml-2 text-blue-50 transition-transform transform hover:scale-110 " />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-4 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-700">
            Mail me at{" "}
            <a
              href="mailto:mirrentx@gmail.com"
              className="text-blue-500 font-semibold hover:underline"
            >
              mirrentx@gmail.com
            </a>
          </p>
          <div>
            <FaEnvelope className="text-4xl mx-auto text-gray-500" />
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
