import Head from "next/head";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Layout from "../components/layouts/Layout";
import Header from "../components/layouts/Header";
import { Fascinate } from "next/font/google";
import Spinner from "../components/Spinner";
import Image from "next/image";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});
const fascinate = Fascinate({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});



// sections (lazy)
const Vision = dynamic(() => import("../components/sections/Vision"), {
  loading: () => <div className="h-40 w-full" />, // lightweight fallback
});
const Pricing = dynamic(() => import("../components/sections/Pricing"), {
  loading: () => <div className="h-40 w-full" />,
});
const AboutUs = dynamic(() => import("../components/sections/AboutUs"), {
  loading: () => <div className="h-40 w-full" />,
});
const Portfolio = dynamic(() => import("../components/sections/Portfolio"), {
  loading: () => <div className="h-40 w-full" />,
});

const Impact = dynamic(() => import("../components/Impact/Impact"), {
  ssr: false,
});
const Whatwedo = dynamic(() => import("../components/Whatwedo/Whatwedo"), {
  ssr: false,
});

// wavy stripe
const WavyStripe = dynamic(() => import("../components/WavyStripe"), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-[#050607]" />,
});

// Lottie (client only)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

/** Tiny Lottie badge for the gear on top of the “A” */
function GearBadge({ className }) {
  const [data, setData] = useState(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/animations/Gears.json")
      .then((r) => r.json())
      .then((d) => active && setData(d))
      .catch(() => active && setData(null));

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => {
      active = false;
      mq.removeEventListener?.("change", onChange);
    };
  }, []);

  if (!data) return null;

  return (
    <Lottie
      animationData={data}
      loop={!reduced}
      autoplay={!reduced}
      className={className}
      style={{ pointerEvents: "none" }}
    />
  );
}

