import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';

const Galery = () => {
  const { setUnderscore } = useContext(AppContext);

  useEffect(() => {
    setUnderscore('galery');
  }, []);

  return (
    <section className="content-body">
      <h2>Galeria</h2>
      <p><em>Em construção.</em></p>
    </section>
  );
};

export default Galery;
