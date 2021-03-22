import request from 'graphql-request';
import React, { useContext, useEffect, useState } from 'react';
import MembersCard from '../components/MembersCard';
import { AppContext } from '../context';
import '../styles/Members.css';

const Members = () => {
  const { setOpenWho, setUnderscore } = useContext(AppContext);
  const [membersInfo, setMembersInfo] = useState([]);

  useEffect(() => {
    setOpenWho(true);
    setUnderscore('members');
    const fetchMembers = async () => {
      const { members } = await request(
        process.env.REACT_APP_GRAPHCMS_URI,
        `
          query {
            members {
              name
              bio
              photo {
                url
              }
            }
          }
        `,
      );
      setMembersInfo(members);
    };
    fetchMembers();
  }, []);

  return (
    <article className="content-body">
      <h2>Integrantes</h2>
      <MembersCard members={membersInfo} />
    </article>
  );
};

export default Members;
