/* eslint-disable no-unused-vars */
import React from 'react'
import img1 from '../assets/react.svg'

const Navbar = () => {
  return (
    <>
        <nav className='container  h-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-black border-opacity-20 text-white py-4 mx-auto  rounded rounded-full'>
            <div className='flex justify-between mx-10'>
                <button><img src={img1} alt="logo" /></button>
                <ul className='flex justify-end  gap-6 '>
                    <li><a href="#home" className='text-black underline-animation'>Home</a></li>
                    <li><a href="#about" className='text-black underline-animation'>About</a></li>
                    <li><a href="#projects" className='text-black underline-animation'>Projects</a></li>
                    <li><a href="#contact" className='text-black underline-animation'>Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar