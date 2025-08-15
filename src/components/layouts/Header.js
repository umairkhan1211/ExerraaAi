"use client";

import { useState, memo, useEffect } from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { Satisfy } from "next/font/google";
import { Fascinate } from "next/font/google";
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from "next/link";



const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['800'], // load the 800 weight you need
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

const navItems = ["Home", "Vision", "Pricing","Portfolio" ,"About us"];

function HeaderComponent({ activeItem, setActiveItem }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false);
  };

  // Function to close the mobile menu
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
    <div className="fixed top-0 left-0 w-full z-50 px-2 sm:px-4">
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
          <ul className="flex space-x-2 capitalize">
            {navItems.map((item) => (
              <li
                key={item}
                className="px-4 py-3 cursor-pointer font-medium rounded-lg relative overflow-hidden group"
                onClick={() => handleNavItemClick(item)}
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
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2">
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
          <Link href='/Free-audit'>
            <button className="px-3 py-2 text-sm rounded-full font-bold text-black bg-white/80 hover:bg-white/60 transition duration-300 ease-in-out shadow-lg whitespace-nowrap">
             Free Audit
            </button>
          </Link>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center">
          {/* Close button for mobile menu */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 text-gray-300 text-4xl p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            aria-label="Close navigation menu"
          >
            <FaTimes />
          </button>

          <ul className="flex flex-col space-y-8 text-center text-white text-3xl font-bold capitalize">
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

            {/* Socials (Mobile) */}
            <div className="flex justify-center space-x-6 mt-8">
              {socials.map(({ name, link, icon: Icon }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#b0b0b0] text-4xl"
                >
                  <Icon />
                </a>
              ))}
              
            </div>
                <Link href='/Free-audit'>
            <button className=" px-12 py-4 mt-4 text-sm rounded-full font-bold text-black bg-white/80 hover:bg-white/60 transition duration-300 ease-in-out shadow-lg whitespace-nowrap">
             Free Audit
            </button>
          </Link>
          </ul>
          

        </div>
      )}


      
    </div>
  );
}

export default memo(HeaderComponent);
