import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
    };
  }

  render() {
    const { inputSearch } = this.state;
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
          onClick={ console.log('olá') }
        >
          Pesquisar
        </button>

        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </h2>
      </>

    );
  }
}

export default Home;
