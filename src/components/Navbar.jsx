import { useState } from 'react';
import { memo } from 'react';
import img1 from '../assets/react.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleLogo = () => {
    navigate('/');
  };

  return (
    <nav className=' container mx-auto max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'>
      <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-black border-opacity-20 rounded-full'>
        <div className='py-4 mx-auto'>
          <div className='flex justify-between mx-20'>
            <button onClick={toggleLogo}>
              <img src={img1} alt='logo' />
            </button>
            <div className='absolute inset-y-0 right-12 flex items-center sm:hidden'>
              <button
                onClick={toggleModal}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                {!isModalOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                )}
              </button>
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <ul className='flex justify-end gap-6'>
                  <li>
                    <a href='#home' className='text-teal-200 underline-animation'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#about' className='text-teal-200 underline-animation'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='#projects' className='text-teal-200 underline-animation'>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href='#contact' className='text-teal-200 underline-animation'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className='sm:hidden' id='mobile-menu'>
          <div className='bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-3xl h-72 mt-6'>
            <div className='px-2 pt-2 pb-3 text-center'>
              <div className='flex flex-col items-center space-y-4 mt-8 justify-center'>
                <a href='#home' className='block px-3 py-2 rounded-md text-base font-medium text-stone-500 hover:text-stone-600 underline-animation'>
                  Home
                </a>
                <a href='#about' className='block px-3 py-2 rounded-md text-base font-medium text-stone-500 hover:text-stone-600 underline-animation'>
                  About
                </a>
                <a href='#projects' className='block px-3 py-2 rounded-md text-base font-medium text-stone-500 hover:text-stone-600 underline-animation'>
                  Projects
                </a>
                <a href='#contact' className='block px-3 py-2 rounded-md text-base font-medium text-stone-500 hover:text-stone-600 underline-animation'>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);
