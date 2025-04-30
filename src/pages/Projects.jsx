/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { projects } from '../data/ProjectData';
import ProjectCard from '../components/ProjectCard';
import useScrollAnimation from '../components/useScrollAnimation';
import { newProjects } from '../data/NewProjectData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterCategories = ['all', 'web apps', 'websites', 'mobile apps', 'flyers', 'graphic design', 'ui designs', 'logo', 'others'];

  const filteredProjects = newProjects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 1, ease: 'easeIn' } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const elementRef = useScrollAnimation(0.1);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-start h-screen px-4 pt-6 bg-fixed bg-center bg-cover bg-slate-900 md:px-10"
    >
      {/* Sticky filter buttons for selecting categories */}
      <div className="sticky z-10 flex items-center justify-center w-full pb-2 my-4 top-16 md:top-12 bg-slate-900">
        <div className="flex flex-wrap justify-center gap-2 mt-12 text-white md:gap-4">
          {filterCategories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 md:px-4 py-2 rounded-full ${
                filter === category ? 'bg-cyan-500' : 'bg-white text-slate-900'
              } hover:bg-cyan-600 transition-colors`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable project card list with smooth scrolling */}
      <div ref={elementRef} className="w-full max-w-6xl h-[36rem] md:h-[60rem] my-3 overflow-y-auto scroll-smooth no-scrollbar p-4 rounded-lg">
        <AnimatePresence>
          <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                onClick={() => openModal(project)}
                className="transition-transform cursor-pointer hover:scale-105"
              >
                <ProjectCard 
                  coverImage={project.coverImage}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click from bubbling to parent
                    openModal(project);
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Details Modal - Fixed Position Portal with Hidden Scrollbar */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          <AnimatePresence>
            {/* Modal Backdrop */}
            <motion.div 
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative z-50   max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 shadow-xl shadow-cyan-500/20 scrollbar-hide"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE and Edge */
              }}
            >
              {/* Fixed Close Button that stays in position even when scrolling */}
              <div className="sticky top-0 right-0 z-50 float-right p-4">
                <button 
                  onClick={closeModal}
                  className="flex items-center justify-center w-8 h-8 transition-colors bg-white rounded-full shadow-md text-slate-900 hover:bg-cyan-500"
                >
                  ✕
                </button>
              </div>

              
              
              <div className="p-6 ">
                {/* Project Image */}
                <div className="w-full h-48 mb-6 overflow-hidden rounded-lg sm:h-60 md:h-96">
                  <img 
                    src={selectedProject.coverImage} 
                    alt={selectedProject.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Project Details */}
                <div className="space-y-4">
                  <div>
                    <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">{selectedProject.title}</h2>
                    <div className="inline-block px-3 py-1 text-sm text-white rounded-full bg-cyan-500">
                      {selectedProject.category}
                    </div>
                  </div>
                  
                  <p className="text-base text-gray-300 md:text-lg">{selectedProject.description}</p>
                  
                  {/* Tech Stack */}
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 text-sm text-white rounded-full bg-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Additional Project Details (you can add more fields to your project data) */}
                  {selectedProject.fullDescription && (
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">About this Project</h3>
                      <p className="text-gray-300">{selectedProject.fullDescription}</p>
                    </div>
                  )}
                  
                  {/* Features */}
                  {selectedProject.features && (
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">Key Features</h3>
                      <ul className="space-y-1 text-gray-300 list-disc list-inside">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {/* {selectedProject.githubLink && (
                      <a 
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 text-white transition-colors rounded-full bg-slate-700 hover:bg-slate-600"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )} */}
                    {selectedProject.demoLink && (
                      <a 
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 text-white transition-colors rounded-full bg-cyan-500 hover:bg-cyan-600"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit 
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;