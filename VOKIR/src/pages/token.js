import React from "react";

export function Token() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">VOKIR Token Utility</h2>
      <p className="text-lg">The VOKIR ecosystem is powered by its native token, which is used for auditing services and rewarding community members.</p>
      <ul className="list-disc pl-5 mt-4 space-y-2">
        <li>Pay-per-audit model using native tokens.</li>
        <li>Reward tokens for users who identify vulnerabilities.</li>
        <li>Community incentives for security participation.</li>
      </ul>
    </div>
  );
}