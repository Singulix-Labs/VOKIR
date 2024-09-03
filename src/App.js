import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Added ScrollToTop component

// Lazy loading pages for performance optimization
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Token = lazy(() => import("./pages/Token"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound")); // Added NotFound page

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
      return (
        <div className="text-center p-10">
          <h1>Something went wrong!</h1>
        </div>
      );
    }
    return this.props.children;
  }
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
      <Helmet>
        <title>My React App</title>
        <meta name="description" content="A modern React app with optimized performance and accessibility." />
      </Helmet>
      <ScrollToTop /> {/* Ensures the page scrolls to top on route change */}
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar role="navigation" />
        <div className="flex-grow" role="main">
          <Suspense fallback={<LoadingSpinner />}> {/* New LoadingSpinner added as fallback */}
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/token" element={<Token />} />
                <Route path="/contact" element={<Contact />} /> {/* New Contact Route */}
                <Route path="*" element={<NotFound />} /> {/* Catch-all Route */}
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </div>
        <Footer role="contentinfo" />
      </div>
    </Router>
  );
}

export default App;
