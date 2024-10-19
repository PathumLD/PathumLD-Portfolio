// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineItems = [
  {
    year: '2022 - Present',
    title: 'Senior Software Engineer',
    company: 'Tech Innovators Inc.',
    description: 'Leading full-stack development projects and mentoring junior developers.',
  },
  {
    year: '2019 - 2022',
    title: 'Full Stack Developer',
    company: 'Web Solutions Co.',
    description: 'Developed and maintained various web applications using modern technologies.',
  },
  {
    year: '2017 - 2019',
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    description: 'Contributed to the development of innovative mobile applications.',
  },
  {
    year: '2013 - 2017',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in software engineering and AI.',
  },
];

const TimelineItem = ({ item, isLeft }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`mb-8 flex justify-between items-center w-full ${
        isLeft ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-skyBlue shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{item.year.slice(0, 4)}</h1>
      </div>
      <div className="order-1 bg-cyan-100 dark:bg-darkBlue rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">{item.title}</h3>
        <h4 className="mb-3 font-semibold text-gray-600 dark:text-gray-300 text-sm">{item.company}</h4>
        <p className="text-sm leading-snug tracking-wide text-gray-700 dark:text-gray-300">{item.description}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen py-16 bg-slate-950 dark:bg-darkBlue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center my-12 ">About Me</h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-skyBlue h-full border left-1/2"></div>
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
