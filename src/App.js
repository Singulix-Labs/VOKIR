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

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the page scrolls to top on route change */}
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar role="navigation" />
        <div className="flex-grow" role="main">
          <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/token" element={<Token />} />
              <Route path="/contact" element={<Contact />} /> {/* New Contact Route */}
              <Route path="*" element={<NotFound />} /> {/* Catch-all Route */}
            </Routes>
          </Suspense>
        </div>
        <Footer role="contentinfo" />
      </div>
    </Router>
  );
}

export default App;
