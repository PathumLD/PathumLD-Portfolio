import React from 'react';

const ProjectCard = ({ coverImage, title, description, techStack, githubLink, demoLink }) => {
  return (
    <div className="relative w-full overflow-hidden transition-all duration-300 border shadow-lg h-72 group rounded-xl bg-neutral-900 border-neutral-800 hover:shadow-neutral-800/50 hover:border-neutral-700">
      {/* Background image with subtle zoom effect */}
      <div 
        className="absolute inset-0 transition-transform duration-500 bg-center bg-cover group-hover:scale-105 opacity-70"
        style={{ backgroundImage: `url(${coverImage})` }}
      />
      
      {/* Dark overlay that lightens on hover */}
      <div className="absolute inset-0 transition-all duration-300 bg-black/50 group-hover:bg-black/40" />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full p-6 text-white">
        {/* Top section with title and description (always visible) */}
        <div>
          <h2 className="mb-5 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
            {title}
          </h2>
          
          <p className="mb-4 text-sm leading-relaxed text-neutral-300 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Middle section with tech stack */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-medium transition-all duration-300 border rounded-md bg-neutral-800/80 text-cyan-400 border-neutral-700 hover:bg-neutral-700 hover:border-cyan-400/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom section with buttons */}
        {/* <div className="flex items-center justify-between pt-3 mt-auto border-t border-neutral-800">
          <div className="flex gap-2">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-white transition-all duration-300 border rounded-md bg-neutral-800/60 border-neutral-700 hover:bg-neutral-700 hover:text-cyan-400"
                aria-label="GitHub repository"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Code
              </a>
            )}
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-white transition-all duration-300 rounded-md bg-cyan-600/90 hover:bg-cyan-500 hover:shadow-md hover:shadow-cyan-500/20"
                aria-label="Live demo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                Live
              </a>
            )}
          </div>
          
          
          <span className="text-xs transition-colors duration-300 text-neutral-400 group-hover:text-cyan-400">
            View project →
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;