import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';

const Publications = () => {
  const { setOpenActivities, setUnderscore } = useContext(AppContext);

  useEffect(() => {
    setOpenActivities(true);
    setUnderscore('publications');
  }, []);

  return (
    <section className="content-body">
      <h2>Publicações</h2>
      <p><em>Em construção.</em></p>
    </section>
  );
};

export default Publications;
