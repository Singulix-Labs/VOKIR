import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Added ScrollToTop component

// Lazy loading pages for performance optimization
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Token = lazy(() => import("./pages/Token"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound")); // Added NotFound page

function ErrorBoundary({ error }) {
  return (
    <div className="text-center p-10">
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}

// Added a loading spinner for better user experience during lazy loading
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the page scrolls to top on route change */}
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar role="navigation" />
        <div className="flex-grow" role="main">
          <Suspense fallback={<LoadingSpinner />}> {/* New LoadingSpinner added as fallback */}
            <Routes>
              <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
              <Route path="/about" element={<ErrorBoundary><About /></ErrorBoundary>} />
              <Route path="/token" element={<ErrorBoundary><Token /></ErrorBoundary>} />
              <Route path="/contact" element={<ErrorBoundary><Contact /></ErrorBoundary>} /> {/* New Contact Route */}
              <Route path="*" element={<ErrorBoundary><NotFound /></ErrorBoundary>} /> {/* Catch-all Route */}
            </Routes>
          </Suspense>
        </div>
        <Footer role="contentinfo" />
      </div>
    </Router>
  );
}

export default App;
