import React from 'react';
import PeabiruLogo from '../assets/images/peabiru-logo-pequi.svg';
import instaIcon from '../assets/icons/insta-icon.svg';
import twitterIcon from '../assets/icons/twitter-icon.svg';
import NavBar from '../components/NavBar';

function LateralMenu() {
  return (
    <aside className="lateral-menu">
      <section>
        <img
          className="peabiru-logo"
          src={PeabiruLogo}
          alt={`logo do grupo Peabiru constituída por um mapa dos rios da América Latina estilizado como "veias"
        com o nome PEABIRU escrito em caixa alta na parte inferior, dentro do mapa, localizado onde seria o caminho de Peabiru`}
        />
      </section>
      <NavBar />
      <section className="social-media">
        <a href="https://www.instagram.com/grupopeabiru/" target="_blank" rel="noopener noreferrer">
          <img src={instaIcon} alt="logo do instagram" />
        </a>
        <img src={twitterIcon} alt="logo do twitter" />
      </section>
    </aside>
  );
}

export default LateralMenu;
