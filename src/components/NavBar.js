import React, { useContext } from 'react';
import { AppContext } from '../context';

function NavBar() {
  const { openWho, setOpenWho } = useContext(AppContext);
  const { openActivities, setOpenActivities } = useContext(AppContext);

  return (
    <nav>
      <section>
        <ul className="lateral-menu-list">
          <li className="line"><a href="/" className="custom-underline">Início</a></li>
          <li className="line">
            <button
              type="button"
              onClick={() => {
                setOpenActivities(false);
                setOpenWho(!openWho);
              }}
              className="custom-underline"
              style={{ backgroundColor: 'transparent', border: 'none', padding: 0, color: 'white' }}
            >
              Quem Somos
            </button>
            <div className={openWho && 'toggle-arrow'}>▼</div>
            {
              openWho
              && (
                <ul>
                  <li className="sub-line"><a href="/quem-somos/historia" className="sub-custom-underline">História</a></li>
                  <li className="sub-line"><a href="/quem-somos/integrantes" className="sub-custom-underline">Integrantes</a></li>
                </ul>
              )
            }
          </li>
          <li className="line">
            <button
              type="button"
              onClick={() => {
                setOpenWho(false);
                setOpenActivities(!openActivities);
              }}
              className="custom-underline"
              style={{ backgroundColor: 'transparent', border: 'none', padding: 0, color: 'white' }}
            >
              Atividades
            </button>
            <div className={openActivities && 'toggle-arrow'}>▼</div>
            {
              openActivities
              && (
                <ul>
                  <li className="sub-line"><a href="/atividades/projetos" className="sub-custom-underline">Projetos</a></li>
                  <li className="sub-line"><a href="/atividades/calendario" className="sub-custom-underline">Calendário</a></li>
                  <li className="sub-line"><a href="/atividades/eventos" className="sub-custom-underline">Eventos</a></li>
                  <li className="sub-line"><a href="/atividades/parcerias" className="sub-custom-underline">Parcerias</a></li>
                </ul>
              )
            }
          </li>
          <li className="line"><a href="/blog" className="custom-underline">Blog</a></li>
          <li className="line"><a href="/publicacoes" className="custom-underline">Publicações</a></li>
          <li className="line"><a href="/galeria" className="custom-underline">Galeria</a></li>
          <li className="line"><a href="/contato" className="custom-underline">Contato</a></li>
        </ul>
      </section>
    </nav>
  );
}

export default NavBar;
