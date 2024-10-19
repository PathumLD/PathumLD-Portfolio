import { useState } from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";

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
    <nav className='container flex items-center justify-center  md:mx-auto  max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'>
      <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-black border-opacity-20 rounded-full'>
        <div className='py-4 mx-auto'>
          <div className='flex justify-between items-center gap-60 md:gap-[40rem] mx-10'>
            {/* Logo and title */}
            <button onClick={toggleLogo}>
              <h1 className='font-bold text-2xl text-cyan-400'>PathumLD</h1>
            </button>
            {/* Mobile menu icon */}
            <div className='sm:hidden'>
              <button
                onClick={toggleModal}
                className='inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-cyan-600'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                {!isModalOpen ? (
                  <HiOutlineBars3BottomRight className="h-6 w-6" />
                ) : (
                  <MdOutlineClose className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <ul className='flex justify-end gap-6'>
                  <li>
                    <a href='#home' className='text-cyan-400 underline-animation'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#about' className='text-cyan-400 underline-animation'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='#projects' className='text-cyan-400 underline-animation'>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href='#contact' className='text-cyan-400 underline-animation'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isModalOpen && (
        <div className='sm:hidden' id='mobile-menu'>
          <div className='bg-black bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-3xl h-72 mt-4'>
            <div className='px-2 pt-2 pb-3 text-center'>
              <div className='flex flex-col items-center space-y-4 mt-8 justify-center'>
                <a href='#home' className='block px-3 py-2 rounded-md text-base font-medium text-cyan-400 hover:text-cyan-300 underline-animation'>
                  Home
                </a>
                <a href='#about' className='block px-3 py-2 rounded-md text-base font-medium text-cyan-400 hover:text-cyan-300 underline-animation'>
                  About
                </a>
                <a href='#projects' className='block px-3 py-2 rounded-md text-base font-medium text-cyan-400 hover:text-cyan-300 underline-animation'>
                  Projects
                </a>
                <a href='#contact' className='block px-3 py-2 rounded-md text-base font-medium text-cyan-400 hover:text-cyan-300 underline-animation'>
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
