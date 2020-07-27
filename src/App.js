import React from 'react';
import './App.css';
import * as api from './services/api';
import { BrowserRouter, Switch } from 'react-router-dom';
import Categories from './components/Categories';

function App() {
  api.getCategories().then(category => console.log(category));
  return (
    <div className="App">
      <Categories />
    </div>
  );
}

export default App;

// 2. Criar página de listagem de produtos vazia
// A tela básica da plataforma é a tela de listagem de produtos, onde quem usa buscará o que quer para adicionar ao carrinho e filtrará suas buscas.

// Esta página deve ficar no path /.
// Mostre a mensagem "Digite algum termo de pesquisa ou escolha uma categoria.".
// Adicione o atributo data-testid com o valor home-initial-message no elemento da mensagem.