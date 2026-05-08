"use client";
import React from "react";
import {
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaBullseye,
  FaUsers,
  FaCodeBranch,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUs() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-5xl">
      {/* Hero Section: About Us */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#ffff] drop-shadow-md leading-tight">
          We Are Driving Innovation
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          At Exerra.AI, we believe in the power of artificial intelligence to
          simplify the complex and amplify human potential. Discover our
          journey, values, and what makes us unique.
        </p>
      </motion.div>

      {/* Section 1: Mission */}
      <motion.div
        className="bg-[#0f0f0f] backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl mb-16 border border-[#DCEA22]/20 hover:border-[#DCEA22]/40 transition-colors duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-center text-[#fff] mb-6">
          Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-2xl mx-auto">
          To empower businesses and individuals by transforming intricate
          challenges into intuitive, AI-driven solutions. We are dedicated to
          creating technology that is not only intelligent but also seamlessly
          integrates into daily operations, making complex ideas effortlessly
          simple.
        </p>
      </motion.div>

      {/* Section 2: Core Values */}
      <div className="mb-16">
        <motion.h2
          className="text-4xl font-bold text-center text-[#fff] mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: FaRocket,
              title: "Innovation",
              description:
                "Continuously pushing boundaries to develop cutting-edge AI solutions that redefine industry standards.",
            },
            {
              icon: FaHandshake,
              title: "Integrity",
              description:
                "Operating with transparency, honesty, and a strong ethical compass in all our engagements.",
            },
            {
              icon: FaUsers,
              title: "Collaboration",
              description:
                "Fostering strong partnerships with our clients and within our team to achieve shared success.",
            },
            {
              icon: FaLightbulb,
              title: "Simplicity",
              description:
                "Translating complex AI concepts into user-friendly and highly effective tools.",
            },
            {
              icon: FaCodeBranch,
              title: "Adaptability",
              description:
                "Embracing change and evolving our solutions to meet the dynamic needs of the future.",
            },
            {
              icon: FaBullseye,
              title: "Impact",
              description:
                "Committed to delivering tangible results that drive growth and create real value for our clients.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#0f0f0f] backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center border border-[#DCEA22]/10 hover:border-[#DCEA22]/40 transition-colors duration-300 transform transition-transform duration-300 hover:scale-105"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="text-5xl text-[#DCEA22] mx-auto mb-4 drop-shadow-[0_0_10px_rgba(220,234,34,0.4)]" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section 3: Approach */}
      <motion.div
        className="bg-[#0f0f0f] backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-[#DCEA22]/20 hover:border-[#DCEA22]/40 transition-colors duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-center text-[#fff] mb-6">
          Our Approach
        </h2>
        <div className="text-lg md:text-xl text-center text-gray-300 leading-relaxed space-y-4 max-w-3xl mx-auto">
          <p>
            We combine deep technical expertise with a user-centric design
            philosophy. Our process begins with a thorough understanding of your
            unique challenges, allowing us to custom-craft AI solutions that are
            not just powerful, but perfectly aligned with your business
            objectives.
          </p>
          <p>
            From concept to deployment and beyond, we are your partners in
            innovation, ensuring seamless integration and continuous
            optimization to keep you ahead in a rapidly evolving digital
            landscape.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-[#DCEA22] mb-6">
          Ready to Innovate?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join us in shaping the future with intelligent solutions that truly
          make a difference.
        </p>
        <Link
          href="/Free-audit"
          className="inline-block bg-[#DCEA22] hover:bg-[#DCEA22]/90 text-[#050607] font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Get a Custom Quote
        </Link>
      </motion.div>
    </div>
  );
}
