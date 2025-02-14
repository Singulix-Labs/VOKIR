import React from "react";

export function Home() {
  return (
    <div className="p-6 text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to VOKIR</h1>
      <p className="text-lg">
        VOKIR is a decentralized AI security auditor that evaluates smart contracts for vulnerabilities, exploits, and inefficiencies, leveraging real-time threat detection for enhanced security insights.
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-800">
        <h2 className="text-2xl font-semibold mb-2">Why Choose VOKIR?</h2>
        <ul className="list-disc pl-5 space-y-2 text-left">
          <li>AI-driven smart contract security analysis.</li>
          <li>Real-time threat monitoring and mitigation.</li>
          <li>Community-driven reporting and rewards.</li>
          <li>Seamless integration with blockchain ecosystems.</li>
        </ul>
      </div>
    </div>
  );
}
