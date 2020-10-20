import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import '../styles/Calendar.css';

const Calendar = () => {
  const { setOpenActivities, setUnderscore } = useContext(AppContext);

  useEffect(() => {
    setOpenActivities(true);
    setUnderscore('calendars');
  }, []);

  return (
    <section className="content-body">
      <h2>Calendário</h2>
      <article className="responsive-iframe-container big-container">
        <iframe
          title="peabiru-public-calendar"
          src="https://calendar.google.com/calendar/embed?src=mj38p8c22vvqfl7q7oif9uafc0%40group.calendar.google.com&ctz=America%2FMaceio"
          style={{ border: 0 }}
          width="100%"
          height="650"
          frameBorder="0"
          scrolling="no"
        />
      </article>
      <article className="responsive-iframe-container small-container">
        <iframe
          title="peabiru-public-calendar"
          src="https://calendar.google.com/calendar/embed?src=mj38p8c22vvqfl7q7oif9uafc0%40group.calendar.google.com&ctz=America%2FMaceio"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
        />
      </article>
    </section>
  );
};

export default Calendar;
