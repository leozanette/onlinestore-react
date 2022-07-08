import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
        <Link to="/checkout" data-testid="checkout-products">Finalizar Compra!</Link>
      </div>
    );
  }
}

export default Cart;
