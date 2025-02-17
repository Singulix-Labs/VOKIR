import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Added social icons

export function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} VOKIR. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaFacebook size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
          <FaTwitter size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
