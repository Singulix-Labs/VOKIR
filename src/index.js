import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Added performance monitoring

const root = ReactDOM.createRoot(document.getElementById("root"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    </ErrorBoundary>
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
