// Dependencies
import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
// Internals
import './index.css';

class Items extends Component {
  static propTypes = {
    itemButtons: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      co2Effect: PropTypes.number.isRequired,
      phEffect: PropTypes.number.isRequired,
    })).isRequired,
    selectItem: PropTypes.func.isRequired,
  };

  render() {
    const { itemButtons, selectItem } = this.props;

    return (
      <div className="items">
        {map(itemButtons, (item) => (
          <button
            className="add-item"
            key={item.id}
            onClick={() => selectItem(item)}
          >
            {item.displayName}
          </button>
        ))}
      </div>
    );
  }
}

export default Items;
