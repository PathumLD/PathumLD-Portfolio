import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  // Function to handle scrolling
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const aboutSectionTop = aboutSection.offsetTop;
      const currentScrollPos = window.pageYOffset;

      // Hide navbar when About section starts, show when in Home section
      if (currentScrollPos >= aboutSectionTop) {
        setIsScrollingUp(false); // Hiding the navbar
        setShowNavbar(false);
      } else {
        setIsScrollingUp(true);  // Showing the navbar
        setShowNavbar(true);
      }
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

  return (
    <>
      {/* Conditionally render Navbar based on scroll position with animation */}
      <div
        className={`fixed w-full mx-auto justify-center  top-10 z-10 transition-transform duration-500 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${isScrollingUp ? "opacity-100" : "opacity-0"}`}
      >
        <Navbar />
      </div>

      <div className="mt-24">
        <Home />
        <div id="about">
          <About />
        </div>
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
