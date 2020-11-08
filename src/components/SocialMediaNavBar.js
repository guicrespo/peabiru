import React from 'react';
import instaIcon from '../assets/icons/insta-icon.svg';
import twitterIcon from '../assets/icons/twitter-icon.svg';

const SocialMediaNavBar = () => (
  <section className="social-media">
    <a href="https://www.instagram.com/grupopeabiru/" target="_blank" rel="noopener noreferrer">
      <img src={instaIcon} alt="logo do instagram" />
    </a>
    <img src={twitterIcon} alt="logo do twitter" />
  </section>
);

export default SocialMediaNavBar;
