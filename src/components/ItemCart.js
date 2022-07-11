import React from 'react';
import PropTypes from 'prop-types';

class ItemCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  }

  decrement = () => {
    const { quantity } = this.state;
    if (quantity <= 1) return this.setState({ quantity: 1 });
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1,
    }));
  }

  render() {
    const { title, price } = this.props;
    const { quantity } = this.state;
    return (
      <div data-testid="shopping-cart-product-name">
        <h3>{ `${title},${price}` }</h3>
        <p data-testid="shopping-cart-product-quantity">
          <span>{ quantity }</span>
          <input
            type="submit"
            data-testid="product-increase-quantity"
            onClick={ this.increment }
            value="+"
          />
          <input
            type="submit"
            data-testid="product-decrease-quantity"
            onClick={ this.decrement }
            value="-"
          />
        </p>
      </div>
    );
  }
}

ItemCart.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemCart;
