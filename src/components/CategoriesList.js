import React from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const getData = await getCategories();
    this.setState({ data: [...getData] });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container-category">
        { data.map((category) => (<input
          key={ category.id }
          data-testid="category"
          type="button"
          value={ category.name }
        />)) }

      </div>

    );
  }
}

export default CategoriesList;
