import { volunteering } from '../../data/VolunteeringData';

const Volunteering = () => {
  return (
    <div className="text-cyan-500">
      {/* <h2 className="text-2xl font-bold md:mt-24 mb-10 text-center">volunteering</h2> */}
      <div className="relative border-l-2 border-cyan-500">
        {volunteering.map((vol, index) => (
          <div key={index} className="mb-4 ml-8 bg-slate-950 bg-opacity-20 py-4 rounded-xl px-10 ">
            <span className="absolute w-4 h-4 bg-cyan-500 mt-1.5 rounded-full left-1.5 border border-white"></span>
            <div className="text-white">
              <h3 className="text-lg font-semibold">{vol.title}</h3>
              <p className="mb-1">{vol.club}</p>
              <p className="text-xs">{vol.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
