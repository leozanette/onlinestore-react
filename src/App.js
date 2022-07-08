import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/cart" component={ Cart } />
        <Route path="/product/:id" component={ ProductDetail } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
