import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">VOKIR</span>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/token" className="hover:underline">Token</Link>
        </div>
      </div>
    </nav>
  );
}