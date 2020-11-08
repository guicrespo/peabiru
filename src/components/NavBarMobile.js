import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import NavBar from './NavBar';
import PeabiruLogoComponent from './PeabiruLogo';
import SocialMediaNavBar from './SocialMediaNavBar';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '20px',
    height: '15px',
    left: '20px',
    top: '24px',
  },
  bmBurgerBars: {
    background: 'rgb(255, 153, 0)',
    height: '13%',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: 'rgb(255, 153, 0)',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '16rem',
    // maxWidth: '16rem',
    top: '0px',
    left: '0px',
  },
  bmMenu: {
    background: '#990900',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    border: '1px solid rgb(255, 153, 0)',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const NavBarMobile = () => (
  <section className="hamburger-menu">
    <Menu styles={styles}>
      <PeabiruLogoComponent />
      <NavBar />
      <SocialMediaNavBar />
    </Menu>
  </section>
);

export default NavBarMobile;
