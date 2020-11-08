import React from 'react';
import NavBar from '../components/NavBar';
import NavBarMobile from '../components/NavBarMobile';
import PeabiruLogoComponent from '../components/PeabiruLogo';
import SocialMediaNavBar from '../components/SocialMediaNavBar';

const LateralMenu = () => (
  <aside>
    <section className="lateral-menu">
      <PeabiruLogoComponent />
      <NavBar />
      <SocialMediaNavBar />
    </section>
    <NavBarMobile />
  </aside>
);

export default LateralMenu;
