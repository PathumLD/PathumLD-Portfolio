import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const ContactMe = () => {
  return (
    <section id='contact' className="min-h-screen bg-slate-950 text-white">
      <div className='top-16 max-w-6xl mx-auto md:flex w-full py-4 flex-row justify-center'>
        <ContactForm />
        {/* <div className='relative  md:w-full'> */}
          <ContactInfo />
        {/* </div> */}
      </div>
    </section>
  );
};

export default ContactMe;
