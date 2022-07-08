import React from 'react';
import PropTypes from 'prop-types';
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

render() {
  const { result } = this.state;
  return (
    <div>
      <img src={ result.thumbnail } alt={ result.title } />
      <p data-testid="product-detail-name">{result.title}</p>
      <p>{result.price }</p>
    </div>
  );
}
}

ProductDetail.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProductDetail;
