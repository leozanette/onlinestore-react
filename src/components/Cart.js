import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';

class Cart extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <section>
        { result.map((item) => (
          <div key={ item.id }>
            <ItemCart
              title={ item.title }
              price={ item.price }
              quantity={ result.length }
            />
          </div>
        )) }
        <div>
          <h2 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        </div>
        <Link
          to="/checkout"
          data-testid="checkout-products"
        />
      </section>
    );
  }
}

Cart.propTypes = {
  result: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Cart;
