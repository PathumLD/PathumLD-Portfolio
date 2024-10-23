/* eslint-disable react-hooks/rules-of-hooks */
import { skillsData } from '../../data/SkillsData';
import useScrollAnimation from '../useScrollAnimation'; // Adjust path as needed

const SkillsSection = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-4 md:gap-6">
      {skillsData.map((skill, index) => {
        // Use scroll animation hook
        const scrollRef = useScrollAnimation(0.2); // Adjust threshold as needed

        // Alternate animations for variety
        const animationClass =
          index % 3 === 0
            ? 'scroll-animate'
            : index % 3 === 1
            ? 'scroll-animate-left'
            : 'scroll-animate-right';

        return (
          <div
            key={skill.id}
            ref={scrollRef} // Apply scroll ref here
            className={`relative w-24 md:w-28 h-24 md:h-28 bg-cover mx-auto bg-center bg-white rounded-full shadow-md ${animationClass}`}
            style={{ backgroundImage: `url(${skill.logo})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-80 hover:border opacity-0 hover:opacity-100 flex items-center justify-center rounded-full transition-opacity duration-300">
              <p className="text-white text-sm font-semibold">{skill.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSection;
