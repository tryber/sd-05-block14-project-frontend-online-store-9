import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ProductList } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
