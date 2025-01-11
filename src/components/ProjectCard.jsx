import React from 'react';

const ProjectCard = ({ coverImage, title, description, techStack, githubLink, demoLink }) => {
  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg h-60 group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-black/90 opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 text-white">
        <div className="transform transition-all duration-300 group-hover:translate-y-[-8px]">
          <h2 className="mb-3 text-2xl font-bold text-cyan-400 group-hover:scale-105 transition-transform duration-300">
            {title}
          </h2>
          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="transform transition-all duration-300 group-hover:translate-y-[-4px]">
          <div className="flex flex-wrap gap-2 mb-3">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-full 
                          backdrop-blur-sm transform transition-all duration-300
                          hover:scale-105 hover:bg-white/30"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-end gap-3">
            {/* {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 text-sm font-bold text-white bg-white/20 rounded-full
                         transform transition-all duration-300 hover:scale-105
                         hover:bg-white/30 hover:text-cyan-400"
              >
                GitHub
              </a>
            )} */}
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 text-sm font-bold text-white bg-white/20 rounded-full
                         transform transition-all duration-300 hover:scale-105
                         hover:bg-white/30 hover:text-cyan-400"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;