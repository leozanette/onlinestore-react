import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const { results } = this.props;
    return (
      <div>
        { results.map((element) => (
          <div
            data-testid="product"
            key={ element.id }
          >
            <span>
              { element.title }
            </span>
            <img src={ element.thumbnail } alt={ element.title } />
            <span>
              { element.price }
            </span>
          </div>

        )) }
      </div>

    );
  }
}

Card.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
