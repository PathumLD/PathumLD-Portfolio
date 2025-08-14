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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <nav className='container justify-center items-center max-w-lg md:mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'>
      <div className='z-50 mx-2 bg-white bg-opacity-10 rounded-full border border-black border-opacity-20 backdrop-filter backdrop-blur-lg'>
        <div className='py-4 mx-auto'>
          <div className='flex justify-between items-center mx-6'>
            {/* Logo and title */}
            <button onClick={toggleLogo}>
              <h1 className='text-2xl font-bold text-white'>Pathum<span className='text-cyan-400'>LD</span></h1>
            </button>
            {/* Mobile menu icon */}
            <div className='sm:hidden'>
              <button
                onClick={toggleModal}
                className='inline-flex justify-center items-center p-2 text-white rounded-md hover:text-cyan-400'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                {!isModalOpen ? (
                  <HiOutlineBars3BottomRight className="w-6 h-6" />
                ) : (
                  <MdOutlineClose className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <ul className='flex gap-6 justify-end text-base text-cyan-400'>
                  <li className=''>
                    <a
                      href='#home'
                      className={`underline-animation ${
                        activeSection === '#home' ? ' font-bold' : 'text-white'
                      }`}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='#about'
                      className={`underline-animation ${
                        activeSection === '#about' ? ' font-bold' : 'text-white'
                      }`}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href='#skills'
                      className={`underline-animation ${
                        activeSection === '#skills' ? ' font-bold' : 'text-white'
                      }`}
                    >
                      Certificates
                    </a>
                  </li>
                  <li>
                    <a
                      href='#projects'
                      className={`underline-animation ${
                        activeSection === '#projects' ? ' font-bold' : 'text-white'
                      }`}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href='#contact'
                      className={`underline-animation ${
                        activeSection === '#contact' ? ' font-bold' : 'text-white'
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
          <div className='z-50 mt-4 h-screen bg-cyan-400 bg-opacity-20 rounded-3xl backdrop-filter backdrop-blur-xl'>
            <div className='px-2 pt-2 pb-3 text-center'>
              <div className='flex flex-col justify-center items-center mt-8 space-y-4 text-xl text-cyan-400'>
                <a
                  href='#home'
                  className={`block px-3 py-2 rounded-md underline-animation ${
                    activeSection === '#home' ? 'font-bold' : 'text-white'
                  }`}
                >
                  Home
                </a>
                <a
                  href='#about'
                  className={`block px-3 py-2 rounded-md underline-animation ${
                    activeSection === '#about' ? 'font-bold' : 'text-white'
                  }`}
                >
                  About
                </a>
                <a
                    href='#skills'
                    className={`block px-3 py-2 rounded-md underline-animation ${
                      activeSection === '#skills' ? 'font-bold ' : 'text-white'
                    }`}
                  >
                    Certificates
                </a>
                <a
                  href='#projects'
                  className={`block px-3 py-2 rounded-md underline-animation ${
                    activeSection === '#projects' ? 'font-bold' : 'text-white'
                  }`}
                >
                  Projects
                </a>
                <a
                  href='#contact'
                  className={`block px-3 py-2 rounded-md underline-animation ${
                    activeSection === '#contact' ? 'font-bold' : 'text-white'
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
