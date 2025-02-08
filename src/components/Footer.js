import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} VOKIR. All rights reserved.</p>
    </footer>
  );
}
