/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/ProjectData';
import ProjectCard from '../components/ProjectCard';
import useScrollAnimation from '../components/useScrollAnimation';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filterCategories = ['all', 'web apps', 'websites', 'mobile apps', 'flyers', 'social media posts', 'ui designs', 'logo', 'others'];

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 1, ease: 'easeIn' } }
  };

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
      <div ref={elementRef} className="w-full max-w-6xl h-[36rem] md:h-[60rem] my-3 overflow-y-auto scroll-smooth no-scrollbar p-4  rounded-lg">
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
              >
                <ProjectCard 
                  coverImage={project.coverImage}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
