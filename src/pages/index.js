import Head from "next/head";
import dynamic from "next/dynamic";
import React, { useState, useCallback, useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const Vision = dynamic(() => import("../components/sections/Vision"));
const Pricing = dynamic(() => import("../components/sections/Pricing"));
const AboutUs = dynamic(() => import("../components/sections/AboutUs"));
const Portfolio = dynamic(() => import("../components/sections/Portfolio"));
const Impact = dynamic(() => import("../components/Impact/Impact"), {
  ssr: false,
});
const Whatwedo = dynamic(() => import("../components/Whatwedo/Whatwedo"), {
  ssr: false,
});

import Layout from "../components/layouts/Layout";
import Header from "../components/layouts/Header";

import { Fascinate } from "next/font/google";
import Link from "next/link";
const fascinate = Fascinate({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const WavyStripe = dynamic(() => import("../components/WavyStripe"), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-[#050607]" />,
});

export default function Home() {
  const [activeItem, setActiveItem] = useState("Home");
  const [mount3D, setMount3D] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mqSmall = window.matchMedia("(max-width: 768px)");

    // Increased delay for mobile to give text time to render
    const t = setTimeout(() => setMount3D(true), mqSmall.matches ? 200 : 100);

    return () => clearTimeout(t);
  }, []);

  const memoizedSetActiveItem = useCallback((item) => {
    setActiveItem(item);
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
    <Layout>
      <Head>
        <title>Exerra AI</title>
      </Head>

      <main className="flex flex-col min-h-screen w-full bg-[#050607] overflow-x-hidden overflow-y-hidden">
        <Header activeItem={activeItem} setActiveItem={memoizedSetActiveItem} />

        {activeItem === "Home" ? (
          <>
            <section
              className="relative flex flex-col items-center justify-between w-full px-4"
              style={{ minHeight: "calc(100vh - var(--header-height, 4vh))" }}
            >
              <div className="relative z-20 text-center w-full pt-16 max-sm:pt-72 md:pt-38">
                <h1
                  className={`${fascinate.className} animate-text text-7xl max-sm:text-6xl max-md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#050607] via-[#101010] to-[#202122] drop-shadow-lg text-outline-white`}
                >
                  Exerra.AI
                </h1>

                <p
                  className={`${plusJakarta.className} text-[#606162] text-md md:text-lg max-w-3xl mx-auto leading-tighter animate-text mt-3`}
                >
                  We turn complex ideas into effortless experiences –
                  <span
                    className={`${plusJakarta.className} text-[#ffff] text-sm md:text-lg font-semibold max-w-3xl mx-auto leading-relaxed`}
                  >
                    unlocking new levels of productivity and insight for your
                    business.
                  </span>
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-screen z-10 animate-Wavy">
                {mount3D ? (
                  <WavyStripe />
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
            </section>

            <section className="relative z-10 w-full">
              <Impact />
            </section>

            <section className="relative z-10 w-full">
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
