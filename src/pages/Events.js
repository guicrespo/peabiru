import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import events from '../mocks/eventsMock';

const Events = () => {
  const { setOpenActivities, setUnderscore } = useContext(AppContext);

  useEffect(() => {
    setOpenActivities(true);
    setUnderscore('events');
  }, []);

  return (
    <section className="content-body">
      <h2>Eventos</h2>
      {events.map(({ name, description, url, place, date }) => (
        <article key={name}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>
            {'Inscreva-se '}
            <a href={url} target="_blank" rel="noopener noreferrer">aqui</a>
          </p>
          <p>{`Local: ${place}`}</p>
          <p>{`Data: ${date}`}</p>
        </article>
      ))}
      {/* <p><em>Em breve</em></p> */}
    </section>
  );
};

export default Events;
