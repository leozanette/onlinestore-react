import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './CategoriesList';

class Home extends React.Component {
  render() {
    return (
      <>
        <input type="text" />
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <CategoriesList />
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
