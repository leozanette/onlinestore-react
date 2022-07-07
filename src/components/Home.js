import React from 'react';
import CategoriesList from './CategoriesList';
import { Link } from 'react-router-dom';

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
