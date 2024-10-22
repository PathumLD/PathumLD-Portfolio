import React from 'react';
import { volunteering } from '../../data/VolunteeringData';

const Volunteering = () => {
  return (
    <>
      <div className="lg:flex lg:flex-col lg:items-center relative">
        {/* Single Continuous Vertical Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-cyan-500 transform -translate-x-1/2"/>
        <div className="lg:hidden absolute left-4 top-0 h-full w-0.5 bg-cyan-500"/>

        {volunteering.map((vol, index) => {
          const isLeft = index % 2 === 0;
          
          // Mobile Layout
          const mobileLayout = (
            <div className="lg:hidden relative mb-6 ml-12">
              {/* Timeline Node */}
              <div className="absolute -left-[52px] top-8">
                <div className="w-4 h-4 bg-cyan-500 rounded-full border-2 border-slate-950"></div>
              </div>

              {/* Mobile Card */}
              <div 
                className="opacity-0 translate-x-[-50px] animate-[fadeSlideIn_0.5s_ease-out_forwards]"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="bg-slate-950/40 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-950/60 transition-all duration-300 shadow-xl">
                  <h3 className="text-cyan-400 text-xl font-medium mb-2">{vol.title}</h3>
                  <p className="mb-1 text-white">{vol.club}</p>
                  <p className="text-xs text-white">{vol.year}</p>
                </div>
              </div>
            </div>
          );

          // Desktop Layout
          const desktopLayout = (
            <div className={`hidden lg:flex relative mb-6 w-full ${
              isLeft ? 'justify-start' : 'justify-end'
            }`}>
              {/* Timeline Node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-cyan-500 rounded-full border-2 border-slate-950"></div>
              </div>

              {/* Desktop Card */}
              <div 
                className={`w-[45%] ${isLeft ? 'mr-8' : 'ml-8'} opacity-0 ${
                  isLeft 
                    ? '-translate-x-[50px] animate-[fadeSlideRight_0.5s_ease-out_forwards]'
                    : 'translate-x-[50px] animate-[fadeSlideLeft_0.5s_ease-out_forwards]'
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="bg-slate-950/40 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-950/60 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                  <h3 className="text-cyan-400 text-xl font-medium mb-2">{vol.title}</h3>
                  <p className="mb-1 text-white">{vol.club}</p>
                  <p className="text-xs text-white">{vol.year}</p>
                </div>
              </div>
            </div>
          );

          return (
            <React.Fragment key={index}>
              {mobileLayout}
              {desktopLayout}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Volunteering;
