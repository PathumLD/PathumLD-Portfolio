/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
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
      case 'achievements' :
        return <Achievements />
      case 'volunteer' :
        return <Volunteering />
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      <section id='about' className="h-screen bg-slate-900 -z-20 flex flex-col items-center justify-start p-4">
        {/* Sticky buttons at the top */}
        <div className="sticky top-16 md:top-12 z-10 w-full my-4 flex justify-center items-center bg-transparent">
          <div className="flex mt-12 md:mt-8 text-white flex-wrap gap-2 md:gap-4 justify-center">
            <button
              className={`mx-2 py-2  px-3 rounded-full ${
                activeSection === 'about' ? 'bg-cyan-500' : 'bg-white text-slate-900'
              }`}
              onClick={() => setActiveSection('about')}
            >
              About Me
            </button>
            <button
              className={`mx-2 py-2 px-3  rounded-full ${
                activeSection === 'education' ? 'bg-cyan-500' : 'bg-white text-slate-900'
              }`}
              onClick={() => setActiveSection('education')}
            >
              Education
            </button>
            <button
              className={`mx-2 py-2 px-3  rounded-full ${
                activeSection === 'experience' ? 'bg-cyan-500' : 'bg-white text-slate-900'
              }`}
              onClick={() => setActiveSection('experience')}
            >
              Experience
            </button>
            <button
              className={`mx-2 py-2 px-3  rounded-full ${
                activeSection === 'achievements' ? 'bg-cyan-500' : 'bg-white text-slate-900'
              }`}
              onClick={() => setActiveSection('achievements')}
            >
              Achievements
            </button>
            <button
              className={`mx-2 py-2 px-3  rounded-full ${
                activeSection === 'volunteer' ? 'bg-cyan-500' : 'bg-white text-slate-900'
              }`}
              onClick={() => setActiveSection('volunteer')}
            >
              Volunteering
            </button>
          </div>
        </div>

        {/* Section rendering with scrollable container and hidden scrollbar */}
        <div
          className="transition-all duration-700 -z-5 mt-10 md:mt-4 ease-in-out w-full max-w-4xl h-[48rem] overflow-y-auto no-scrollbar p-4 bg-slate-900 rounded-lg"
          key={activeSection}
        >
          {renderSection()}
        </div>
      </section>
    </>
  );
}

export default About;
