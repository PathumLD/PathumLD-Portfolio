import Image2 from '../../assets/Image2.jpg'
import useScrollAnimation from '../useScrollAnimation';

const AboutMe = () => {
    const imageRef = useScrollAnimation();
    const introRef = useScrollAnimation();
    const infoRefs = [
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
    ];

    return (
      <div className="md:flex-row flex justify-between gap-10 mt0 flex-col">
        {/* Image container */}
        <div 
          ref={imageRef}
          className='scroll-animate w-60 h-60 justify-center items-center mx-auto md:justify-start md:w-96 md:h-[21.5rem] object-cover'
        >
            <img 
              src={Image2} 
              className='rounded-xl p-4 border-2 border-cyan-400' 
              alt="Image2" 
            />
        </div>

        {/* Text content container */}
        <div className='text-white my-auto pt-20 md:pt-0'>
            <p 
              ref={introRef}
              className='scroll-animate mb-12 text-center font-semibold'
              style={{ transitionDelay: '0.2s' }}
            >
                I&rsquo;m a passionate software engineer with experience in building
                scalable web applications using modern technologies.
            </p>

            <div className='flex-row mx-4'>
                <h3 
                  ref={infoRefs[0]}
                  className='scroll-animate-left'
                  style={{ transitionDelay: '0.3s' }}
                >
                    <span className='font-bold text-cyan-300'>Full Name :</span> 
                    <span className='ml-2'>Dissanayake Pathiranage Pathum Lakshan Dissanayake</span>
                </h3>
                <h3 
                  ref={infoRefs[1]}
                  className='scroll-animate-left'
                  style={{ transitionDelay: '0.4s' }}
                >
                    <span className='font-bold text-cyan-300'>Address :</span> 
                    <span className='ml-2'>Kurunegala, Sri Lanka</span>
                </h3>
                <h3 
                  ref={infoRefs[2]}
                  className='scroll-animate-left'
                  style={{ transitionDelay: '0.5s' }}
                >
                    <span className='font-bold text-cyan-300'>Phone :</span> 
                    <span className='ml-2'>+94 76 734 2605 / +94 72 999 7763</span>
                </h3>
                <h3 
                  ref={infoRefs[3]}
                  className='scroll-animate-left'
                  style={{ transitionDelay: '0.6s' }}
                >
                    <span className='font-bold text-cyan-300'>Email :</span> 
                    <span className='ml-2'>pathumlk.diz@gmail.com</span>
                </h3>
                <h3 
                  ref={infoRefs[4]}
                  className='scroll-animate-left'
                  style={{ transitionDelay: '0.7s' }}
                >
                    <span className='font-bold text-cyan-300'>Languages :</span> 
                    <span className='ml-2'>English, Sinhala</span>
                </h3>
            </div>
        </div>
      </div>
    );
};

export default AboutMe;