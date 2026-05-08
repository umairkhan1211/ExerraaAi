import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Import social icons

export default function Footer() {
  return (
    // The main footer container.
    // 'bg-transparent' for the background to show through.
    // 'relative z-20' to ensure it sits above the main content and wavy stripe.
    // 'pt-16 pb-8' for vertical padding.
    // 'text-gray-800' for default text color, adjust as needed.
    <footer className="relative z-20 bg-transparent pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Branding and Slogan */}
        {/* <div className="mb-10">
          <h2 className="text-4xl font-bold text-blue-800 mb-2">Exerra.AI</h2>
          <p className="text-blue-700 text-lg">
            Innovating for an Effortless Future.
          </p>
        </div> */}

        {/* Navigation / Quick Links (Optional, if you want to repeat main nav or add more) */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/vision" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Our Vision</Link></li>
              <li><Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Pricing Plans</Link></li>
              <li><Link href="/about-us" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About Us</Link></li>
         
            </ul>
          </div> */}

          {/* Contact Information / Support */}
          {/* <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">FAQ</Link></li>
              <li><Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Privacy Policy</Link></li>
              Potentially add phone/email if desired
            </ul>
          </div> */}

          {/* Premium Deal / Call to Action */}
          {/* <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Ready to Transform?</h3>
            <p className="text-gray-700 mb-4">
              Unlock exclusive features and advanced AI capabilities with our premium plans.
            </p>
            <button */}
              {/* // Assuming you have a modal or a dedicated page for "Join Now"
              // You might need to pass a prop from Layout or use a global state/context for the modal
              // For now, it could link to a contact page or trigger a simple alert.
              onClick={() => alert('Premium features coming soon! Contact us for details.')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            > */}
              {/* Explore Premium
            </button>
          </div>
        </div> */}

        {/* Social Media Links */}
        {/* <div className="flex justify-center space-x-6 mb-10">
          <a href="https://facebook.com/your-exerra-page" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-3xl transition-colors duration-200">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/your-exerra-handle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-3xl transition-colors duration-200">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/company/your-exerra-company" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-3xl transition-colors duration-200">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/your-exerra-repo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-3xl transition-colors duration-200">
            <FaGithub />
          </a>
        </div> */}

        {/* Copyright and Bottom Text */}
        <div className="border-t border-blue-200 pt-6 text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Exerra.AI. All rights reserved.</p>
          <p className="mt-1">
            Built with a vision for effortless innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}