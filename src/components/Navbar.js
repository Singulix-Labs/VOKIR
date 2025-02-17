import React from "react";
import { NavLink } from "react-router-dom"; // Using NavLink for active link indication

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">VOKIR</span>
        <div className="space-x-4">
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
