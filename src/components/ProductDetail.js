import React from 'react';
import PropTypes from 'prop-types';
import { getProductDetail } from '../services/api';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
      rating: '',
      ratingEmail: '',
      ratingText: '',
    };
  }

  componentDidMount() {
    this.renderProductDetail();
    this.getLocalStorage();
  }

renderProductDetail = async () => {
  const { location } = this.props;
  const currentLocation = location.pathname.replace('/product/', '');
  const result = await getProductDetail(currentLocation);
  this.setState({ result });
}

handleChange = (e) => {
  const { target } = e;
  const { value } = target;
  const { name } = target;
  this.setState({ [name]: value });
}

handleSaveButton = () => {
  const { rating, ratingEmail, ratingText } = this.state;
  localStorage
    .setItem('rating', rating);
  localStorage
    .setItem('ratingEmail', ratingEmail);
  localStorage
    .setItem('ratingText', ratingText);
}

getLocalStorage = () => {
  // const { rating, ratingEmail, ratingText } = this.state;
  const ratingStorage = localStorage.getItem('rating');
  const emailStorage = localStorage.getItem('ratingEmail');
  const textStorage = localStorage.getItem('ratingText');

  this.setState({ rating: ratingStorage });
  this.setState({ ratingEmail: emailStorage });
  this.setState({ ratingText: textStorage });
}

render() {
  const { result, rating, ratingEmail, ratingText } = this.state;
  return (
    <>
      <div>
        <img src={ result.thumbnail } alt={ result.title } />
        <p data-testid="product-detail-name">{result.title}</p>
        <p>{result.price }</p>
      </div>
      <div>
        <form>
          <input
            data-testid="product-detail-email"
            type="email"
            placeholder="email"
            name="ratingEmail"
            onChange={ this.handleChange }
          />
          <input
            type="textarea"
            data-testid="product-detail-evaluation"
            placeholder="Escreva sua avaliação"
            maxLength="2000"
            name="ratingText"
            onChange={ this.handleChange }
          />
          <label htmlFor="rating">
            <input
              type="radio"
              value="1"
              data-testid="1-rating"
              name="rating"
              onChange={ this.handleChange }
            />
            1
          </label>
          <label htmlFor="rating">
            <input
              type="radio"
              value="2"
              data-testid="2-rating"
              name="rating"
              onChange={ this.handleChange }
            />
            2
          </label>
          <label htmlFor="rating">
            <input
              type="radio"
              value="3"
              data-testid="3-rating"
              name="rating"
              onChange={ this.handleChange }
            />
            3
          </label>
          <label htmlFor="rating">
            <input
              type="radio"
              value="4"
              data-testid="4-rating"
              name="rating"
              onChange={ this.handleChange }
            />
            4
          </label>
          <label htmlFor="rating">
            <input
              type="radio"
              value="5"
              data-testid="5-rating"
              name="rating"
              onChange={ this.handleChange }
            />
            5
          </label>
          <br />
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.handleSaveButton }
          >
            Enviar avaliação
          </button>
        </form>
      </div>
      <div>
        <p>{ rating }</p>
        <br />
        <p>{ ratingEmail }</p>
        <br />
        <p>{ ratingText }</p>
        <br />
      </div>
    </>
  );
}
}

ProductDetail.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProductDetail;
