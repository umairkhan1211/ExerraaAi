import Link from "next/link";
import React from "react";

export default function Vision() {
  return (
    // Outer container for the entire Vision page content
    // Applying the dark background theme. This will contain both the full-width image and the constrained content.
    <div className="bg-[#050607] min-h-screen text-white py-6 px-4 sm:px-6 lg:px-8">
      {/* Vision Title Section - This section itself is still within the max-w-4xl container */}
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#ffff] leading-tight mb-4">
            Vision
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            At Exerra AI, we believe the future belongs to businesses that move
            fast, stay lean, and make smart decisions—powered by automation and
            AI.
          </p>
          <p className="mt-6 text-base md:text-lg text-gray-400 italic max-w-3xl mx-auto">
            But here&apos;s the truth: Most businesses are drowning in tools,
            systems, and spreadsheets... Wasting hours on tasks that
            should&apos;ve been automated yesterday.
          </p>
        </div>
      </div>{" "}
      {/* End of the max-w-4xl container for the Vision header text */}
      {/* Full-width image section */}
      {/* This div is outside the 'container mx-auto' so it can span the full width of the screen */}
    <div
  className="relative max-w-8xl h-44 md:h-44 lg:h-96 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden"
  style={{
    backgroundImage: "url('/images/gradient-black-background-with-wavy-lines.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  }}
>
  {/* Overlay for fade effect */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent"></div>
</div>

      {/* Rest of the content container - starts below the full-width image */}
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-4xl">
        <p className="text-3xl md:text-4xl font-base mt-30 text-[#ffff] leading-tight">
          Enhance your workflows to maximize performance and take effective
          control of your time. Focus on what truly matters to your business,
          while routine tasks run on autopilot with the help of our no-code and
          code-based solutions.
        </p>
      </div>
      {/* New section with 6 cards, replicating the design from the image */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#050607] p-6 rounded-lg shadow-lg border border-gray-800">
            <div className="text-xl font-bold mb-2 text-gray-400">①</div>
            <h3 className="text-xl font-semibold mb-4 text-[#ffff]">
              Business process automation
            </h3>
            <p className="text-gray-300">
              Let AI handle repetitive tasks and workflows. Improve efficiency,
              minimize errors, and free up time for strategic work, ultimately
              driving cost savings.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#050607] p-6 rounded-lg shadow-lg border border-gray-800">
            <div className="text-xl font-bold mb-2 text-gray-400">②</div>
            <h3 className="text-xl font-semibold mb-4 text-[#ffff]">
              Integrate AI into your company&apos;s data
            </h3>
            <p className="text-gray-300">
              Our AI automation services empower you to leverage data-driven
              automation, generate actionable insights, and use predictive
              analytics to support informed decision-making.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#050607] p-6 rounded-lg shadow-lg border border-gray-800">
            <div className="text-xl font-bold mb-2 text-gray-400">③</div>
            <h3 className="text-xl font-semibold mb-4 text-[#ffff]">
              App development
            </h3>
            <p className="text-gray-300">
              We develop apps that deliver personalized, real-time insights and
              transform user experiences, including AI chatbots, image
              recognition for augmented reality, and predictive analytics for
              top-tier recommendations.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#050607] p-6 rounded-lg shadow-lg border border-gray-800">
            <div className="text-xl font-bold mb-2 text-gray-400">④</div>
            <h3 className="text-xl font-semibold mb-4 text-[#ffff]">
              AI automation consulting
            </h3>
            <p className="text-gray-300">
              Looking to find the best solution for your needs? We offer
              tailored solutions to provide custom solutions that align with
              your specific processes and industry requirements.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#050607] p-6 rounded-lg shadow-lg border border-gray-800">
            <div className="text-xl font-bold mb-2 text-gray-400">⑤</div>
            <h3 className="text-xl font-semibold mb-4 text-[#ffff]">
              Generative AI integration
            </h3>
            <p className="text-gray-300">
              No more wasting hours on content creation – whether it&apos;s
              copy, images, videos, or voiceovers. We streamline the process,
              enabling you to produce content up to 27x faster.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#050607] p-6 rounded-lg shadow-lg border border-gray-800">
            <div className="text-xl font-bold mb-2 text-gray-400">⑥</div>
            <h3 className="text-xl font-semibold mb-4 text-[#ffff]">
              Ongoing Maintenance and Support
            </h3>
            <p className="text-gray-300">
              We don&apos;t stop at project delivery. As your partners, we
              provide continuous improvements, scalability options, and ongoing
              support to ensure your project grows alongside your business.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">

      <Link
        href="/Free-audit" // Replace with your actual consultation/contact link
        className="inline-block bg-[#DCEA22] hover:bg-[#DCEA22]/90 text-[#050607] font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
        Get a Custom Quote
      </Link>
        </div>
    </div>
  );
}
