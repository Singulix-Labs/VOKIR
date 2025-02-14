import React from "react";

export function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About VOKIR</h2>
      <p className="text-lg">
        VOKIR is an AI-driven auditing tool designed to enhance blockchain security by analyzing smart contracts for potential risks.
      </p>
      <p className="text-lg mt-4">
        We provide affordable and automated security audits to help smaller projects safeguard their assets.
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-800">
        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
        <p>
          Our goal is to make smart contract security accessible to all by providing AI-driven insights, real-time threat detection, and
          a community-driven approach to security.
        </p>
      </div>
    </div>
  );
}
