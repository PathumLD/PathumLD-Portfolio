import Image2 from '../../assets/Image2.jpg'

const AboutMe = () => {
    return (
      <div className="md:flex-row flex justify-between gap-10 mt-4 md:mt-8 flex-col ">
        <div className='w-60 h-72 justify-center items-center mx-auto md:justify-start md:w-96 md:h-[21.5rem]  object-cover  '>
            <img src={Image2} className='rounded-xl p-4 border-2  border-cyan-400' alt="Image2" />
        </div>
       <div className='text-white my-auto pt-10 md:pt-0 '>
            <h2 className="text-4xl font-bold my-3">Pathum Dissanayake</h2>
            <p className='mb-3'>
                I&rsquo;m a passionate software engineer with experience in building
                scalable web applications using modern technologies.
            </p>
            <div className=''>
                <h3 className=''><span className='font-bold'>Full Name :</span> <span className='ml-2'>Dissanayake Pathiranage Pathum Lakshan Dissanayake</span></h3>
                <h3 className=''><span className='font-bold'>Address :</span> <span className='ml-2'>Kurunegala, Sri Lanka</span></h3>
                <h3 className=''><span className='font-bold'>Phone :</span> <span className='ml-2'>+94 76 734 2605 / +94 72 999 7763</span></h3>
                <h3 className=''><span className='font-bold'>Email :</span> <span className='ml-2'>pathumlk.diz@gmail.com</span></h3>
                <h3 className=''><span className='font-bold'>Languages :</span> <span className='ml-2'>English, Sinhalese</span></h3>
            </div>
       </div>
      </div>
    );
  };
  export default AboutMe;