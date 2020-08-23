import React, { useState } from 'react';

function NavBar() {
  const [openWho, setOpenWho] = useState(false);
  const [openActivities, setOpenActivities] = useState(false);

  return (
    <nav>
      <section>
        <ul className="lateral-menu-list">
          <li><a href="/">Início</a></li>
          <li>
            <button
              type="button"
              onClick={() => {
                setOpenActivities(false);
                setOpenWho(!openWho);
              }}
              style={{ backgroundColor: 'transparent', border: 'none', padding: 0, color: 'white' }}
            >
              Quem Somos
            </button>
            <div className={openWho && 'toggle-arrow'}>▼</div>
            {
              openWho
              && (
                <ul>
                  <a href="/quem-somos/historia"><li>História</li></a>
                  <a href="/quem-somos/integrantes"><li>Integrantes</li></a>
                </ul>
              )
            }
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setOpenWho(false);
                setOpenActivities(!openActivities);
              }}
              style={{ backgroundColor: 'transparent', border: 'none', padding: 0, color: 'white' }}
            >
              Atividades
            </button>
            <div className={openActivities && 'toggle-arrow'}>▼</div>
            {
              openActivities
              && (
                <ul>
                  <a href="/atividades/projetos"><li>Projetos</li></a>
                  <a href="/atividades/calendario"><li>Calendário</li></a>
                  <a href="/atividades/eventos"><li>Eventos</li></a>
                  <a href="/atividades/parcerias"><li>Parcerias</li></a>
                </ul>
              )
            }
          </li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/publicacoes">Publicações</a></li>
          <li><a href="/galeria">Galeria</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </section>
    </nav>
  );
}

export default NavBar;
