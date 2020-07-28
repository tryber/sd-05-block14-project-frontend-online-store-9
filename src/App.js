import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './page/List';
import Cart from './page/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={List} />
        <Route path="/cart" component={Cart} />
      </BrowserRouter>
    </div>
  );
}

export default App;
