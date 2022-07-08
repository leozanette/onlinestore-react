import React from 'react';
import PropTypes from 'prop-types';

class ItemCart extends React.Component {
  render() {
    const { title, price, quantity } = this.props;
    return (
      <div data-testid="shopping-cart-product-name">
        <h3>{ `${title},${price}` }</h3>
        <p data-testid="shopping-cart-product-quantity">
          { quantity }
        </p>
      </div>
    );
  }
}

ItemCart.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ItemCart;
