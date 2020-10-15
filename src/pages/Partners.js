import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import partners from '../mocks/partnersMock';

const Partners = () => {
  const { setOpenActivities, setUnderscore } = useContext(AppContext);

  useEffect(() => {
    setOpenActivities(true);
    setUnderscore('partners');
  }, []);

  return (
    <section className="content-body">
      <h2>Parcerias</h2>
      {partners.map(({ partner, description }) => (
        <article key={partner}>
          <h3>{partner}</h3>
          <p>{description}</p>
        </article>
      ))}
      {/* <p><em>Em construção.</em></p> */}
    </section>
  );
};

export default Partners;
