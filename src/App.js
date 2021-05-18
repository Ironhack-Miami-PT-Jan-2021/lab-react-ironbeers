import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components imports
import nothome from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={nothome} />
      </Switch>
    </div>
  );
}

export default App;
