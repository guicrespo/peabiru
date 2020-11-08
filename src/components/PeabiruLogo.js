import React from 'react';
import PeabiruLogo from '../assets/logos/peabiru-logo-pequi.svg';

const PeabiruLogoComponent = () => (
  <section>
    <img
      className="peabiru-logo"
      src={PeabiruLogo}
      alt={`logo do grupo Peabiru constituída por um mapa dos rios da América Latina estilizado como "veias"
com o nome PEABIRU escrito em caixa alta na parte inferior, dentro do mapa, localizado onde seria o caminho de Peabiru`}
    />
  </section>
);

export default PeabiruLogoComponent;
