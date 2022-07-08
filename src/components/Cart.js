import React from 'react';
import PropTypes from 'prop-types';
import ItemCart from './ItemCart';

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <section>
        { cartItems.map((item) => (
          <div key={ item.id }>
            <ItemCart
              name={ item.name }
              price={ item.price }
              quantity={ cartItems.length }
            />
          </div>
        )) }
        <div>

          <h2 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        </div>
      </section>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Cart;
