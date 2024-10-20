/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import AboutMe from '../components/about/AboutMe';
import Education from '../components/about/Education';
import Experience from '../components/about/Experience';

const About = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />;
      case 'education':
        return <Education />;
      case 'experience':
        return <Experience />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      <section id='about' className="h-screen bg-slate-900 -z-20 flex flex-col items-center justify-start p-4">
        {/* Sticky buttons at the top */}
        <div className="sticky top-10 z-10   w-full py-4 flex justify-center">
          <div className="flex my-8">
            <button
              className={`mx-2 py-2 font-semibold px-3 rounded-full ${
                activeSection === 'about' ? 'bg-cyan-500' : 'bg-white text-slate-900'
              }`}
              onClick={() => setActiveSection('about')}
            >
              About Me
            </button>
            <button
              className={`mx-2 py-2 px-3 font-semibold rounded-full ${
                activeSection === 'education' ? 'bg-cyan-500' : 'bg-white text-slate-900'
              }`}
              onClick={() => setActiveSection('education')}
            >
              Education
            </button>
            <button
              className={`mx-2 py-2 px-3 font-semibold rounded-full ${
                activeSection === 'experience' ? 'bg-cyan-500' : 'bg-white text-slate-900'
              }`}
              onClick={() => setActiveSection('experience')}
            >
              Experience
            </button>
          </div>
        </div>

        {/* Section rendering with scrollable container and hidden scrollbar */}
        <div
          className="transition-all duration-700 -z-5  ease-in-out w-full max-w-4xl h-[48rem] overflow-y-auto no-scrollbar p-4 bg-slate-900 rounded-lg"
          key={activeSection}
        >
          {renderSection()}
        </div>
      </section>
    </>
  );
}

export default About;
