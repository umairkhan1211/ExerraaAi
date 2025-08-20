"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import Lottie from "lottie-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";

/* -------------------- Responsive Lottie -------------------- */
function LottieBrain({ className = "" }) {
  const [data, setData] = useState(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    fetch("/animations/brain.json")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduced(mq.matches);
    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  if (!data) {
    return (
      <div
        className={`flex items-center justify-center bg-[#0b0c0d]/40 ${className}`}
      >
        <span className="text-gray-400 text-sm">Loading animation…</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Fill parent; preserve aspect (no crop) */}
      <Lottie
        animationData={data}
        loop={!reduced}
        autoplay={!reduced}
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

/* -------------------- Animated word -------------------- */
function Word({ children, index, total, progress, color }) {
  const start = index / total;
  const end = Math.min(1, start + 0.2);

  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);
  const blurVal = useTransform(progress, [start, end], [2, 0]);

  const filter = useMotionTemplate`blur(${blurVal}px)`;

  return (
    <motion.span style={{ opacity, y, filter, color }} className="mr-2 inline-block">
      {children}
    </motion.span>
  );
}

/* -------------------- FlipCard -------------------- */
function FlipCard({ children, delay = 0 }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.85", "start 0.45"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [-90, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, opacity, transformPerspective: 1000 }}
      className="group relative h-full"
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      <div className="p-[1.6px] rounded-2xl bg-gradient-to-br from-[#DCEA22] via-[#DCEA22]/35 to-transparent">
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 140, damping: 16 }}
          className="rounded-2xl bg-[#0b0c0d]/80 backdrop-blur-sm border border-white/10 px-5 py-6 
                     shadow-[0_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_0_36px_-8px_rgba(220,234,34,0.45)] 
                     transition-shadow duration-300 h-full flex flex-col
                     min-h-[320px] md:min-h-[340px] lg:min-h-[360px]"
        >
          <span className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-[#DCEA22] shadow-[0_0_20px_rgba(220,234,34,0.8)]" />
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}

/* -------------------- Main Section -------------------- */
export default function Vision() {
  const paragraphRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.9", "center 0.4"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  const text =
    "Enhance your workflows to maximize performance and take effective control of your time. Focus on what truly matters to your business, while routine tasks run on autopilot with the help of our no-code and code-based solutions.";

  const words = useMemo(() => text.split(" "), [text]);
  const total = words.length;

  const darken = useTransform(smooth, [0, 1], [0, 0.6]);
  const color = useTransform(smooth, [0, 1], ["#9ca3af", "#ffffff"]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: i * 0.3 },
    }),
  };

  const cardsData = [
    {
      id: 1,
      title: "Business process automation",
      number: "①",
      description:
        "Let AI handle repetitive tasks and workflows. Improve efficiency, minimize errors, and free up time for strategic work, ultimately driving cost savings.",
    },
    {
      id: 2,
      title: "Integrate AI into your company's data",
      number: "②",
      description:
        "Our AI automation services empower you to leverage data-driven automation, generate actionable insights, and use predictive analytics to support informed decision-making.",
    },
    {
      id: 3,
      title: "App development",
      number: "③",
      description:
        "We develop apps that deliver personalized, real-time insights and transform user experiences, including AI chatbots, image recognition for augmented reality, and predictive analytics for top-tier recommendations.",
    },
    {
      id: 4,
      title: "AI automation consulting",
      number: "④",
      description:
        "Looking to find the best solution for your needs? We offer tailored solutions to provide custom solutions that align with your specific processes and industry requirements.",
    },
    {
      id: 5,
      title: "Generative AI integration",
      number: "⑤",
      description:
        "No more wasting hours on content creation – whether it's copy, images, videos, or voiceovers. We streamline the process, enabling you to produce content up to 27x faster.",
    },
    {
      id: 6,
      title: "Ongoing Maintenance and Support",
      number: "⑥",
      description:
        "We don't stop at project delivery. As your partners, we provide continuous improvements, scalability options, and ongoing support to ensure your project grows alongside your business.",
    },
  ];

  return (
    <div className="relative bg-[#050607] min-h-screen text-white py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dark overlay that increases on scroll */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-black"
        style={{ opacity: darken }}
      />

      {/* Heading */}
      <div className="relative container mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-[#ffff] leading-tight mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Vision
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            At Exerra AI, we believe the future belongs to businesses that move
            fast, stay lean, and make smart decisions—powered by automation and AI.
          </motion.p>
          <motion.p
            className="mt-6 text-base md:text-lg text-gray-400 italic max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            But here&apos;s the truth: Most businesses are drowning in tools,
            systems, and spreadsheets... Wasting hours on tasks that should&apos;ve been automated yesterday.
          </motion.p>
        </div>
      </div>

      {/* Responsive Lottie banner (no fixed height, no crop) */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          className="mx-auto w-full max-w-5xl"
        >
          {/* Aspect ratios per breakpoint: square -> 3/2 -> 16/9 -> 21/9 */}
          <LottieBrain
            className="aspect-square sm:aspect-[3/2] md:aspect-[16/9] lg:aspect-[21/9]
                       rounded-2xl overflow-hidden bg-black/30 border border-white/10"
          />
        </motion.div>
      </div>

      {/* Animated paragraph */}
      <div className="relative container mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-4xl">
        <p
          ref={paragraphRef}
          className="text-3xl md:text-4xl font-normal mt-8 leading-tight flex flex-wrap"
        >
          {words.map((w, i) => (
            <Word key={i} index={i} total={total} progress={smooth} color={color}>
              {w}
            </Word>
          ))}
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {cardsData.map((card, index) => (
            <FlipCard key={card.id} delay={index * 0.1}>
              <div className="text-xl font-bold mb-2 text-gray-400">{card.number}</div>
              <h3 className="text-xl font-semibold mb-4 text-[#ffff]">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </FlipCard>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-center mt-5">
        <Link
          href="/Free-audit"
          className="inline-block bg-[#DCEA22] hover:bg-[#DCEA22]/90 text-[#050607] font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Get a Custom Quote
        </Link>
      </div>
    </div>
  );
}
