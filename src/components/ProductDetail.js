import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductDetail } from '../services/api';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    this.renderProductDetail();
  }

renderProductDetail = async () => {
  const { location } = this.props;
  const currentLocation = location.pathname.replace('/product/', '');
  const result = await getProductDetail(currentLocation);
  this.setState({ result });
}

passData = () => {
  const { getFromHome } = this.props;
  const { result } = this.state;
  getFromHome([result]);
}

render() {
  const { result } = this.state;
  return (
    <div>
      <img src={ result.thumbnail } alt={ result.title } />
      <p data-testid="product-detail-name">{result.title}</p>
      <p>{result.price }</p>
      <input
        data-testid="product-detail-add-to-cart"
        type="button"
        onClick={ this.passData }
        id={ result.id }
      />
      <Link
        data-testid="shopping-cart-button"
        to="/cart"
      >
        Cart
      </Link>
    </div>
  );
}
}

ProductDetail.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  getFromHome: PropTypes.func.isRequired,
};

export default ProductDetail;
