import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  passData = (e) => {
    const { results, getData } = this.props;
    const itemId = e.target.id;
    const resultFilterd = results.filter((ele) => ele.id === itemId);
    getData(resultFilterd);
  }

  render() {
    const { results } = this.props;
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
            <input
              data-testid="product-add-to-cart"
              type="button"
              onClick={ this.passData }
              id={ element.id }
              value=" Add To Cart"
            />
          </div>
        )) }
      </div>
    );
  }
}
Card.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  getData: PropTypes.func.isRequired,
};
export default Card;
