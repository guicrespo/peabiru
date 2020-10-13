import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppProvider } from './context';
import LateralMenu from './pages/LateralMenu';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
import Members from './pages/Members';
import './styles/LateralMenu.css';
import './styles/Content.css';
import Projects from './pages/Projects';

function App() {
  return (
    <section className="body">
      <AppProvider>
        <BrowserRouter>
          <LateralMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quem-somos/historia" component={HistoryPage} />
            <Route path="/quem-somos/integrantes" component={Members} />
            <Route path="/atividades/projetos" component={Projects} />
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </section>
  );
}

export default App;
