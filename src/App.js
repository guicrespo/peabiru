import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppProvider } from './context';
import LateralMenu from './pages/LateralMenu';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
import Members from './pages/Members';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';
import Events from './pages/Events';
import Partners from './pages/Partners';
import Publications from './pages/Publications';
import Galery from './pages/Galery';
import Contact from './pages/Contact';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import './styles/LateralMenu.css';
import './styles/Content.css';

function App() {
  return (
    <section className="body">
      <AppProvider>
        <BrowserRouter>
          <section className="mobile-page-title-section">
            <h1 className="mobile-page-title">
              <a href="/">
                PEABIRU
              </a>
            </h1>
          </section>
          <LateralMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quem-somos/historia" component={HistoryPage} />
            <Route exact path="/quem-somos/integrantes" component={Members} />
            <Route exact path="/atividades/projetos" component={Projects} />
            <Route exact path="/atividades/calendario" component={Calendar} />
            <Route exact path="/atividades/eventos" component={Events} />
            <Route exact path="/atividades/parcerias" component={Partners} />
            <Route exact path="/blog" component={BlogList} />
            <Route path="/blog/:slug" component={BlogPost} />
            <Route path="/publicacoes" component={Publications} />
            <Route path="/galeria" component={Galery} />
            <Route path="/contato" component={Contact} />
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </section>
  );
}

export default App;
