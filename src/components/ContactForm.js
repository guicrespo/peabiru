import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const formInputs = (handleChange, senderInfo) => (
  // eslint-disable-next-line react/jsx-fragments
  <React.Fragment>
    <label htmlFor="name">Nome</label>
    <input id="name" name="name" type="text" required onChange={handleChange} value={senderInfo.name} />
    <label htmlFor="email">Email</label>
    <input id="email" name="email" type="email" required onChange={handleChange} value={senderInfo.email} />
    <label htmlFor="subject">Assunto</label>
    <input id="subject" name="subject" type="text" required onChange={handleChange} value={senderInfo.subject} />
    <label htmlFor="message">Mensagem</label>
    <textarea id="message" name="message" rows="10" required onChange={handleChange} value={senderInfo.message} />
  </React.Fragment>
);

const ContactForm = () => {
  const [senderInfo, setSenderInfo] = useState({ name: '', email: '', subject: '', message: '' });
  const [formResponse, setFormResponse] = useState({ success: '', error: '' });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSenderInfo({ ...senderInfo, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const emailSend = await emailjs.send('default_service', 'template_vw8pbqf', senderInfo, 'user_fcIgC0RhprNLAKkeITvTV');
      console.log('SUCCESS', emailSend.status, emailSend.text);
      setSenderInfo({ name: '', email: '', subject: '', message: '' });
      setFormResponse({ ...formResponse, success: 'Email enviado com sucesso.' });
    } catch (error) {
      console.error(error);
      setFormResponse({
        ...formResponse,
        error: 'Erro ao enviar. Tente novamente ou envie diretamente para nosso email ao lado.',
      });
    }
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      {formInputs(handleChange, senderInfo)}
      <button type="submit">Enviar</button>
      {formResponse.error && (
        <span style={{ color: 'red', marginTop: '1rem', fontSize: '0.8rem' }}>{formResponse.error}</span>
      )}
      {formResponse.success && (
        <span style={{ color: 'green', marginTop: '1rem', fontSize: '0.8rem' }}>{formResponse.success}</span>
      )}
    </form>
  );
};

export default ContactForm;
