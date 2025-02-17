import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Added performance monitoring

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure app performance only in development mode
if (process.env.NODE_ENV === "development") {
  reportWebVitals(console.log);
}

// Added a check to send performance metrics to an analytics endpoint in production
if (process.env.NODE_ENV === "production") {
  reportWebVitals((metric) => {
    const body = JSON.stringify(metric);
    const url = "https://analytics.example.com/metrics"; // Replace with your analytics endpoint

    navigator.sendBeacon(url, body);
  });
}
