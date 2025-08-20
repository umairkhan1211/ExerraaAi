"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/** ------------------ DATA ------------------ */
const portfolioItems = [
  {
    id: "p1",
    title: "AI-Powered Viral Shorts Automation",
    description:
      "This end‑to‑end automation generates and publishes cinematic animal battle videos for social media using AI. It pulls data from Google Sheets, uses GPT‑4 to generate matchups, creates photorealistic image prompts with PiAPI, renders videos via Creatomate, and auto‑posts to Instagram, TikTok, and YouTube through Blotato — completely hands free.",
    image: "/images/image1.png",
  },
  {
    id: "p2",
    title: "AI-Driven Lead Generation & Personalized Email Writing",
    description:
      "Automatically scrapes verified leads from Apollo.io, enriches, maps and stores data in Sheets. GPT‑4 then generates personalized cold emails by role & context. Lead sourcing, enrichment and copywriting are fully automated and ready to scale.",
    image: "/images/image2.png",
  },
  {
    id: "p3",
    title: "AI Cold Calling & Booking Automation",
    description:
      "A GPT‑powered voice assistant (VAPI) fetches 'To Call' leads from Airtable, checks availability, delivers a personalized pitch, books meetings, writes call summaries, updates Airtable and schedules in Google Calendar. Zero manual calls.",
    image: "/images/image3.png",
  },
  {
    id: "p4",
    title: "Client Onboarding Automation",
    description:
      "Triggered by a form, it creates Drive folders, ClickUp lists with 20–30 parsed tasks, Slack channels, welcome emails and a booking link — plus GPT‑extracted subtasks with dates — delivering a consistent onboarding in seconds.",
    image: "/images/image4.png",
  },
  {
    id: "p5",
    title: "LinkedIn Content Repurposing & Publishing",
    description:
      "Scrapes competitor posts, dedupes, analyzes formats, and uses GPT‑4o to repurpose each into 3 variants. Saves to Airtable and auto‑publishes on schedule. Includes transcription, Telegram idea assistant, and memory‑buffered tone.",
    image: "/images/image5.png",
  },
  {
    id: "p6",
    title: "AI-Powered Product Video Generator",
    description:
      "Upload a product photo → GPT creates a studio prompt → enhanced image → RunwayML animates a cinematic 3D turntable video. Assets delivered via Gmail. Perfect for DTC teams needing fast premium creatives.",
    image: "/images/image6.png",
  },
  {
    id: "p7",
    title: "Telegram Stock Analysis Assistant",
    description:
      "Users ask about any ticker; system returns a TradingView candlestick chart + AI technical analysis (MACD, patterns, S/R, volume) in seconds. Memory‑aware chat via Claude/GPT‑4o for deeper context.",
    image: "/images/image7.png",
  },
  {
    id: "p8",
    title: "Research Agent",
    description:
      "Autonomous research agent combining OpenAI reasoning with live tools (Wikipedia, HN, Google via SerpAPI). Produces fresh, accurate briefs with memory context for content prep and executive summaries.",
    image: "/images/image8.png",
  },
  {
    id: "p9",
    title: "Calendar Agent",
    description:
      "Understands intent, checks conflicts, and creates events via Google Calendar. Remembers context for natural follow‑ups. A smart conversational layer for scheduling.",
    image: "/images/image9.png",
  },
  {
    id: "p10",
    title: "Voice-Powered Personal Assistant",
    description:
      "Voice messages in Telegram are transcribed, routed to specialized agents (email, calendar, research) and answered in text or voice. Uses embeddings + vector DB for memory‑aware replies.",
    image: "/images/image10.png",
  },
  {
    id: "p11",
    title: "Email Agent",
    description:
      "Reads, understands and drafts human‑sounding replies using OpenAI. Keeps thread memory, pulls past context and formats professional responses to streamline inboxes.",
    image: "/images/image11.png",
  },
  {
    id: "p12",
    title: "Email Sales Agent",
    description:
      "Monitors Gmail, extracts lead data, enriches via Google/LinkedIn, summarizes with GPT‑4o, logs to Airtable, scans Docs KB, drafts tailored replies and sends for approval — then auto‑sends.",
    image: "/images/image12.png",
  },
];

/** ------------------ ANIMATIONS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.06 },
  }),
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const cardHover = {
  rest: { y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    y: -4,
    boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
};

/** ------------------ ITEM ------------------ */
const PortfolioItem = ({ item, index }) => {
  const { title, description, image } = item;
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="group"
    >
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={`relative grid gap-8 md:gap-10 items-center ${
          isEven ? "md:grid-cols-[1.1fr_1fr]" : "md:grid-cols-[1fr_1.1fr]"
        }`}
      >
        {/* IMAGE */}
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className={`relative rounded-2xl border border-white/10 bg-[#0e0f11]/60 backdrop-blur-sm cursor-pointer ${
            isEven ? "" : "md:order-2"
          }`}
          variants={{
            hidden: { opacity: 0, scale: 0.96, y: 18 }, // 👈 imageReveal se
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.65, ease: "easeOut" },
            },
            rest: { scale: 1 },
            hover: {
              scale: 1.05,
              transition: { type: "spring", stiffness: 200, damping: 18 },
            },
          }}
        >
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={1280}
              height={800}
              priority={index < 2}
              className="w-full h-full object-cover rounded-2xl
                 brightness-[0.6] contrast-105 saturate-90
                 transition-transform duration-700 ease-out
                 group-hover:brightness-[0.85]"
            />
            {/* soft gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none rounded-2xl" />
            {/* subtle neon border glow on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover/image:ring-[#DCEA22]/50 transition" />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          className={`relative rounded-2xl p-6 md:p-7 lg:p-8
                     bg-[#0b0c0d]/70 backdrop-blur-sm
                     border border-white/10`}
        >
          {/* accent tab */}
          <span className="absolute -top-3 left-6 h-6 w-6 rounded-full bg-[#DCEA22] shadow-[0_0_22px_rgba(220,234,34,0.65)]" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </motion.div>
      </motion.div>

      {/* divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10 md:my-14" />
    </motion.article>
  );
};

/** ------------------ PAGE ------------------ */
export default function Portfolio() {
  return (
    <div className="bg-[#0b0c0d] text-white min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 pt-14 pb-4 md:pt-20 md:pb-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Latest Showcase & Solutions by{" "}
            <span className="text-[#DCEA22]">Exerra&nbsp;AI</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="mt-5 md:mt-6 text-center text-gray-300 max-w-3xl mx-auto"
          >
            A curated selection of recent automation builds visually
            presented, performance‑optimized, and battle‑tested.
          </motion.p>
        </div>
      </header>

      {/* LIST */}
      <main className="container mx-auto max-w-6xl px-4 pb-20">
        <div className="space-y-10 md:space-y-14">
          {portfolioItems.map((item, idx) => (
            <PortfolioItem key={item.id} item={item} index={idx} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center mt-4">
          <Link
            href="/Free-audit"
            className="inline-block bg-[#DCEA22] hover:bg-[#DCEA22]/90 text-[#050607] font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Get a Custom Quote
          </Link>
        </div>
      </main>
    </div>
  );
}
