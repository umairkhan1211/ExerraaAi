import React from "react";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaHandshake,
  FaRobot,
} from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { BsBoxes } from "react-icons/bs";
import { MdOutlineHandshake, MdNotificationsActive } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

/* ---------- Variants ---------- */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* Shared hover transition for cards */
const hoverTransition = { type: "spring", stiffness: 220, damping: 18 };

/* ---------- Pricing Card ---------- */
const PricingCard = ({
  title,
  description,
  features,
  price,
  period,
  buttonText,
  isHighlighted = false,
}) => {
  const cardClassName = `
    group relative p-8 rounded-2xl shadow-lg flex flex-col justify-between
    ${isHighlighted ? "bg-white text-gray-900" : "bg-[#101010] text-white"}
    border ${isHighlighted ? "border-gray-200" : "border-white/10"}
    ring-0 hover:ring-2 ${isHighlighted ? "hover:ring-[#DCEA22]/60" : "hover:ring-[#DCEA22]/40"}
    transition-shadow
  `;

  const priceColor   = isHighlighted ? "text-gray-900" : "text-white";
  const textColor    = isHighlighted ? "text-gray-600" : "text-gray-500";
  const titleColor   = isHighlighted ? "text-gray-700" : "text-gray-300";
  const featureColor = isHighlighted ? "text-gray-700" : "text-gray-400";
  const borderColor  = isHighlighted ? "border-gray-200" : "border-gray-700";

  return (
    <motion.div
      className={cardClassName}
      variants={itemVariants}
      whileHover={{ scale: 1.035, y: -6, boxShadow: "0 22px 60px rgba(0,0,0,0.35)" }}
      whileTap={{ scale: 0.995 }}
      transition={hoverTransition}
      tabIndex={0}
    >
      {/* subtle spotlight on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
                   bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(220,234,34,0.08),transparent_45%)]"
      />
      <div
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
          e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
        }}
      >
        <h2 className={`text-2xl font-extrabold mb-2 ${titleColor}`}>{title}</h2>
        <p className={`text-sm mb-4 ${textColor}`}>{description}</p>
        <ul className={`mt-4 space-y-3 ${featureColor}`}>
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <FaCheckCircle className="text-[#DCEA22] mr-2 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`mt-8 pt-6 border-t ${borderColor}`}>
        <p className={`text-4xl font-bold mb-2 ${priceColor}`}>
          {price} <span className="text-2xl">USD</span>
        </p>
        <p className={`${textColor} mb-6`}>{period}</p>
        <Link href="/Free-audit">
          <button className="w-full bg-[#DCEA22] text-[#050607] font-bold py-3 rounded-lg
                             hover:bg-[#DCEA22]/90 transition-colors duration-200">
            {buttonText}
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

/* ---------- Automation Feature Card ---------- */
const AutomationFeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="group flex flex-col bg-[#0b0c0f] text-white rounded-2xl p-6 h-full shadow-md border border-white/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.995 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm flex-grow">{description}</p>
      <span
        aria-hidden
        className="pointer-events-none mt-4 block h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </motion.div>
  );
};

/* ---------- Page ---------- */
export default function Pricing() {
  return (
    <div className="bg-[#050607] min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 1. Website Service Plans */}
        <div className="mb-20">
          <div className="text-left mb-12 flex items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Website Service Plans
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-400 mb-12">
            Want a clean, modern website that converts? Our dev team builds
            fast, responsive, and SEO-optimized websites tailored to your goals.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <PricingCard
              title="1 Page Website"
              description="Perfect for personal brands, landing pages, or service highlights. Includes a hero section, about, contact form, and call-to-action. Fast delivery and mobile-optimized."
              features={[
                "Single Page Design",
                "Hero, About, Contact",
                "Mobile Optimized",
                "Fast Delivery",
                "Basic SEO Setup",
              ]}
              price="247"
              period="one-time payment"
              buttonText="Get started"
            />
            <PricingCard
              title="3 Page Website"
              description="Ideal for small businesses. Includes Home, Services, and Contact pages. Fully customized with responsive design and basic SEO setup."
              features={[
                "Up to 3 Pages (Home, Services, Contact)",
                "Fully Customized Design",
                "Responsive on All Devices",
                "Basic SEO & Analytics",
                "Fast Deployment",
              ]}
              price="397"
              period="one-time payment"
              buttonText="Choose Plan"
              isHighlighted
            />
            <PricingCard
              title="5 Page Website"
              description="Best for growing brands. Includes Home, Services, About Us, Portfolio/Case Studies, and Contact pages. Premium visuals, content assistance, and full responsiveness included."
              features={[
                "Up to 5 Pages (Custom Content)",
                "Premium Visuals & UI/UX",
                "Content Assistance",
                "Advanced SEO Integration",
                "Scalable Architecture",
              ]}
              price="497"
              period="one-time payment"
              buttonText="Scale Up"
            />
          </motion.div>

          {/* Custom Design (also hover-scale) */}
          <motion.div
            className="bg-[#101010] p-8 rounded-2xl shadow-lg flex flex-col border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.995 }}
          >
            <h2 className="text-2xl font-extrabold text-gray-300 mb-2">Custom Design</h2>
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
              <Link href="/Free-audit">
                <button className="w-full bg-[#DCEA22] text-[#050607] font-bold py-3 rounded-lg hover:bg-[#DCEA22]/90 transition-colors duration-200">
                  Get a Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 2. B2B Section */}
        <div className="mb-20">
          <div className="text-left mb-12 flex items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              B2B - B2C Business Development Services
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-400 mb-12">
            Let us fill your calendar with qualified prospects. Our appointment
            setting system is designed for consistent lead flow with guaranteed
            volume.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <PricingCard
              title="LinkedIn Outreach Only"
              description="We build a laser-targeted list and run personalized connection + DM campaigns to get replies and book calls. Ideal for niche B2B services."
              features={[
                "Targeted LinkedIn List",
                "Personalized Connection Requests",
                "Direct Message Campaigns",
                "Reply Management",
                "Weekly Performance Reports",
              ]}
              price="797"
              period="per month"
              buttonText="Learn More"
            />
            <PricingCard
              title="LinkedIn + Email Campaign"
              description="Double the channels, double the touchpoints. We run a synced outreach campaign across LinkedIn and Email with custom sequences, warming strategies, and replies handled."
              features={[
                "LinkedIn + Email Sync",
                "Custom Email Sequences",
                "Lead Warming Strategies",
                "Full Reply Handling",
                "Dedicated Account Manager",
              ]}
              price="1 597"
              period="per month"
              buttonText="Get Started"
              isHighlighted
            />
            <PricingCard
              title="Mass Outreach Campaign"
              description="Want scale? This is for you. Includes LinkedIn + Email outreach + verified lead scraping + inbox rotation + CRM integration + reply handling. Suited for aggressive growth targets."
              features={[
                "LinkedIn + Email + Cold Calling (Optional)",
                "Verified Lead Scraping",
                "Inbox Rotation & Management",
                "CRM Integration",
                "Aggressive Growth Targets",
              ]}
              price="1 997"
              period="per month"
              buttonText="Scale Your Growth"
            />
          </motion.div>

          {/* Custom B2B Solution (also hover-scale) */}
          <motion.div
            className="bg-[#101010] p-8 rounded-2xl shadow-lg flex flex-col border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.995 }}
          >
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
              <Link href="/Free-audit">
                <button className="w-full bg-[#DCEA22] text-[#050607] font-bold py-3 rounded-lg hover:bg-[#DCEA22]/90 transition-colors duration-200">
                  Get a Custom Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 3. Automation Systems */}
        <div className="mb-20">
          <div className="text-left mb-12 flex items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Automation Systems
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-400 mb-12">
            Built-for-you backend systems that remove the busywork and scale
            with you.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
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
              icon={<MdOutlineHandshake className="text-[#DCEA22] text-4xl mb-3" />}
              title="Client Onboarding"
              description="Send welcome emails, create internal tasks, and alert your team the second a client signs up."
            />
            <AutomationFeatureCard
              icon={<MdNotificationsActive className="text-[#DCEA22] text-4xl mb-3" />}
              title="Internal Notifications & Reminders"
              description="Real-time Slack or email alerts when key events happen—so your team stays on top of everything."
            />
          </motion.div>
        </div>

        {/* Custom-Built Automations CTA */}
        <motion.div
          className="bg-[#101010] p-8 rounded-2xl shadow-lg text-center border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -3 }}
          whileTap={{ scale: 0.995 }}
        >
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
            href="/Free-audit"
            className="inline-block bg-[#DCEA22] hover:bg-[#DCEA22]/90 text-[#050607] font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Get a Custom Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
