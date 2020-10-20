import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

const Contact = () => {
  const { setUnderscore } = useContext(AppContext);

  useEffect(() => {
    setUnderscore('contacts');
  }, []);

  return (
    <section className="content-body">
      <h2>Contato</h2>
      <section className="contact-section">
        <ContactForm />
        <section className="other-contacts">
          <p>Ou envie um email para:</p>
          <a href="mailto:peabiru.pesquisa@gmail.com">peabiru.pesquisa@gmail.com</a>
        </section>
      </section>
    </section>
  );
};

export default Contact;
