import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProductList from './pages/ProductList';

import Cart from './page/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </BrowserRouter>
    </div>
  );
}

export default App;
