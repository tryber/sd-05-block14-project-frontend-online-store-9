import React from 'react';
import './App.css';
import * as api from './services/api';
import Categories from './components/Categories';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Categories />
      <List />
    </div>
  );
}

export default App;
