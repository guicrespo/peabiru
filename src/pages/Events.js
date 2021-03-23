import request from 'graphql-request';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import { formatDateWithTime } from '../utils';

const Events = () => {
  const { setOpenActivities, setUnderscore } = useContext(AppContext);
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    setOpenActivities(true);
    setUnderscore('events');
    const fetchEvents = async () => {
      const { eventos: events } = await request(
        process.env.REACT_APP_GRAPHCMS_URI,
        `
          query {
            eventos {
              name
              description
              place
              date
              subscribe_link
            }
          }
        `,
      );
      setEventsData(events);
    };
    fetchEvents();
  }, []);

  return (
    <section className="content-body">
      <h2>Eventos</h2>
      {
        eventsData.length
          ? eventsData.map(({
            name, description, place, subscribe_link: url, date,
          }) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>
                {'Inscreva-se '}
                <a href={url} target="_blank" rel="noopener noreferrer">aqui</a>
              </p>
              <p>{`Local: ${place}`}</p>
              <p>{`Data: ${formatDateWithTime(date)}`}</p>
            </article>
          ))
          : <p><em>Em breve</em></p>
      }
    </section>
  );
};

export default Events;
