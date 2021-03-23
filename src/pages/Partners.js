import request from 'graphql-request';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';

const Partners = () => {
  const { setOpenActivities, setUnderscore } = useContext(AppContext);
  const [partnersData, setPartnersData] = useState([]);

  useEffect(() => {
    setOpenActivities(true);
    setUnderscore('partners');
    const fetchPartners = async () => {
      const { parcerias: partners } = await request(
        process.env.REACT_APP_GRAPHCMS_URI,
        `
          query {
            parcerias {
              partner
              description
            }
          }
        `,
      );
      setPartnersData(partners);
    };
    fetchPartners();
  }, []);

  return (
    <section className="content-body">
      <h2>Parcerias</h2>
      {partnersData.map(({ partner, description }) => (
        <article key={partner}>
          <h3>{partner}</h3>
          <p>{description}</p>
        </article>
      ))}
    </section>
  );
};

export default Partners;
