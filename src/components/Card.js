import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { results, addToCart } = this.props;
    return (
      <div>
        { results.map((element) => (
          <div
            data-testid="product"
            key={ element.id }

          >
            <span>
              { element.title }
            </span>
            <img src={ element.thumbnail } alt={ element.title } />
            <span>
              { element.price }
            </span>
            <Link
              data-testid="product-detail-link"
              to={ `product/${element.id}` }
            >
              Details
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => addToCart([{
                price: element.price,
                title: element.title,
                quantity: 1,
              }]) }
              price={ element.price }
            >
              Add to cart
            </button>
          </div>

        )) }
      </div>

    );
  }
}

Card.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Card;
