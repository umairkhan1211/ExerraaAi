import React from 'react';
import { InlineWidget } from 'react-calendly';
import Link from 'next/link';
import { Fascinate } from "next/font/google";

const fascinate = Fascinate({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function SchedulePage() {
  // Get current date info
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Calendly expects 2-digit month
  const day = String(today.getDate()).padStart(2, "0");

  // Get the Monday of the current week (Calendly expects week start)
  const monday = new Date(today);
  monday.setDate(today.getDate() - today.getDay() + 1); // Monday = 1
  const weekYear = monday.getFullYear();
  const weekMonth = String(monday.getMonth() + 1).padStart(2, "0");
  const weekDay = String(monday.getDate()).padStart(2, "0");

  // Build dynamic Calendly link
  const calendlyUrl = `https://calendly.com/exerra-ai/30min?back=1&month=${year}-${month}&week=${weekYear}-${weekMonth}-${weekDay}`;

  return (
    <div className="bg-[#0b0c0d] min-h-screen text-white flex flex-col items-center justify-start p-4">
      <nav className="w-full max-w-4xl flex justify-between items-center py-6">
        <Link href='/' className={`${fascinate.className} font-Satsify text-2xl font-bold tracking-wide text-white`}>
          Exerra AI
        </Link>
      </nav>

      <div className="w-full max-w-4xl text-center mt-10 mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Free Potential Analysis
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Schedule your no-obligation potential analysis down below, so that we analyse your business and give you an individual success blueprint for free.
        </p>
      </div>

  <div className="w-full max-w-4xl rounded-lg shadow-xl overflow-hidden my-8 calendly-container">
  <InlineWidget
    url={calendlyUrl}
    styles={{ height: '700px', width: '100%' }}
  />
</div>

<style jsx global>{`
  /* Parent container */
  .calendly-container {
    overflow: hidden !important;
    max-width: 100% !important;
  }

  /* Calendly iframe */
  .calendly-container iframe {
    overflow: hidden !important;
    overflow-x: hidden !important; /* Hide horizontal scrollbar */
    overflow-y: auto !important;   /* Keep vertical scroll */
    max-width: 100% !important;    /* Prevent horizontal overflow */
    border: none !important;       /* Remove any default borders */
    scrollbar-width: none !important; /* Hide vertical scrollbar in Firefox */
    -ms-overflow-style: none !important; /* Hide in IE/Edge */
  }

  /* Hide scrollbars in WebKit browsers (Chrome, Safari) */
  .calendly-container iframe::-webkit-scrollbar {
    display: none !important;
  }
`}</style>


    </div>
  );
}
