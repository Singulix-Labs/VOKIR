import React from "react";
import { NavLink } from "react-router-dom"; // Using NavLink for active link indication

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">VOKIR</span>
        <div className="space-x-4">
          <NavLink to="/" exact className="hover:underline" activeClassName="text-yellow-500">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline" activeClassName="text-yellow-500">
            About
          </NavLink>
          <NavLink to="/token" className="hover:underline" activeClassName="text-yellow-500">
            Token
          </NavLink>
          <NavLink to="/contact" className="hover:underline" activeClassName="text-yellow-500">
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
