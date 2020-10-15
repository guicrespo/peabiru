import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';

const Calendar = () => {
  const { setOpenActivities, setUnderscore } = useContext(AppContext);

  useEffect(() => {
    setOpenActivities(true);
    setUnderscore('calendars');
  }, []);

  return (
    <section className="content-body">
      <h2>Calendário</h2>
      <p><em>Em construção.</em></p>
    </section>
  );
};

export default Calendar;
