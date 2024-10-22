import { skillsData } from '../../data/SkillsData';

const SkillsSection = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-4 md:gap-6">
      {skillsData.map((skill) => (
        <div
          key={skill.id}
          className="relative w-20 md:w-28 h-20 md:h-28 bg-cover bg-center bg-white rounded-full shadow-md"
          style={{ backgroundImage: `url(${skill.logo})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-80 hover:border opacity-0 hover:opacity-100 flex items-center justify-center rounded-full transition-opacity duration-300">
            <p className="text-white text-sm font-semibold">{skill.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
