"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, memo } from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Fascinate } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const fascinate = Fascinate({ subsets: ["latin"], weight: "400" });

const socials = [
  { name: "facebook", link: "https://facebook.com", icon: () => <FaFacebook /> },
  { name: "github", link: "https://github.com", icon: () => <FaGithub /> },
  { name: "twitter", link: "https://twitter.com", icon: () => <FaTwitter /> },
  { name: "linkedin", link: "https://www.linkedin.com/company/exerra-ai", icon: () => <FaLinkedinIn /> },
];

const navItems = ["Home", "Vision", "Pricing", "Portfolio", "About us"];

function HeaderComponent({ activeItem, setActiveItem }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isFreeAuditPage = pathname?.toLowerCase().replace(/\/$/, "") === "/free-audit";

const handleNavItemClick = (item) => {
  if (isFreeAuditPage) {
    if (item === "Home") {
      router.push("/"); // direct home page (no query)
    } else {
      router.push(`/?section=${encodeURIComponent(item)}`); // section query
    }
  } else {
    if (item === "Home") {
      router.push("/"); 
      setActiveItem?.("Home");
    } else {
      router.push(`/?section=${encodeURIComponent(item)}`);
      setActiveItem?.(item);
    }
  }
  setIsMobileMenuOpen(false);
};

  return (
    <motion.div className="fixed top-0 left-0 w-full z-50 px-2 sm:px-4">
      <div
        className={`max-w-[1100px] mx-auto h-[72px] mt-5 mb-3 flex items-center px-4 
        rounded-2xl bg-[#0b0c0d]/38 backdrop-blur-lg border border-white/10 
        shadow-sm shadow-white/5 transition-all duration-300
        ${isFreeAuditPage ? "justify-start gap-2" : "justify-between"}`}
      >
        {/* Logo */}
        <Link href="/" onClick={() => setActiveItem?.("Home")}>
          <span
            className={`${fascinate.className} text-lg font-bold tracking-wide text-white`}
          >
            Exerra AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center ${isFreeAuditPage ? "ml-44" : ""}`}>
          <ul className="flex space-x-2 capitalize">
            {navItems.map((item) => (
              <li
                key={item}
                className="px-4 py-3 cursor-pointer font-medium rounded-lg relative overflow-hidden group"
                onClick={() => handleNavItemClick(item)}
              >
                <span
                  className={`transition-colors duration-200 ${
                    activeItem === item ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                    activeItem === item ? "opacity-100" : "opacity-0 group-hover:opacity-30"
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Hamburger Menu (only mobile) */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-300 text-3xl"
            aria-label="Open navigation menu"
          >
            <FaBars />
          </button>
        </div>

        {/* ✅ Desktop Socials (hide on Free-audit) */}
        {!isFreeAuditPage && (
          <div className="hidden md:flex items-center gap-3">
            {socials.map(({ name, link, icon: Icon }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-[#b0b0b0] bg-white/10 hover:bg-white/20 rounded-lg transition"
              >
                <Icon />
              </a>
            ))}
            <Link href="/Free-audit">
              <button className="px-3 py-2 text-sm rounded-full font-bold text-black bg-white/80 hover:bg-white/60">
                Free Audit
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* ✅ Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex flex-col">
          {/* Cross button top-right */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 text-4xl"
              aria-label="Close navigation menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Nav items */}
          <ul className="flex flex-col flex-grow justify-center items-center space-y-8 text-center text-white text-3xl font-bold capitalize">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavItemClick(item)}
                  className={`${plusJakarta.className} block py-2 w-full ${
                    activeItem === item ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}

            {/* ✅ Hide socials & Free Audit on Free-audit */}
            {!isFreeAuditPage && (
              <li className="flex flex-col items-center gap-6 mt-8">
                <div className="flex gap-4">
                  {socials.map(({ name, link, icon: Icon }) => (
                    <a
                      key={name}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-white hover:text-[#b0b0b0] bg-white/10 hover:bg-white/20 rounded-lg transition"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
                <Link href="/Free-audit">
                  <button className="px-4 py-2 text-lg rounded-full font-bold text-black bg-white/80 hover:bg-white/60">
                    Free Audit
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default memo(HeaderComponent);
