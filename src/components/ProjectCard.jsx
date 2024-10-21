/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ProjectCard = ({ coverImage, title, description, techStack, githubLink, demoLink }) => {
  return (
    <div 
      className="relative h-60 rounded-lg shadow-lg overflow-hidden group"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-80"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-3 text-white z-10">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-sm  opacity-90">{description}</p>
        </div>

        <div>
          <div className="flex flex-wrap mb-2">
            {techStack.map((tech, index) => (
              <span key={index} className="bg-white bg-opacity-20 text-white text-xs py-1 px-2 rounded-full mr-2 mb-1 ">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between ">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white  hover:text-cyan-500 font-bold  text-sm">
              GitHub
            </a>
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 font-bold  text-sm">
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;