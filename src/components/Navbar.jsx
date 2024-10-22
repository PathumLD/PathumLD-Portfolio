import { useState, useEffect } from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home'); // Active section state
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleLogo = () => {
    navigate('/');
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Select all sections

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold for better detection
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className='container items-center justify-center md:mx-auto max-w-lg  sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'>
      <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border z-50 border-black border-opacity-20 rounded-full mx-2'>
        <div className='py-4 mx-auto'>
          <div className='flex justify-between items-center mx-6'>
            {/* Logo and title */}
            <button onClick={toggleLogo}>
              <h1 className='font-bold text-2xl text-white'>Pathum<span className='text-cyan-400'>LD</span></h1>
            </button>
            {/* Mobile menu icon */}
            <div className='sm:hidden'>
              <button
                onClick={toggleModal}
                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-400'
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
                    <a
                      href='#home'
                      className={`underline-animation ${
                        activeSection === '#home' ? 'text-cyan-400 font-semibold' : 'text-white'
                      }`}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='#about'
                      className={`underline-animation ${
                        activeSection === '#about' ? 'text-cyan-400 font-semibold' : 'text-white'
                      }`}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href='#skills'
                      className={`underline-animation ${
                        activeSection === '#skills' ? 'text-cyan-400 font-semibold' : 'text-white'
                      }`}
                    >
                      Certificates
                    </a>
                  </li>
                  <li>
                    <a
                      href='#projects'
                      className={`underline-animation ${
                        activeSection === '#projects' ? 'text-cyan-400 font-semibold' : 'text-white'
                      }`}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href='#contact'
                      className={`underline-animation ${
                        activeSection === '#contact' ? 'text-cyan-400 font-semibold' : 'text-white'
                      }`}
                    >
                      Contact Me
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
          <div className='bg-black bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-3xl z-50 h-72 mt-4'>
            <div className='px-2 pt-2 pb-3 text-center'>
              <div className='flex flex-col items-center space-y-4 mt-8 justify-center'>
                <a
                  href='#home'
                  className={`block px-3 py-2 rounded-md text-base font-medium underline-animation ${
                    activeSection === '#home' ? 'text-white' : 'text-white'
                  }`}
                >
                  Home
                </a>
                <a
                  href='#about'
                  className={`block px-3 py-2 rounded-md text-base font-medium underline-animation ${
                    activeSection === '#about' ? 'text-cyan-400' : 'text-white'
                  }`}
                >
                  About
                </a>
                <a
                    href='#skills'
                    className={`underline-animation ${
                      activeSection === '#skills' ? 'text-cyan-400 font-semibold' : 'text-white'
                    }`}
                  >
                    Certificates
                </a>
                <a
                  href='#projects'
                  className={`block px-3 py-2 rounded-md text-base font-medium underline-animation ${
                    activeSection === '#projects' ? 'text-cyan-400' : 'text-white'
                  }`}
                >
                  Projects
                </a>
                <a
                  href='#contact'
                  className={`block px-3 py-2 rounded-md text-base font-medium underline-animation ${
                    activeSection === '#contact' ? 'text-cyan-400' : 'text-white'
                  }`}
                >
                  Contact Me
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
