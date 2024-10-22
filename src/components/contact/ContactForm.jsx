import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    description: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Show submitting toast
    toast.info('Submitting...', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, 
    });

    emailjs
      .sendForm('service_yo1va4q', 'template_0kbg0gn', form.current, {
        publicKey: 'M_KUKyW5M75z-BFy1',
      })
      .then(
        () => {
          toast.success('Email sent successfully!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, 
          });
        },
        // eslint-disable-next-line no-unused-vars
        (error) => {
          toast.error('Failed to send email.', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, 
          });
        },
      );

    // Clear the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      reason: '',
      description: '',
    });
  };

  return (
    <div className="w-full mt-16 mb-6 sm:w-1/2 p-6 bg-slate-950 text-white">
      <h2 className="text-center text-3xl font-bold text-cyan-400 mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 border p-4 rounded-xl">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Pathum Dissanayake"
            className="w-full p-2 bg-slate-800 rounded text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="pathumlk.diz@gmail.com"
            className="w-full p-2 bg-slate-800 rounded text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+94767342605"
            className="w-full p-2 bg-slate-800 rounded text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="reason" className="block mb-2">Why are you hiring me?</label>
          <input
            type="text"
            name="reason"
            id="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="To create a portfolio website"
            className="w-full p-2 bg-slate-800 rounded text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Briefly explain what you need..."
            className="w-full p-2 h-40 bg-slate-800 rounded text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="px-20 py-2 bg-white rounded-xl hover:bg-cyan-400 text-slate-900 hover:text-white flex justify-center mx-auto">
          Submit
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
