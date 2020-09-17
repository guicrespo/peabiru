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
      {openWho
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
        )}
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
        className={`custom-underline  ${pages.includes(underscore) ? 'permanent_underscore' : undefined}`}
      >
        Atividades
      </button>
      <div className={openActivities ? 'toggle-arrow' : undefined}>▼</div>
      {openActivities
        && (
          <ul>
            <li className={`sub-line ${className('projects', underscore)}`}>
              <a href="/atividades/projetos" className={`sub-custom-underline ${className('projects', underscore)}`}>
                Projetos
              </a>
            </li>
            <li className={`sub-line ${className('calendars', underscore)}`}>
              <a href="/atividades/calendario" className={`sub-custom-underline ${className('calendars', underscore)}`}>
                Calendário
              </a>
            </li>
            <li className={`sub-line ${className('events', underscore)}`}>
              <a href="/atividades/eventos" className={`sub-custom-underline ${className('events', underscore)}`}>
                Eventos
              </a>
            </li>
            <li className={`sub-line ${className('partners', underscore)}`}>
              <a href="/atividades/parcerias" className={`sub-custom-underline ${className('partners', underscore)}`}>
                Parcerias
              </a>
            </li>
          </ul>
        )}
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
            <a href="/" className={`custom-underline ${className('home', underscore)}`}>
              Início
            </a>
          </li>
          <WhoWeAre />
          <Activities />
          <li className="line">
            <a href="/blog" className={`custom-underline ${className('blog', underscore)}`}>Blog</a>
          </li>
          <li className="line">
            <a href="/publicacoes" className={`custom-underline ${className('publications', underscore)}`}>Publicações</a>
          </li>
          <li className="line">
            <a href="/galeria" className={`custom-underline ${className('galery', underscore)}`}>Galeria</a>
          </li>
          <li className="line">
            <a href="/contato" className={`custom-underline ${className('contacts', underscore)}`}>Contato</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default NavBar;
