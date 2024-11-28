import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const ContactMe = () => {
  return (
    <section id="contact" className="min-h-screen text-white bg-slate-950">
      <div className='flex-row justify-center w-full max-w-6xl py-4 mx-auto top-16 md:flex'>
        <div className='flex-row justify-center w-full py-4 md:flex'>
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
