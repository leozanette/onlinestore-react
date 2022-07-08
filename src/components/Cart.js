import React from 'react';
import PropTypes from 'prop-types';
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
      </section>
    );
  }
}

Cart.propTypes = {
  result: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Cart;
