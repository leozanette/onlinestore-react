import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductDetail } from '../services/api';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
      rating: '',
      ratingEmail: '',
      ratingText: '',
      avaliation: [],
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

handleSaveButton = (e) => {
  e.preventDefault();
  localStorage.clear();
  const { rating, ratingEmail, ratingText } = this.state;
  const avaliacao = {
    ratingEmail,
    rating,
    ratingText,
  };

  this.setState((prevState) => ({
    avaliation: [...prevState.avaliation, avaliacao],
    ratingEmail: '',
    ratingText: '',
  }), () => this.saveLocalStorage());
}

getLocalStorage = () => {
  const avaliationLocalStorage = localStorage.getItem('avaliacoes');

  const parse = JSON.parse(avaliationLocalStorage);

  if (avaliationLocalStorage !== null) {
    this.setState({ avaliation: parse });
  }
}

saveLocalStorage = () => {
  const { avaliation } = this.state;
  const teste = JSON.stringify(avaliation);
  localStorage.setItem('avaliacoes', teste);
}

  passData = () => {
    const { getFromHome } = this.props;
    const { result } = this.state;
    getFromHome([result]);
  };

  render() {
    const { result, avaliation, ratingText, ratingEmail } = this.state;
    return (
      <>
        <div>
          <img src={ result.thumbnail } alt={ result.title } />
          <p data-testid="product-detail-name">{result.title}</p>
          <p>{result.price }</p>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ this.passData }
            id={ result.id }
          >
            Add to Cart
          </button>

          <Link
            data-testid="shopping-cart-button"
            to="/cart"
          >
            Cart
          </Link>
        </div>
        <div>
          <h2> Avaliações </h2>
          <form>
            <input
              data-testid="product-detail-email"
              type="email"
              placeholder="email"
              name="ratingEmail"
              onChange={ this.handleChange }
              value={ ratingEmail }
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
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Escreva sua avaliação"
              maxLength="2000"
              name="ratingText"
              onChange={ this.handleChange }
              value={ ratingText }
            />
            <button
              type="submit"
              data-testid="submit-review-btn"
              onClick={ this.handleSaveButton }
            >
              Enviar avaliação
            </button>
          </form>
          <div>
            { avaliation.map((item, index) => (
              <div key={ index }>
                <p>{ item.rating }</p>
                <p>{ item.ratingEmail }</p>
                <p>{ item.ratingText }</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  getFromHome: PropTypes.func.isRequired,
};

export default ProductDetail;
