import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import MenuBar from './components/MenuBar';
import General from './pages/General';
import Monthly from './pages/Monthly';
import PayDay from './pages/PayDay';

function App() {

  return <Router>
    <div>
      <MenuBar />
      <Switch>
        <Route path="/mensal">
          <Monthly />
        </Route>
        <Route path="/pagamento">
          <PayDay />
        </Route>
        <Route path="/">
          <General />
        </Route>
      </Switch>
    </div>
  </Router>;
}

export default App;
