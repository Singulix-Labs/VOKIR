import React from "react";

export function Token() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">VOKIR Token Utility</h2>
      <p className="text-lg">
        The VOKIR ecosystem is powered by its native token, which is used for auditing services, rewarding community members, and enabling decentralized governance participation.
      </p>
      <ul className="list-disc pl-5 mt-4 space-y-2">
        <li>Pay-per-audit model using native tokens.</li>
        <li>Reward tokens for users who identify vulnerabilities.</li>
        <li>Community incentives for security participation.</li>
      </ul>
      <div className="mt-6 p-4 border rounded-lg bg-gray-800">
        <h3 className="text-xl font-semibold">Token Details</h3>
        <p><strong>Symbol:</strong> VOK</p>
        <p><strong>Total Supply:</strong> 100,000,000 VOK</p>
        <p><strong>Blockchain:</strong> Ethereum (ERC-20)</p>
      </div>
    </div>
  );
}
