import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
const Footer = React.lazy(() => import('./pages/ContactMe'));
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { FaArrowUp } from "react-icons/fa";
import Skills from "./pages/Skills";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  
  // Remove specific scrolling for about section
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    
    // Check if the user is scrolling up or down
    if (currentScrollPos > 100) {  // You can adjust the threshold as needed
      setShowNavbar(false); // Hide navbar when scrolling down
    } else {
      setShowNavbar(true); // Show navbar when at the top or scrolling up
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top (Home section)
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Conditionally render Navbar based on scroll position */}
      <div className={`fixed w-full mx-auto justify-center   top-10 z-50 transition-transform duration-500 ease-in-out 
          ${showNavbar ? "translate-y-0" : "-translate-y-8"} 
          opacity-100`}
      >
          <Navbar />
      </div>

      <div className="">
        <Home />
        <div id="about">
          <About />
        </div>
        <Skills />
        <Projects />
        <Suspense fallback={<div>Loading...</div>}>
        <Footer />
        </Suspense>
      </div>

      {/* Display the "Back to Home" button when navbar is hidden */}
      {!showNavbar && (
        <button
          className="fixed bottom-10 right-10 bg-blue-600 text-white px-4 py-4 rounded-full shadow-lg hover:bg-blue-500"
          onClick={scrollToHome}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default App;
