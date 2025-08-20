"use client";

import { useState, memo, useEffect } from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { Satisfy } from "next/font/google";
import { Fascinate } from "next/font/google";
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['800'],
  display: 'swap',
});

const fascinate = Fascinate({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const socials = [
  { name: "facebook", link: "https://facebook.com", icon: () => <FaFacebook /> },
  { name: "github", link: "https://github.com", icon: () => <FaGithub /> },
  { name: "twitter", link: "https://twitter.com", icon: () => <FaTwitter /> },
  { name: "linkedin", link: "https://www.linkedin.com/company/exerra-ai", icon: () => <FaLinkedinIn /> },
];

const navItems = ["Home", "Vision", "Pricing", "Portfolio", "About us"];

// Animation variants for the header
const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.2,
    },
  },
};

// Animation variants for the list items
const ulVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const liVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function HeaderComponent({ activeItem, setActiveItem }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full z-50 px-2 sm:px-4"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="max-w-[1100px] mx-auto h-[72px] mt-5 mb-3 flex justify-between items-center px-4 rounded-2xl bg-[#0b0c0d]/38 backdrop-blur-lg border border-white/10 shadow-sm shadow-white/5 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveItem('Home')}>
          <Link href='/'>
            <span className={`${fascinate.className} font-Satsify text-lg font-bold tracking-wide text-white `}>
              Exerra AI
            </span>
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 text-3xl"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center items-center">
          <motion.ul
            className="flex space-x-2 capitalize"
            variants={ulVariants}
            initial="hidden"
            animate="visible" // Add initial and animate props here
          >
            {navItems.map((item) => (
              <motion.li
                key={item}
                className="px-4 py-3 cursor-pointer font-medium rounded-lg relative overflow-hidden group"
                onClick={() => handleNavItemClick(item)}
                variants={liVariants}
              >
                <span
                  className={`transition-colors duration-200 ${
                    activeItem === item
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                    activeItem === item
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-30"
                  }`}
                ></span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Desktop Socials & Button */}
        <div className="hidden md:flex items-center gap-3">
          <motion.div
            className="flex items-center gap-2"
            variants={ulVariants}
            initial="hidden"
            animate="visible"
          >
            {socials.map(({ name, link, icon: Icon }) => (
              <motion.a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-[#b0b0b0] bg-white/10 hover:bg-white/20 rounded-lg transition"
                variants={liVariants}
              >
                <Icon />
              </motion.a>
            ))}
            <motion.div variants={liVariants}>
              <Link href='/Free-audit'>
                <button className="px-3 py-2 text-sm rounded-full font-bold text-black bg-white/80 hover:bg-white/60 transition duration-300 ease-in-out shadow-lg whitespace-nowrap">
                  Free Audit
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center">
          <button
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 text-gray-300 text-4xl p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            aria-label="Close navigation menu"
          >
            <FaTimes />
          </button>

          <motion.ul
            className="flex flex-col space-y-8 text-center text-white text-3xl font-bold capitalize"
            variants={ulVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.li key={item} variants={liVariants}>
                <button
                  onClick={() => handleNavItemClick(item)}
                  className={`${plusJakarta.className} block py-2 w-full ${
                    activeItem === item ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}
    </motion.div>
  );
}

export default memo(HeaderComponent);