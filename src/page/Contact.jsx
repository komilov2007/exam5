import { memo } from 'react';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';

const Contact = () => {
  return (
    <div className="mt-20 container max-w-7xl mx-auto ">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default memo(Contact);
