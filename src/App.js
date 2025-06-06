import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { QueryClient, QueryClientProvider } from "react-query"; // Added React Query
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; 
import { AuthProvider } from "./contexts/AuthContext"; // Added AuthProvider
import { Web3Provider } from "./contexts/Web3Context"; // Added Web3Provider

// Initialize React Query client for server-side state management
const queryClient = new QueryClient(); 

// Lazy-loaded pages for performance optimization
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Token = lazy(() => import("./pages/Token"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
    <QueryClientProvider client={queryClient}> {/* Wrap app with React Query Provider */}
      <AuthProvider> {/* Added Auth Context Provider */}
        <Web3Provider> {/* Added Web3 Context Provider */}
          <Router>
            <Helmet>
              <title>Fixify</title> {/* Changed to Fixify */}
              <meta name="description" content="A modern React app with optimized performance and accessibility." />
            </Helmet>
            <ScrollToTop /> {/* Ensures the page scrolls to top on route change */}
            <div className="min-h-screen flex flex-col bg-gray-900 text-white">
              <Navbar role="navigation" />
              <div className="flex-grow" role="main">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/token" element={<Token />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </div>
              <Footer role="contentinfo" />
            </div>
          </Router>
        </Web3Provider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
