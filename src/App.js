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
      cartItem: [],
    };
  }

 test = (param) => { console.log(param)}

 render() {
   return (
     <BrowserRouter>
       <Switch>
         <Route
           path="/"
           exact
           render={ (props) => <Home { ...props } test={ this.test } /> }
         />
         ;
         <Route path="/cart" component={ Cart } />
         <Route path="/product/:id" component={ ProductDetail } />
       </Switch>
     </BrowserRouter>
   );
 }
}

export default App;
