"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { Fascinate } from "next/font/google";
import Layout from "../components/layouts/Layout";

const fascinate = Fascinate({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function SchedulePage() {
  // Scroll to top when this page loads
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Get current date info
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  // Get the Monday of the current week
  const monday = new Date(today);
  monday.setDate(today.getDate() - today.getDay() + 1);
  const weekYear = monday.getFullYear();
  const weekMonth = String(monday.getMonth() + 1).padStart(2, "0");
  const weekDay = String(monday.getDate()).padStart(2, "0");

  const calendlyUrl = `https://calendly.com/exerraai-info/30min?back=1&month=${year}-${month}&week=${weekYear}-${weekMonth}-${weekDay}`;

  return (
    <Layout activeItem={null} setActiveItem={() => {}}>

    <div className="bg-[#0b0c0d] min-h-screen text-white flex flex-col items-center justify-start p-4 ">


      {/* Intro Text */}
      <div className="w-full max-w-4xl text-center mt-32 mb-3">
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Schedule your{" "}
          <span className="text-[#DCEA22] font-semibold">
            no obligation free audit
          </span>{" "}
          down below, so that we analyse your business and give you an{" "}
          <span className="text-[#DCEA22] font-semibold">
            individual success blueprint
          </span>{" "}
          for free!
        </p>
      </div>

      {/* Calendly Widget */}
      <div className="w-full max-w-4xl rounded-lg shadow-xl overflow-hidden my-8 calendly-container">
        <InlineWidget
          url={calendlyUrl}
          styles={{ height: "700px", width: "100%" }}
        />
      </div>

      <style jsx global>{`
        .calendly-container {
          overflow: hidden !important;
          max-width: 100% !important;
        }
        .calendly-container iframe {
          overflow: hidden !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
          max-width: 100% !important;
          border: none !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
          }
        .calendly-container iframe::-webkit-scrollbar {
          display: none !important;
        }
      `}</style>
    </div>
        </Layout>
  );
}
