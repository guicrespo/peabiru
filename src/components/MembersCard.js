import React from 'react';
import members from '../mocks/membersMock';

const MembersCard = () => (
  <section>
    {members.map(({ name, biography, photo }) => (
      <article className="members-card" key={name}>
        <img src={photo} alt={`retrato do ${name}`} />
        <div className="members-card-text">
          <h3>{name}</h3>
          <p>{biography}</p>
        </div>
      </article>
    ))}
  </section>
);

export default MembersCard;
