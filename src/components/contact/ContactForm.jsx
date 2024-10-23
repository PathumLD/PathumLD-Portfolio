import { useState, useRef } from 'react';
import { Mail, Phone, User, Send, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [activeField, setActiveField] = useState(null);
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

  const handleFocus = (field) => setActiveField(field);
  const handleBlur = () => setActiveField(null);

  const sendEmail = (e) => {
    e.preventDefault();

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
          setFormData({
            name: '',
            email: '',
            phone: '',
            reason: '',
            description: '',
          });
        },
        () => {
          toast.error('Failed to send email.', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        },
      );
  };

  return (
    <section className="w-full  max-w-xl mx-auto p-4">
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px] rounded-2xl">
        <div className="bg-gray-900 rounded-2xl p-8">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Get in <span className='text-white'>Touch</span>
              </h2>
              <p className="text-gray-400">
                Share your vision and I'll help bring it to life
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-4  mb-20">
              <div className={`transition-transform duration-300 ${
                activeField === 'name' ? 'scale-105' : ''
              }`}>
                <label className="block text-sm text-gray-400 mb-1">Your Name</label>
                <div className="relative">
                  <div className={`absolute left-3 top-3 transition-colors duration-300 ${
                    activeField === 'name' ? 'text-blue-400' : 'text-gray-500'
                  }`}>
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 pl-9 pr-4 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Pathum Dissanayake"
                    required
                  />
                </div>
              </div>

              <div className={`transition-transform duration-300 ${
                activeField === 'email' ? 'scale-105' : ''
              }`}>
                <label className="block text-sm text-gray-400 mb-1">Email Address</label>
                <div className="relative">
                  <div className={`absolute left-3 top-3 transition-colors duration-300 ${
                    activeField === 'email' ? 'text-blue-400' : 'text-gray-500'
                  }`}>
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 pl-9 pr-4 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="pathumlk.diz@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className={`transition-transform duration-300 ${
                activeField === 'phone' ? 'scale-105' : ''
              }`}>
                <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
                <div className="relative">
                  <div className={`absolute left-3 top-3 transition-colors duration-300 ${
                    activeField === 'phone' ? 'text-blue-400' : 'text-gray-500'
                  }`}>
                    <Phone size={16} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 pl-9 pr-4 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="+94767342605"
                    required
                  />
                </div>
              </div>

              <div className={`transition-transform duration-300 ${
                activeField === 'reason' ? 'scale-105' : ''
              }`}>
                <label className="block text-sm text-gray-400 mb-1">Why are you hiring me?</label>
                <div className="relative">
                  <div className={`absolute left-3 top-3 transition-colors duration-300 ${
                    activeField === 'reason' ? 'text-blue-400' : 'text-gray-500'
                  }`}>
                    <MessageSquare size={16} />
                  </div>
                  <input
                    type="text"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    onFocus={() => handleFocus('reason')}
                    onBlur={handleBlur}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 pl-9 pr-4 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="To create a portfolio website"
                    required
                  />
                </div>
              </div>

              <div className={`transition-transform duration-300 ${
                activeField === 'description' ? 'scale-105' : ''
              }`}>
                <label className="block text-sm text-gray-400 mb-1">Project Details</label>
                <div className="relative">
                  <div className={`absolute left-3 top-3 transition-colors duration-300 ${
                    activeField === 'description' ? 'text-blue-400' : 'text-gray-500'
                  }`}>
                    <MessageSquare size={16} />
                  </div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    onFocus={() => handleFocus('description')}
                    onBlur={handleBlur}
                    className="w-full min-h-32 bg-gray-800/50 border border-gray-700 rounded-lg py-2 pl-9 pr-4 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Briefly explain what you need..."
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500  to-cyan-500 text-white rounded-lg py-3 px-4 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Send size={16} />
                  <span>Send Message</span>
                </div>
              </button>

              <div className="bg-gray-800/50 border border-gray-700  rounded-lg p-4">
                <p className="text-sm text-red-400">
                  Your information is protected and will never be shared with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactForm;