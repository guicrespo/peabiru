import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';

const Members = () => {
  const { setOpenWho, setUnderscore } = useContext(AppContext);

  useEffect(() => {
    setOpenWho(true);
    setUnderscore('members');
  }, []);

  return (
    <article className="content-body">
      <h2>Integrantes</h2>
    </article>
  );
};

export default Members;
