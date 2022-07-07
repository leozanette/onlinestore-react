import React from 'react';

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
      </>

    );
  }
}

export default Home;
