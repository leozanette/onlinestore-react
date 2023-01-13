import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';
import CategoriesList from './CategoriesList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
      inputCategory: '',
      productList: [],
    };
  }

  searchProducts = async () => {
    const { inputSearch, inputCategory } = this.state;
    const productsList = await
    getProductsFromCategoryAndQuery(inputCategory, inputSearch);
    this.setState({ productList: productsList.results });
  }

  renderBySearch = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  rederByCategory = (event) => {
    this.setState({ inputCategory: event.target.id }, // mudado para ID
      () => this.searchProducts());
  };

  getData = (param) => {
    const { getFromHome } = this.props;
    const dataCart = param;
    getFromHome(dataCart);
  }

  render() {
    const { inputSearch, productList } = this.state;
    return (
      <div className="home">
        <header>
          <Link
            to="/onlinestore/cart"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.renderBySearch }
            value={ inputSearch }
            name="inputSearch"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.searchProducts }
          >
            Pesquisar
          </button>
          <h2
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>

        </header>
        <div className="containerCategory">
          <div className="categorias">

            <CategoriesList onClick={ this.rederByCategory } />
          </div>
          <div className="products">
            { productList.length === 0
              ? <p> Nenhum produto foi encontrado </p>
              : (
                <Card
                  results={ productList }
                  getData={ this.getData }
                />
              )}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getFromHome: PropTypes.func.isRequired,
};

export default Home;
