import React from 'react';

const ProjectCard = ({ coverImage, title, description, techStack, githubLink, demoLink }) => {
  return (
    <div className="group relative h-72 overflow-hidden rounded-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/5 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${coverImage})` }}
      />
      
      {/* Glassmorphism overlay that slides up on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent backdrop-blur-0 transition-all duration-500 group-hover:backdrop-blur-sm" />
      
      {/* Decorative elements */}
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-cyan-500/10 blur-xl transition-all duration-700 group-hover:bg-cyan-500/20" />
      <div className="absolute -left-4 -bottom-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-xl transition-all duration-700 group-hover:bg-cyan-500/20" />
      
      {/* Content container */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
        {/* Title area */}
        <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
          <h2 className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent transition-all duration-500 group-hover:from-cyan-400 group-hover:to-white">
              {title}
            </span>
          </h2>
          
          {/* Description with slide-up reveal */}
          <div className="mt-6 h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:h-16 group-hover:opacity-100">
            <p className="text-sm leading-relaxed text-white/80">
              {description.length > 120 ? description.substring(0, 120) + '...' : description}
            </p>
          </div>
        </div>

        {/* Bottom section with tech stack and buttons */}
        <div className="transform transition-all duration-500 group-hover:translate-y-[-4px]">
          {/* Tech stack */}
          <div className="mb-4 flex flex-wrap gap-2">
            {techStack.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="rounded-full bg-gradient-to-r from-cyan-800/40 to-cyan-600/40 px-3 py-1 text-xs 
                          font-medium text-white shadow-sm backdrop-blur-sm transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                +{techStack.length - 3}
              </span>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex justify-end gap-3">
            {/* {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white
                         backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )} */}
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white
                         shadow-md transition-all duration-300 hover:from-cyan-500 hover:to-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;