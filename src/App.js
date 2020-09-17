import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppProvider } from './context';
import HistoryPage from './pages/HistoryPage';
import LateralMenu from './pages/LateralMenu';
import './styles/LateralMenu.css';
import './styles/Content.css';

function App() {
  return (
    <section className="body">
      <AppProvider>
        <BrowserRouter>
          <LateralMenu />
          <Switch>
            <Route exact path="/quem-somos/historia" component={HistoryPage} />
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </section>
  );
}

export default App;
