import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const ContactMe = () => {
  return (
    <section id='contact' className="min-h-screen bg-slate-950 text-white">
      <div className='top-16 max-w-6xl mx-auto md:flex w-full py-4 flex-row justify-center'>
        <div className=' md:flex  w-full py-4 flex-row justify-center'>
          <ContactInfo />
          <div className='mt-12'>
            <ContactForm />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
