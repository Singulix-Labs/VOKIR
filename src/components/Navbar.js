import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Using NavLink for active link indication
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Added icons for menu toggle

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">VOKIR</span>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>

        <div className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500 underline" : "hover:underline"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-500 underline" : "hover:underline"}>
            About
          </NavLink>
          <NavLink to="/token" className={({ isActive }) => isActive ? "text-yellow-500 underline" : "hover:underline"}>
            Token
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-500 underline" : "hover:underline"}>
            Contact Us
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? "text-yellow-500 underline" : "hover:underline"}>
            Features
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
