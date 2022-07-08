import React from 'react';
import PropTypes from 'prop-types';
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
    const { onClick } = this.props;
    return (
      <div className="container-category">
        { data.map((category) => (<input
          key={ category.id }
          data-testid="category"
          type="button"
          id={ category.id }
          name="inputCategory"
          value={ category.name }
          onClick={ onClick }
        />)) }

      </div>

    );
  }
}

CategoriesList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CategoriesList;
