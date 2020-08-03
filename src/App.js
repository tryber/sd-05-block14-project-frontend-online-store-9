import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/cart" component={Cart} />
        <Route exact path="/" component={ProductList} />
        <Route path="/details/:id" component={ProductDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
