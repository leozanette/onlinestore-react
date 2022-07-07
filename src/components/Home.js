import React from 'react';
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

  componentDidMount() {
  }

  searchProducts = async () => {
    const { inputSearch, inputCategory } = this.state;
    const productsList = await
    getProductsFromCategoryAndQuery(inputCategory, inputSearch);
    this.setState({ productList: productsList.results });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange2 = (event) => {
    this.setState({ inputCategory: event.target.value },
      () => this.searchProducts());
  };

  render() {
    const { inputSearch, productList } = this.state;
    return (
      <>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
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
        { productList.length === 0
          ? <p> Nenhum produto foi encontrado </p>
          : <Card results={ productList } />}
        <CategoriesList onClick={ this.handleChange2 } />
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
      </>
    );
  }
}

export default Home;
