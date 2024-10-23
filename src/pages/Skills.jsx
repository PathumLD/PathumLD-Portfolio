import { useState } from 'react';
import SkillsSection from '../components/skills/SkillsSection';
import CertificatesSection from '../components/skills/CertificatesSection';

const Skills = () => {
  const [activeSection, setActiveSection] = useState('certificates');

  return (
    <section id='skills' className="min-h-screen bg-slate-950 text-white p-3">
      <div className='sticky top-16 md:top-12 z-10 w-full my-4 flex justify-center items-center bg-slate-950 pb-2'>
        <div className="flex mt-12 text-white flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center ">
          <button
            onClick={() => setActiveSection('certificates')}
            className={`px-4 py-2 ${activeSection === 'certificates' ? 'bg-cyan-500' : 'bg-white text-slate-900'} rounded-full`}>
            Certificates
          </button>
          <button
            onClick={() => setActiveSection('skills')}
            className={`px-4 py-2 mr-2 ${activeSection === 'skills' ? 'bg-cyan-500' : 'bg-white text-slate-900'} rounded-full`}>
            Skills
          </button>
            
        </div>
      </div>

      <div className='mt-6'>
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'certificates' && <CertificatesSection />}
      </div>
    </section>
  );
};

export default Skills;
