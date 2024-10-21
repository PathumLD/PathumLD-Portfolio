/* eslint-disable no-unused-vars */
import React from 'react'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

const Footer = () => {
  return (
    <section id='contact' className="min-h-screen  bg-slate-950 text-white">
      <div className='top-16 max-w-6xl mx-auto  md:flex  w-full py-4 flex-row justify-center'>
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  )
}

export default Footer