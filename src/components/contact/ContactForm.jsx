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
      position: "top-right",
      autoClose: 3000,
    });

    emailjs
      .sendForm('service_yo1va4q', 'template_0kbg0gn', form.current, {
        publicKey: 'M_KUKyW5M75z-BFy1',
      })
      .then(
        () => {
          toast.success('Email sent successfully!', {
            position: "top-right",
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
            position: "top-right",
            autoClose: 3000,
          });
        },
      );
  };

  return (
    <div className="w-full max-w-xl p-4 mx-auto">
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px] rounded-2xl">
        <div className="p-8 bg-gray-900 rounded-2xl">
          <div className="space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Get in <span className='text-white'>Touch</span>
              </h2>
              <p className="text-gray-400">
                Share your vision and I&#39;ll help bring it to life
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="mb-20 space-y-4">
              <div className={`transition-transform duration-300 ${
                activeField === 'name' ? 'scale-105' : ''
              }`}>
                <label className="block mb-1 text-sm text-gray-400">Your Name</label>
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
                    className="w-full py-2 pr-4 text-white transition-all duration-300 border border-gray-700 rounded-lg bg-gray-800/50 pl-9 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Pathum Dissanayake"
                    required
                  />
                </div>
              </div>

              <div className={`transition-transform duration-300 ${
                activeField === 'email' ? 'scale-105' : ''
              }`}>
                <label className="block mb-1 text-sm text-gray-400">Email Address</label>
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
                    className="w-full py-2 pr-4 text-white transition-all duration-300 border border-gray-700 rounded-lg bg-gray-800/50 pl-9 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="pathumlk.diz@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className={`transition-transform duration-300 ${
                activeField === 'phone' ? 'scale-105' : ''
              }`}>
                <label className="block mb-1 text-sm text-gray-400">Phone Number</label>
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
                    className="w-full py-2 pr-4 text-white transition-all duration-300 border border-gray-700 rounded-lg bg-gray-800/50 pl-9 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="+94767342605"
                    required
                  />
                </div>
              </div>

              <div className={`transition-transform duration-300 ${
                activeField === 'reason' ? 'scale-105' : ''
              }`}>
                <label className="block mb-1 text-sm text-gray-400">Why are you hiring me?</label>
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
                    className="w-full py-2 pr-4 text-white transition-all duration-300 border border-gray-700 rounded-lg bg-gray-800/50 pl-9 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="To create a portfolio website"
                    required
                  />
                </div>
              </div>

              <div className={`transition-transform duration-300 ${
                activeField === 'description' ? 'scale-105' : ''
              }`}>
                <label className="block mb-1 text-sm text-gray-400">Project Details</label>
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
                    className="w-full py-2 pr-4 text-white transition-all duration-300 border border-gray-700 rounded-lg min-h-32 bg-gray-800/50 pl-9 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Briefly explain what you need..."
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full px-4 py-3 text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Send size={16} />
                  <span>Send Message</span>
                </div>
              </button>

              <div className="p-4 border border-gray-700 rounded-lg bg-gray-800/50">
                <p className="text-sm text-red-400">
                  Your information is protected and will never be shared with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;