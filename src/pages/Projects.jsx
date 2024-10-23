/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/ProjectData';
import ProjectCard from '../components/ProjectCard';
import useScrollAnimation from '../components/useScrollAnimation';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filterCategories = ['all', 'web apps', 'websites', 'mobile apps', 'flyers', 'social media posts', 'ui designs', 'others'];

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
      className="bg-fixed bg-cover bg-slate-900 bg-center h-screen pt-6 md:pt-10 px-4 md:px-10 flex flex-col items-center justify-start"
    >
      {/* Sticky filter buttons for selecting categories */}
      <div className="sticky top-12 md:top-12 z-10 w-full my-4 flex justify-center items-center bg-slate-900 pb-2">
        <div className="flex mt-12 md:mt-8 text-white flex-wrap gap-2 md:gap-4 justify-center">
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
      <div ref={elementRef} className="w-full max-w-6xl h-[36rem] md:h-[60rem] my-4 overflow-y-auto scroll-smooth no-scrollbar p-4  rounded-lg">
        <AnimatePresence>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
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
