import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
      productList: [],
    };
  }

  componentDidMount() {
    console.log(getProductsFromCategoryAndQuery('computador'));
  }

  searchProducts = async () => {
    const { inputSearch } = this.state;
    const productsList = await getProductsFromCategoryAndQuery('', inputSearch);
    this.setState({ productList: productsList.results });
  }

  handleChange = (event) => {
    this.setState({ inputSearch: event.target.value });
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

      </>

    );
  }
}

export default Home;
