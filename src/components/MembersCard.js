import React from 'react';
import PropTypes from 'prop-types';

const MembersCard = ({ members }) => (
  <section>
    {members.map(({ name, bio, photo: { url } }) => (
      <article className="members-card" key={name}>
        <img src={url} alt={`retrato do ${name}`} />
        <div className="members-card-text">
          <h3>{name}</h3>
          <p>{bio}</p>
        </div>
      </article>
    ))}
  </section>
);

MembersCard.propTypes = {
  members: PropTypes.instanceOf(Array).isRequired,
};

export default MembersCard;
