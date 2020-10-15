import React, { useState } from 'react';

const ContactForm = () => {
  const [senderInfo, setSenderInfo] = useState({ name: '', email: '', subject: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    setSenderInfo({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        type="text"
        required
        onChange={({ target: { value } }) => setSenderInfo({ ...senderInfo, name: value })}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        required
        onChange={({ target: { value } }) => setSenderInfo({ ...senderInfo, email: value })}
      />
      <label htmlFor="subject">Assunto</label>
      <input
        id="subject"
        type="text"
        required
        onChange={({ target: { value } }) => setSenderInfo({ ...senderInfo, subject: value })}
      />
      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        rows="10"
        required
        onChange={({ target: { value } }) => setSenderInfo({ ...senderInfo, message: value })}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
