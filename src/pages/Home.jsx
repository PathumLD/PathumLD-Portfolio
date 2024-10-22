import { useState, useEffect, Fragment } from 'react';
import Typewriter from 'typewriter-effect';
import myImage from '../assets/image1.png'; 
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

const Home = () => {
  const roles = ['SOFTWARE ENGINEER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'FULLSTACK DEVELOPER', 'UI / UX DESIGNER', 'GRAPHIC DESIGNER'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // IntersectionObserver for fade-in effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);
    
    const leftDiv = document.querySelector('.left-div');
    const rightDiv = document.querySelector('.right-div');

    if (leftDiv) observer.observe(leftDiv);
    if (rightDiv) observer.observe(rightDiv);

    return () => {
      if (leftDiv) observer.unobserve(leftDiv);
      if (rightDiv) observer.unobserve(rightDiv);
    };
  }, []);

  return (
    <section id='home' className="h-screen flex items-center justify-center p-6 sm:p-12 md:p-20 bg-slate-950">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-28 mt-8 md:mt-24 ">
        
        {/* Left Div: Profile Image */}
        <div className="flex justify-center md:justify-end relative left-div">
          <div className="relative">
            {/* Responsive SVG Dotted Border */}
            <svg
              viewBox="0 0 200 200"
              className="w-[calc(48vw+8px)] h-[calc(48vw+8px)] md:w-[calc(20vw+8px)] md:h-[calc(20vw+8px)] lg:w-[calc(24vw+8px)] lg:h-[calc(24vw+8px)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 svg-border"
            >
              <circle 
                cx="100" 
                cy="100" 
                r="104"  // radius slightly less than 100 to account for the 8px gap
                fill="none" 
                stroke="#22d3ee" 
                strokeWidth="2" 
                strokeDasharray="5, 30, 20, 15, 10, 20,  30, 5, 5, 10, 40, 25, 30, 10, 50 10" 
                strokeLinecap="round" 
              />
            </svg>
            <div className="relative">
              <img 
                src={myImage} 
                alt="Profile" 
                className="w-[48vw] h-[48vw] md:w-[20vw] md:h-[20vw] lg:w-[24vw] lg:h-[24vw] rounded-full mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Right Div: Text and Typewriter */}
        <div className="roadmap-item text-center md:text-left right-div flex-1">
          <h1 className="text-2xl md:text-4xl text-white ">Hello, I&rsquo;m</h1>
          <h1 className="text-4xl md:text-6xl text-cyan-400 font-bold -ml-1">Pathum Dissanayake </h1>
          <div className="text-2xl md:text-4xl text-blue-400 flex items-center justify-center md:justify-start">
            <h2 className="text-lg md:text-3xl text-white inline-flex items-center">
               and I&rsquo;m a&nbsp; {/* Ensures the "I'm" stays on the same line */}
              <span className='text-cyan-400 inline-block'>
                {roles.map((role, index) => (
                  <Fragment key={index}>
                    {currentRoleIndex === index && (
                      <Typewriter
                        options={{
                          delay: 100,
                          deleteSpeed: 50,
                          cursor: ''
                        }}
                        onInit={(typewriter) => {
                          typewriter.typeString(role).start();
                        }}
                      />
                    )}
                  </Fragment>
                ))}
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-xl mt-2 mx-2 md:mx-auto md:mt-8 text-justify text-white">Where logic meets creativity, I build digital dreams.</p>
          <div className='flex gap-4 items-center justify-center lg:justify-start mt-4'>
            <div className='mt-4 flex gap-4 text-xl text-white'>
              <a href="https://www.linkedin.com/in/pathumld/" className='border p-2 rounded-full hover:text-cyan-400 hover:border-cyan-400 '><FaLinkedinIn /></a>
              <a href="https://github.com/PathumLD" className='border p-2 rounded-full hover:text-cyan-400 hover:border-cyan-400'><FaGithub /></a>
              <a href="mailto:pathumlk.diz@gmail.com" className='border p-2 rounded-full hover:text-cyan-400 hover:border-cyan-400'><AiOutlineMail /></a>
              <a href="https://wa.me/+94729997763" className='border p-2 rounded-full hover:text-cyan-400 hover:border-cyan-400'><FaWhatsapp /></a>
            </div>
            <a href="/cv/PathumDissanayake_SoftwareEngineer.pdf" download>
              <button className="mt-4 px-2.5 py-2.5 md:px-3 md:py-1.5 btn-animate text-white rounded-3xl border hover:text-cyan-400 hover:border-cyan-400 shadow-lg transition duration-300">
                {/* Display text on large screens */}
                <span className="hidden lg:block">Download CV</span>
                
                {/* Display icon on mobile screens */}
                <span className="block lg:hidden">
                  <FaArrowDownLong />
                </span>
              </button>
            </a>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
