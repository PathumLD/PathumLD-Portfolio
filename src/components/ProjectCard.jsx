/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ProjectCard = ({ coverImage, title, description, techStack, githubLink, demoLink }) => {
  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg h-60 group"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 transition-opacity bg-black bg-opacity-40 group-hover:bg-opacity-80"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-3 text-white">
        <div className=''>
          <h2 className="mb-2 text-2xl font-bold text-cyan-400">{title}</h2>
          <p className="text-sm opacity-90">{description}</p>
        </div>

        <div>
          <div className="flex flex-wrap mb-2">
            {techStack.map((tech, index) => (
              <span key={index} className="px-2 py-1 mb-1 mr-2 text-xs text-white bg-white rounded-full bg-opacity-20 ">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-end ">
            {/* <a href={githubLink} target="_blank" rel="noopener noreferrer" className="p-2 text-sm font-bold text-white bg-white/20 hover:text-cyan-500 rounded-3xl hover:underline">
              GitHub
            </a> */}
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="p-2 text-sm font-bold text-white hover:text-cyan-500 bg-white/20 rounded-3xl hover:underline">
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;