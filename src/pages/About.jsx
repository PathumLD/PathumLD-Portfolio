/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AboutMe from '../components/about/AboutMe';
import Education from '../components/about/Education';
import Experience from '../components/about/Experience';
import Achievements from '../components/about/Achievements';
import Volunteering from '../components/about/Volunteering';

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
      case 'achievements':
        return <Achievements />;
      case 'volunteer':
        return <Volunteering />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <section id='about' className="min-h-screen bg-slate-900 flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      {/* Sticky buttons at the top */}
      <div className="sticky top-16 md:top-12 z-10 w-full my-4 flex justify-center items-center bg-slate-900 pb-2">
        <div className="flex mt-8 text-white flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
          {['about', 'education', 'experience', 'achievements', 'volunteer'].map((section) => (
            <button
              key={section}
              className={`py-1 px-2 sm:py-2 sm:px-3  rounded-full ${
                activeSection === section ? 'bg-cyan-500' : 'bg-white text-slate-900'
              } transition-all duration-300`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace(/_/g, ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Section rendering with scrollable container and hidden scrollbar */}
      <div
        className="transition-all duration-700 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 w-full max-w-4xl h-[40rem] sm:h-[42rem] md:h-[44rem] lg:h-[46rem] xl:h-[48rem] overflow-y-auto no-scrollbar p-4 sm:p-6 md:p-8 lg:p-10 bg-slate-900 rounded-lg"
        key={activeSection}
      >
        {renderSection()}
      </div>
    </section>
  );
};

export default About;