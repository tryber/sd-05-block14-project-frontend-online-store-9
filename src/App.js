import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/cart" component={Cart} />
        <Route exact path="/" component={ProductList} />
        <Route path="/details/:id" component={ProductDetails} />
        <Route path="/payment" component={Payment} />
      </BrowserRouter>
    </div>
  );
}

export default App;
