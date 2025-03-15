import { useState, useEffect, Fragment } from 'react';
import Typewriter from 'typewriter-effect';
import myImage from '../assets/Image3.jpg'; 
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowDownLong, FaBehance, FaMedium } from "react-icons/fa6";

const Home = () => {
  const roles = ['SOFTWARE ENGINEER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'FULLSTACK DEVELOPER', 'UI / UX DESIGNER', 'GRAPHIC DESIGNER', 'BLOGGER'];
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
    <section id='home' className="flex items-center justify-center h-screen p-6 sm:p-12 md:p-20 bg-slate-950">
      <div className="container flex flex-col items-center justify-center max-w-5xl gap-8 mx-auto mt-8 md:flex-row md:gap-28 md:mt-24 ">
        
        {/* Left Div: Profile Image */}
        <div className="relative flex justify-center md:justify-end left-div">
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
        <div className="flex-1 text-center roadmap-item md:text-left right-div">
          <h1 className="text-2xl text-white md:text-4xl ">Hello, I&rsquo;m</h1>
          <h1 className="-ml-1 text-4xl font-bold md:text-6xl text-cyan-400">Pathum Dissanayake</h1>
          <div className="flex items-center justify-center mt-3 text-2xl text-blue-400 md:text-4xl md:justify-start">
            <h2 className="inline-flex items-center text-lg text-white md:text-3xl">
               and I&rsquo;m a&nbsp; {/* Ensures the "I'm" stays on the same line */}
              <span className='inline-block text-cyan-400'>
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
          <p className="mx-2 mt-2 text-sm text-justify text-white md:text-xl md:mx-auto md:mt-8">Turning complex problems into elegant solutions.</p>
          <div className='flex items-center justify-center gap-4 mt-4 lg:justify-start'>
            <div className='flex gap-4 mt-4 text-xl text-white '>
              <a href="https://www.linkedin.com/in/pathumld/" className='p-2 transition duration-500 border rounded-full hover:border-cyan-400 hover:-translate-y-2 hover:bg-cyan-400 hover:text-stone-800'><FaLinkedinIn /></a>
              <a href="https://github.com/PathumLD" className='p-2 transition duration-500 border rounded-full hover:border-cyan-400 hover:-translate-y-2 hover:bg-cyan-400 hover:text-stone-800'><FaGithub /></a>
              <a href="mailto:pathumlk.diz@gmail.com" className='p-2 transition duration-500 border rounded-full hover:border-cyan-400 hover:-translate-y-2 hover:bg-cyan-400 hover:text-stone-800'><AiOutlineMail /></a>
              <a href="https://wa.me/+94729997763" className='p-2 transition duration-500 border rounded-full hover:border-cyan-400 hover:-translate-y-2 hover:bg-cyan-400 hover:text-stone-800'><FaWhatsapp /></a>
              <a href="https://medium.com/@pathumld" className='p-2 transition duration-500 border rounded-full hover:border-cyan-400 hover:-translate-y-2 hover:bg-cyan-400 hover:text-stone-800'> <FaMediumM /></a>
              <a href="https://www.behance.net/pathumld" className='p-2 transition duration-500 border rounded-full hover:border-cyan-400 hover:-translate-y-2 hover:bg-cyan-400 hover:text-stone-800'><FaBehance/></a>
            </div>
            <a href="/cv/PathumDissanayake_SoftwareEngineer.pdf" download>
              <button className="mt-4 px-2.5 py-2.5 md:px-3 md:py-1.5 text-white rounded-3xl border  hover:border-cyan-400 shadow-lg transition duration-500 hover:-translate-y-2 hover:bg-cyan-400 hover:text-white hover:font-semibold">
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