export default function Home() {
  const [activeItem, setActiveItem] = useState("Home");
  const [mount3D, setMount3D] = useState(false);

  const searchParams = useSearchParams();
  const section = searchParams.get("section"); 
  const hasSection = !!section;


  // ✅ Sync activeItem with URL
  useEffect(() => {
    if (section) {
      setActiveItem(section);
    } else {
      setActiveItem("Home");
    }
  }, [section]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mqSmall = window.matchMedia("(max-width: 768px)");
    const t = setTimeout(() => setMount3D(true), mqSmall.matches ? 200 : 100);
    return () => clearTimeout(t);
  }, []);

  // ✅ scroll only once (not every section change)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderSectionContent = () => {
    switch (activeItem) {
      case "Vision":
        return <Vision />;
      case "Pricing":
        return <Pricing />;
      case "Portfolio":
        return <Portfolio />;
      case "About us":
        return <AboutUs />;
      default:
        return null;
    }
  };

  return (
    <Layout activeItem={activeItem} setActiveItem={setActiveItem}>
      <Head>
        <title>Exerra AI</title>
      </Head>

      <main className="flex flex-col min-h-screen w-full bg-[#050607] overflow-x-hidden">
        <Header activeItem={activeItem} setActiveItem={setActiveItem} />

          {activeItem === "Home" && !hasSection ? (
          <>
            {/* === Hero Section === */}
            <section
              className="relative flex flex-col items-center justify-between w-full px-4"
              style={{ minHeight: "calc(100vh - var(--header-height, 4vh))" }}
            >
              {/* Heading + Paragraph */}
              <div className="relative z-20 text-center w-full pt-16 max-sm:pt-72 md:pt-38">
                {/* Heading with animated gear over the first ‘A’ */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`${fascinate.className} animate-text text-7xl max-sm:text-6xl max-md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#050607] via-[#101010] to-[#202122] drop-shadow-lg text-outline-white`}
                >
                  {/* Word 1: “Automate” (no-wrap) */}
                  <span className="inline-flex items-baseline whitespace-nowrap align-top">
                    {/* A with gear above */}
                    <span className="relative inline-block">
                      A
                      <span
                        aria-hidden
                        className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2
                   w-7 h-7 sm:w-9 sm:h-9 filter
                   drop-shadow-[0_0_12px_rgba(220,234,34,0.35)] pointer-events-none"
                      >
                        <GearBadge className="w-full h-full" />
                      </span>
                    </span>
                    <span>utomate</span>
                  </span>
                  {/* space between words (allows line break only between words) */}{" "}
                  {/* Word 2: “Workflows” (no-wrap) */}
                  <span className="inline-flex items-baseline whitespace-nowrap">
                    <span>Workflow</span>
                    {/* last “s” with gear below */}
                    <span className="relative inline-block">
                      s
                      <span
                        aria-hidden
                        className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2
                   w-6 h-6 sm:w-8 sm:h-8 filter
                   drop-shadow-[0_0_12px_rgba(220,234,34,0.35)] pointer-events-none"
                      >
                        <GearBadge className="w-full h-full" />
                      </span>
                    </span>
                  </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                  className={`${plusJakarta.className} text-[#606162] text-md md:text-lg max-w-2xl mx-auto leading-tighter mt-3`}
                >
                  We turn complex ideas into effortless experiences{" "}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    className={`${plusJakarta.className} text-[#ffff] text-sm md:text-lg font-semibold max-w-3xl mx-auto leading-relaxed block`}
                  >
                    unlocking new levels of productivity and insight for your
                    business.
                  </motion.span>
                </motion.p>
              </div>

              {/* === Wavy Stripe === */}
              <div className="absolute bottom-0 left-0 w-full h-screen z-10 animate-Wavy pointer-events-none isolate">
                {mount3D ? (
                  <WavyStripe noPointer />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(16,16,16,0.9) 0%, rgba(10,10,10,0.6) 40%, rgba(5,6,7,0.0) 100%)",
                      maskImage:
                        "linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 95%)",
                      WebkitMaskImage:
                        "linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 95%)",
                    }}
                  />
                )}
              </div>

              {/* Spinner */}
              <div className="absolute max-sm:bottom-70 bottom-8 left-1/2 transform -translate-x-1/2 z-0">
                <Spinner setActiveItem={setActiveItem} />
              </div>

              {/* Background logos */}
              <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <Image
                  src="/images/openai.webp"
                  alt="OpenAI"
                  width={600}
                  height={400}
                  className="absolute top-16 left-8 w-36 opacity-30 blur-[1px] hover:opacity-60 transition duration-500"
                />
                <Image
                  src="/images/make.webp"
                  alt="Zapier"
                  width={600}
                  height={400}
                  className="absolute top-50 right-20 w-20 opacity-30 blur-[1px] hover:opacity-60 transition duration-500"
                />
                <Image
                  src="/images/zapier.webp"
                  alt="Notion AI"
                  width={600}
                  height={400}
                  className="absolute  bottom-10 max-sm:bottom-4  left-1/4 max-sm:left-8 w-24 opacity-30 blur-[1px] hover:opacity-60 transition duration-500"
                />
                <Image
                  src="/images/midjourney.webp"
                  alt="MidJourney"
                  width={600}
                  height={400}
                  className="absolute bottom-2 max-sm:bottom-10 max-sm:right-1 right-28 w-52 opacity-30 blur-[1px] hover:opacity-60 transition duration-500"
                />
                <Image
                  src="/images/n8n.webp"
                  alt="HuggingFace"
                  width={600}
                  height={300}
                  className="absolute top-1/2 left-[45%] w-28 blur-[1px] max-sm:hidden opacity-30 hover:opacity-60 transition duration-500"
                />
              </div>
            </section>

            <section className="relative z-10 w-full isolate">
              <Impact />
            </section>

            <section className="relative z-10 w-full isolate">
              <Whatwedo activeItem={activeItem} setActiveItem={setActiveItem} />
            </section>

            <footer className="mt-auto text-center text-[#ffff] font-medium text-xs py-4 mb-2">
              <p>&copy; 2025 Exerraai. All rights reserved.</p>
            </footer>
          </>
        ) : (
          <div className="relative z-10 pt-[100px] pb-10 flex-grow">
            {renderSectionContent()}
          </div>
        )}
      </main>
    </Layout>
  );
}
