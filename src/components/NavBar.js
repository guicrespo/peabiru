import React, { useContext } from 'react';
import { AppContext } from '../context';

const className = (item, underscore) => {
  if (item === underscore) {
    return 'permanent_underscore';
  }
  return undefined;
};

const WhoWeAre = () => {
  const { openWho, setOpenWho, underscore } = useContext(AppContext);

  return (
    <li className="line">
      <button
        type="button"
        onClick={() => setOpenWho(!openWho)}
        className={`custom-underline ${className('history', underscore) || className('members', underscore)}`}
      >
        Quem Somos
      </button>
      <div className={openWho ? 'toggle-arrow' : undefined}>▼</div>
      {
        openWho
        && (
          <ul>
            <li className={`sub-line ${className('history', underscore)}`}>
              <a href="/quem-somos/historia" className={`sub-custom-underline ${className('history', underscore)}`}>
                História
              </a>
            </li>
            <li className={`sub-line ${className('members', underscore)}`}>
              <a href="/quem-somos/integrantes" className={`sub-custom-underline ${className('members', underscore)}`}>
                Integrantes
              </a>
            </li>
          </ul>
        )
      }
    </li>
  );
};

const Activities = () => {
  const { openActivities, setOpenActivities, underscore } = useContext(AppContext);
  const pages = ['projects', 'calendar', 'events', 'partners'];

  return (
    <li className="line">
      <button
        type="button"
        onClick={() => setOpenActivities(!openActivities)}
        className={
          `custom-underline 
          ${pages.includes(underscore)
            ? 'permanent_underscore'
            : undefined}`
        }
      >
        Atividades
      </button>
      <div className={openActivities ? 'toggle-arrow' : undefined}>▼</div>
      {
        openActivities
        && (
          <ul>
            <li className={`sub-line ${underscore === 'projects' ? 'permanent_underscore' : undefined}`}>
              <a
                href="/atividades/projetos"
                className={`sub-custom-underline ${underscore === 'projects' ? 'permanent_underscore' : undefined}`}
              >
                Projetos
              </a>
            </li>
            <li className={`sub-line ${underscore === 'calendar' ? 'permanent_underscore' : undefined}`}>
              <a href="/atividades/calendario" className={`sub-custom-underline ${underscore === 'calendar' ? 'permanent_underscore' : undefined}`}>
                Calendário
              </a>
            </li>
            <li className={`sub-line ${underscore === 'events' ? 'permanent_underscore' : undefined}`}>
              <a href="/atividades/eventos" className={`sub-custom-underline ${underscore === 'events' ? 'permanent_underscore' : undefined}`}>
                Eventos
              </a>
            </li>
            <li className={`sub-line ${underscore === 'partners' ? 'permanent_underscore' : undefined}`}>
              <a href="/atividades/parcerias" className={`sub-custom-underline ${underscore === 'partners' ? 'permanent_underscore' : undefined}`}>
                Parcerias
              </a>
            </li>
          </ul>
        )
      }
    </li>
  );
};

function NavBar() {
  const { underscore } = useContext(AppContext);

  return (
    <nav>
      <section>
        <ul className="lateral-menu-list">
          <li className="line">
            <a href="/" className={`custom-underline ${underscore === 'home' ? 'permanent_underscore' : undefined}`}>
              Início
            </a>
          </li>
          <WhoWeAre />
          <Activities />
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
