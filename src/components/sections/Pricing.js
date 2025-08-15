import React from "react";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaHandshake,
  FaRobot,
} from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5"; // For lead generation icon
import { BsBoxes } from "react-icons/bs"; // For CRM sync icon
import { MdOutlineHandshake } from "react-icons/md"; // For Client Onboarding
import { MdNotificationsActive } from "react-icons/md"; // For Internal Notifications
import Link from "next/link";



export default function Pricing() {
  return (
    // Outer container for the entire pricing page
    <div className="bg-[#050607] min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {" "}
        {/* Max-width for consistent content alignment */}
        {/* 1. Website Service Plans Section */}
        <div className="mb-20">
          {" "}
          {/* Added mb-20 for section spacing */}
          {/* Header for Website Service Plans */}
          <div className="text-left mb-12 flex items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Website Service Plans
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-400 mb-12">
            {" "}
            {/* Added mb-12 for spacing before cards */}
            Want a clean, modern website that converts? Our dev team builds
            fast, responsive, and SEO-optimized websites tailored to your goals.
          </p>
          {/* Three Website Pricing Cards Container (1-Page, 3-Page, 5-Page) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* 1-Page Website Card */}
            <div className="bg-[#101010] p-8 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-300 mb-2">
                  1 Page Website
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Perfect for personal brands, landing pages, or service
                  highlights. Includes a hero section, about, contact form, and
                  call-to-action. Fast delivery and mobile-optimized.
                </p>
                <ul className="mt-4 space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Single Page Design</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Hero, About, Contact</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Mobile Optimized</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Fast Delivery</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Basic SEO Setup</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-4xl font-bold text-white mb-2">
                  247 <span className="text-gray-400 text-2xl">USD</span>
                </p>
                <p className="text-gray-500 mb-6">one-time payment</p>
                <Link href='/Free-audit'>
                <button className="w-full bg-[#DCEA22] text-[#050607] font-bold py-3 rounded-lg hover:bg-[#DCEA22]/90 transition-colors duration-200">
                  Get started
                </button>
                </Link>
              </div>
            </div>

            {/* 3-Page Website Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between text-gray-900">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-700 mb-2">
                  3 Page Website
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Ideal for small businesses. Includes Home, Services, and
                  Contact pages. Fully customized with responsive design and
                  basic SEO setup.
                </p>
                <ul className="mt-4 space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Up to 3 Pages (Home, Services, Contact)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Fully Customized Design</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Responsive on All Devices</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Basic SEO & Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Fast Deployment</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  397 <span className="text-gray-500 text-2xl">USD</span>
                </p>
                <p className="text-gray-600 mb-6">one-time payment</p>
                       <Link href='/Free-audit'>
                <button className="w-full bg-[#DCEA22] text-[#050607] font-bold py-3 rounded-lg hover:bg-[#DCEA22]/90 transition-colors duration-200">
                  Choose Plan
                </button>
                </Link>
              </div>
            </div>

            {/* 5-Page Website Card */}
            <div className="bg-[#101010] p-8 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-300 mb-2">
                  5 Page Website
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Best for growing brands. Includes Home, Services, About Us,
                  Portfolio/Case Studies, and Contact pages. Premium visuals,
                  content assistance, and full responsiveness included.
                </p>
                <ul className="mt-4 space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Up to 5 Pages (Custom Content)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Premium Visuals & UI/UX</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Content Assistance</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Advanced SEO Integration</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Scalable Architecture</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-4xl font-bold text-white mb-2">
                  497 <span className="text-gray-400 text-2xl">USD</span>
                </p>
                <p className="text-gray-500 mb-6">one-time payment</p>
                       <Link href='/Free-audit'>
                <button className="w-full bg-[#DCEA22] text-[#050607] font-bold py-3 rounded-lg hover:bg-[#DCEA22]/90 transition-colors duration-200">
                  Scale Up
                </button>
                </Link>
              </div>
            </div>
          </div>
          {/* 4th Card: Custom Design Card (placed below the 3 cards) */}
          <div className="bg-[#101010] p-8 rounded-2xl shadow-lg flex flex-col">
            {" "}
            {/* Removed mb-12 as next section will add space */}
            <h2 className="text-2xl font-extrabold text-gray-300 mb-2">
              Custom Design
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Need something unique? From complex web applications to custom
              features, we&apos;ll craft a bespoke solution tailored exactly to your
              vision. Unlimited pages and features, according to your needs.
            </p>
            <ul className="mt-4 space-y-3 text-gray-400 flex-grow">
              <li className="flex items-start">
                <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                <span>Tailored to your specific requirements</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                <span>Scalable architecture</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                <span>Dedicated project manager</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                <span>Full-cycle development and support</span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-700">
                     <Link href='/Free-audit'>
              <button className="w-full bg-[#DCEA22] text-[#050607] font-bold py-3 rounded-lg hover:bg-[#DCEA22]/90 transition-colors duration-200">
                Get a Quote
              </button>
                     </Link>
            </div>
          </div>
        </div>{" "}
        {/* End of Website Service Plans Section */}
        {/* 2. B2B Appointment Setting Section */}
        <div className="mb-20">
          {" "}
          {/* Added mb-20 for section spacing */}
          {/* Header for B2B Appointment Setting */}
          <div className="text-left mb-12 flex items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              B2B - B2C Bussiness Development Services
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-400 mb-12">
            {" "}
            {/* Added mb-12 for spacing before cards */}
            Let us fill your calendar with qualified prospects. Our appointment
            setting system is designed for consistent lead flow with guaranteed
            volume.
          </p>
          {/* Three B2B Pricing Cards Container (LinkedIn Only, LinkedIn + Email, Mass Outreach) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* LinkedIn Outreach Only Card */}
            <div className="bg-[#101010] p-8 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-300 mb-2">
                  LinkedIn Outreach Only
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  We build a laser-targeted list and run personalized connection
                  + DM campaigns to get replies and book calls. Ideal for niche
                  B2B services.
                </p>
                <ul className="mt-4 space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Targeted LinkedIn List</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Personalized Connection Requests</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Direct Message Campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Reply Management</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Weekly Performance Reports</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-4xl font-bold text-white mb-2">
                  797 <span className="text-gray-400 text-2xl">USD</span>
                </p>
                <p className="text-gray-500 mb-6">per month</p>
                       <Link href='/Free-audit'>
                <button className="w-full bg-[#DCEA22] text-[#050607] font-bold py-3 rounded-lg hover:bg-[#DCEA22]/90 transition-colors duration-200">
                  Learn More
                </button>
                       </Link>
              </div>
            </div>

            {/* LinkedIn + Email Campaign Card (Highlighted as white card) */}
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between text-gray-900">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-700 mb-2">
                  LinkedIn + Email Campaign
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Double the channels, double the touchpoints. We run a synced
                  outreach campaign across LinkedIn and Email with custom
                  sequences, warming strategies, and replies handled.
                </p>
                <ul className="mt-4 space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>LinkedIn + Email Sync</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Custom Email Sequences</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Lead Warming Strategies</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Full Reply Handling</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Dedicated Account Manager</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  1 597 <span className="text-gray-500 text-2xl">USD</span>
                </p>
                <p className="text-gray-600 mb-6">per month</p>
                       <Link href='/Free-audit'>
                <button className="w-full bg-[#DCEA22] text-[#050607] font-bold py-3 rounded-lg hover:bg-[#DCEA22]/90 transition-colors duration-200">
                  Get Started
                </button>
                       </Link>
              </div>
            </div>

            {/* Mass Outreach Campaign Card */}
            <div className="bg-[#101010] p-8 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-300 mb-2">
                  Mass Outreach Campaign
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Want scale? This is for you. Includes LinkedIn + Email
                  outreach + verified lead scraping + inbox rotation + CRM
                  integration + reply handling. Suited for aggressive growth
                  targets.
                </p>
                <ul className="mt-4 space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>LinkedIn + Email + Cold Calling (Optional)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Verified Lead Scraping</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Inbox Rotation & Management</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>CRM Integration</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                    <span>Aggressive Growth Targets</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-4xl font-bold text-white mb-2">
                  1 997 <span className="text-gray-400 text-2xl">USD</span>
                </p>
                <p className="text-gray-500 mb-6">per month</p>
                       <Link href='/Free-audit'>
                <button className="w-full bg-[#DCEA22] text-[#050607] font-bold py-3 rounded-lg hover:bg-[#DCEA22]/90 transition-colors duration-200">
                  Scale Your Growth
                </button>
                       </Link>
              </div>
            </div>
          </div>{" "}
          {/* End of three-card grid */}
          {/* 4th B2B Card: Custom B2B Solution (placed below the 3 B2B cards) */}
          <div className="bg-[#101010] p-8 rounded-2xl shadow-lg flex flex-col">
            {" "}
            {/* Removed mb-12 as next section will add space */}
            <h2 className="text-2xl font-extrabold text-gray-300 mb-2">
              Custom B2B Solution
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              For enterprises or highly specialized needs. We build fully
              custom, end-to-end B2B sales automation pipelines, integrating
              with your existing tech stack.
            </p>
            <ul className="mt-4 space-y-3 text-gray-400 flex-grow">
              <li className="flex items-start">
                <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                <span>Tailored multi-channel strategies</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                <span>Advanced data enrichment & lead scoring</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                <span>Dedicated sales automation specialist</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
                <span>Ongoing optimization & A/B testing</span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-700">
                     <Link href='/Free-audit'>
              <button className="w-full bg-[#DCEA22] text-[#050607] font-bold py-3 rounded-lg hover:bg-[#DCEA22]/90 transition-colors duration-200">
                Get a Custom Quote
              </button>
                     </Link>
            </div>
          </div>
        </div>{" "}
        {/* End of B2B Appointment Setting Section */}
        {/* 3. Automation Systems Section */}
        <div className="mb-20">
          {/* Title */}
          <div className="text-left mb-12 flex items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Automation Systems
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-gray-400 mb-12">
            Built-for-you backend systems that remove the busywork and scale
            with you.
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <AutomationFeatureCard
              icon={<IoShareSocial className="text-[#DCEA22] text-4xl mb-3" />}
              title="Lead Generation Automation"
              description="Scrape, filter, qualify, and deliver leads into your CRM or spreadsheet—fully automated and tailored to your ICP."
            />
            <AutomationFeatureCard
              icon={<BsBoxes className="text-[#DCEA22] text-4xl mb-3" />}
              title="CRM Sync & Lead Routing"
              description="Automatically assign leads to the right team member, update statuses, and trigger next steps in real time."
            />
            <AutomationFeatureCard
              icon={
                <MdOutlineHandshake className="text-[#DCEA22] text-4xl mb-3" />
              }
              title="Client Onboarding"
              description="Send welcome emails, create internal tasks, and alert your team the second a client signs up."
            />
            <AutomationFeatureCard
              icon={
                <MdNotificationsActive className="text-[#DCEA22] text-4xl mb-3" />
              }
              title="Internal Notifications & Reminders"
              description="Real-time Slack or email alerts when key events happen—so your team stays on top of everything."
            />
          </div>
        </div>
        
        {/* Custom-Built Automations Section (Remains the same as a distinct section) */}
        <div className="bg-[#101010] p-8 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-extrabold text-gray-300 mb-4">
            Custom-Built Automations
          </h2>
          <p className="text-gray-500 mb-6">
            Tailored to Your Business – We don’t use templates—every system is
            built from scratch for your needs.
          </p>
          <ul className="space-y-3 text-gray-400 max-w-2xl mx-auto list-disc list-inside mb-8">
            <li>Automate complex tasks or unique internal processes.</li>
            <li>Connect and sync niche tools or platforms.</li>
            <li>Get a fully custom solution designed to fit your workflow.</li>
            <li>We handle everything: design, build, and launch.</li>
            <li>Built for scalability, reliability, and long-term use.</li>
          </ul>
          <Link
            href='/Free-audit' // Replace with your actual consultation/contact link
            className="inline-block bg-[#DCEA22] hover:bg-[#DCEA22]/90 text-[#050607] font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>{" "}
      {/* End of max-w-4xl container */}
    </div>
  );
}

// --- Reusable AutomationFeatureCard Component ---
// This is used for the Automation Systems section, providing a consistent look for smaller feature boxes.
const AutomationFeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col bg-[#0b0c0f] text-white rounded-2xl p-6 h-full shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm flex-grow">{description}</p>
    </div>
  );
};


