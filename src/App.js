import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Token } from "./pages/Token";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar />
        <div className="flex-grow" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/token" element={<Token />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
