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
      <div className="flex flex-col justify-between gap-10 md:flex-row mt0">
        {/* Image container */}
        <div 
          ref={imageRef}
          className='scroll-animate w-60 h-60 justify-center items-center mx-auto md:justify-start md:w-96 md:h-[21.5rem] object-cover'
        >
            <img 
              src={Image2} 
              className='p-4 border-2 rounded-xl border-cyan-400' 
              alt="Image2" 
            />
        </div>

        {/* Text content container */}
        <div className='pt-20 my-auto text-white md:pt-0'>
            <p 
              ref={introRef}
              className='mb-12 font-semibold text-center scroll-animate'
              style={{ transitionDelay: '0.2s' }}
            >
                I&rsquo;m a passionate software engineer with experience in building
                scalable web applications using modern technologies.
            </p>

            <div className='flex-row mx-4 '>
                <h3 
                  ref={infoRefs[0]}
                  className='mb-2 scroll-animate-left'
                  style={{ transitionDelay: '0.3s' }}
                >
                    <span className='font-bold text-cyan-300'>Full Name :</span> 
                    <span className='ml-2'>Dissanayake Pathiranage Pathum Lakshan Dissanayake</span>
                </h3>
                <h3 
                  ref={infoRefs[1]}
                  className='mb-2 scroll-animate-left'
                  style={{ transitionDelay: '0.4s' }}
                >
                    <span className='font-bold text-cyan-300'>Address :</span> 
                    <span className='ml-2'>Kurunegala, Sri Lanka</span>
                </h3>
                <h3 
                  ref={infoRefs[2]}
                  className='mb-2 scroll-animate-left'
                  style={{ transitionDelay: '0.5s' }}
                >
                    <span className='font-bold text-cyan-300'>Phone :</span> 
                    <span className='ml-2'>+94 76 734 2605 / +94 72 999 7763</span>
                </h3>
                <h3 
                  ref={infoRefs[3]}
                  className='mb-2 scroll-animate-left'
                  style={{ transitionDelay: '0.6s' }}
                >
                    <span className='font-bold text-cyan-300'>Email :</span> 
                    <span className='ml-2'>pathumlk.diz@gmail.com</span>
                </h3>
                <h3 
                  ref={infoRefs[4]}
                  className='mb-2 scroll-animate-left'
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