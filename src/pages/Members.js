import React, { useContext, useEffect } from 'react';
import MembersCard from '../components/MembersCard';
import { AppContext } from '../context';
import '../styles/Members.css';

const Members = () => {
  const { setOpenWho, setUnderscore } = useContext(AppContext);

  useEffect(() => {
    setOpenWho(true);
    setUnderscore('members');
  }, []);

  return (
    <article className="content-body">
      <h2>Integrantes</h2>
      <MembersCard />
    </article>
  );
};

export default Members;
