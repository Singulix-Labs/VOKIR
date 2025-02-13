import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Token } from "./pages/Token";
import { Contact } from "./pages/Contact"; // Added Contact page
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Added ScrollToTop component

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the page scrolls to top on route change */}
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar />
        <div className="flex-grow" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/token" element={<Token />} />
            <Route path="/contact" element={<Contact />} /> {/* New Contact Route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
