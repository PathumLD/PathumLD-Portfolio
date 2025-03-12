import React from 'react';

const ProjectCard = ({ 
  coverImage, 
  title, 
  description, 
  techStack, 
  githubLink, 
  demoLink,
  onClick 
}) => {
  return (
    <div 
      className="relative flex flex-col h-full overflow-hidden rounded-lg shadow-lg bg-slate-800 hover:shadow-cyan-500/30 transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          <p className="mb-4 text-sm text-gray-300 line-clamp-3">{description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs text-white rounded-full bg-slate-700"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="px-2 py-1 text-xs text-white rounded-full bg-slate-700">
                +{techStack.length - 3}
              </span>
            )}
          </div>
          {/* <div 
            className="flex items-center justify-center w-full p-2 mt-auto text-sm font-medium text-white rounded-md bg-cyan-500 hover:bg-cyan-600 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onClick(e);
            }}
          >
            View Details
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;