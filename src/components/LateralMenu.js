import React from 'react';
import PeabiruLogo from '../assets/images/peabiru-logo-pequi.svg';
import instaIcon from '../assets/icons/insta-icon.svg';
import twitterIcon from '../assets/icons/twitter-icon.svg';
import '../styles/LateralMenu.css';

function LateralMenu() {
  return (
    <nav className="lateral-menu">
      <section>
        <img
          className="peabiru-logo"
          src={PeabiruLogo}
          alt={`logo do grupo Peabiru constituída por um mapa dos rios da América Latina estilizado como "veias"
        com o nome PEABIRU escrito em caixa alta na parte inferior, dentro do mapa, localizado onde seria o caminho de Peabiru`}
        />
      </section>
      <section>
        <ul className="lateral-menu-list">
          <li>Início</li>
          <li>Meio</li>
          <li>Fim</li>
        </ul>
      </section>
      <section>
        <img src={instaIcon} alt="logo do instagram" />
        <img src={twitterIcon} alt="logo do twitter" />
      </section>
    </nav>
  );
}

export default LateralMenu;
