import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/cart" component={ Cart } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
