"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Whatwedo({ activeItem, setActiveItem }) {
  const content = [
    { title: "Automate Repetitive Tasks", description: "Slash busywork with custom AI workflows." },
    { title: "Generate More Leads", description: "Multi-channel outreach that fills your pipeline." },
    { title: "Integrate AI Into Your Data", description: "Real-time insights and predictive analytics." },
    { title: "Build Smarter Apps", description: "From AI chatbots to fully custom business tools." },
    { title: "Accelerate Content Creation", description: "Copy, visuals, and videos in minutes." },
  ];


  const [animData, setAnimData] = useState(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    let alive = true;

    fetch("/animations/ai.json")
      .then((r) => r.json())
      .then((data) => {
        if (alive) setAnimData(data);
      })
      .catch(() => setAnimData(null));

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);

    return () => {
      alive = false;
      mq.removeEventListener?.("change", onChange);
    };
  }, []);

  return (
    <section className="bg-[#0b0c0f] text-white py-16 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
          >
            What We Deliver
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            AI-powered systems that cut costs, boost productivity and free your
            team to focus on what truly matters.
          </motion.p>
        </div>

        {/* Lottie (replacing iframe) */}
        <div className="flex items-center justify-center relative mb-16">
          <div
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-black/40 shadow-lg overflow-hidden"
            style={{ clipPath: "circle(50% at 50% 50%)" }}
          >
            {animData ? (
              <Lottie
                animationData={animData}
                loop={!reduced}
                autoplay={!reduced}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400 text-sm">Loading animation…</span>
              </div>
            )}
          </div>
        </div>

        {/* Vertical line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-24">
            {content.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center md:items-start ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Point */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#DCEA22] rounded-full shadow-lg border-2 border-gray-900" />

                {/* Content card */}
                <div
                  className="text-center mt-10 md:mt-0 w-full md:w-5/12 p-6 rounded-xl shadow-lg border 
                             bg-[#111214] border-gray-800"
                >
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center justify-center mt-16">
          <Link
            href="#"
            onClick={() => setActiveItem("Portfolio")}
            className="inline-block bg-[#DCEA22] hover:bg-[#DCEA22]/90 text-[#050607] font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
