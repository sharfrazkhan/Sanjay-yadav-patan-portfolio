import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-6">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left: Copyright */}
        <p className="text-sm text-center md:text-left">
          © 2025 Shri Sanjay Yadav Patan. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/sanjayyadavpatan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/sanjay.yadav.patan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-200"
            aria-label="Facebook"
          >
            <FaFacebookF size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
