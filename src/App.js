import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }

  getFromHome = (param) => {
    const dataCart = param;
    this.setState((prevState) => ({
      result: [...prevState.result, ...dataCart],
    }));
  }

  render() {
    const { result } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home getFromHome={ this.getFromHome } />
          </Route>
          <Route path="/cart">
            <Cart result={ result } />
          </Route>
          <Route
            path="/product/:id"
            render={ (props) => (<ProductDetail
              { ...props }
              getFromHome={ this.getFromHome }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
