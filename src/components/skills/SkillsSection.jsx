import { skillsData } from '../../data/SkillsData';

const SkillsSection = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-4 md:gap-6">
      {skillsData.map((skill) => (
        <div
          key={skill.id}
          className="bg-slate-800 w-28 h-28 hover:bg-slate-900  flex flex-col items-center justify-center rounded-lg shadow-md">
          <img src={skill.logo} alt={skill.name} className="w-28 h-20 rounded-t-lg" />
          <p className="my-1 text-cyan-400">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
