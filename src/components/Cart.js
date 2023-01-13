import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      resultCart: [],
    };
  }

  componentDidMount() {
    const { result } = this.props;
    this.setState({ resultCart: result });
  }

  resultRemoveDup = (resultCart) => {
    const noMagic = -1;
    const resultFiltered = [];
    for (let index = 0; index < resultCart.length; index += 1) {
      if (resultFiltered.indexOf(resultCart[index]) === noMagic) {
        resultFiltered.push(resultCart[index]);
      }
    }
    return resultFiltered;
  }

  render() {
    const { resultCart } = this.state;
    return (
      <section>
        { this.resultRemoveDup(resultCart).map((item) => (
          <div key={ item.id }>
            <ItemCart
              title={ item.title }
              price={ item.price }
            />

          </div>
        )) }
        <div>
          <h2 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        </div>
        <Link
          to="/onlinestore/checkout"
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
