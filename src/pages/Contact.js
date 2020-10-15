import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import '../styles/Contact.css';

const Contact = () => {
  const { setUnderscore } = useContext(AppContext);
  const [senderInfo, setSenderInfo] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    setUnderscore('contacts');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    setSenderInfo({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="content-body">
      <h2>Contato</h2>
      <section className="contact-section">
        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" required onChange={({ target: { value } }) => setSenderInfo({ ...senderInfo, name: value })} />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required onChange={({ target: { value } }) => setSenderInfo({ ...senderInfo, email: value })} />
          <label htmlFor="subject">Assunto</label>
          <input id="subject" type="text" required onChange={({ target: { value } }) => setSenderInfo({ ...senderInfo, subject: value })} />
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" rows="10" required onChange={({ target: { value } }) => setSenderInfo({ ...senderInfo, message: value })} />
          <button type="submit">Enviar</button>
        </form>
        <section className="other-contacts">
          <p>Ou envie um email para:</p>
          <a href="mailto:peabiru@peabiru.com">peabiru@peabiru.com</a>
        </section>
      </section>
    </section>
  );
};

export default Contact;
