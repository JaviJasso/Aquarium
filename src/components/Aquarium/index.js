// Dependencies
import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';



class Aquarium extends Component {
  static propTypes = {
    selectedItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      co2Effect: PropTypes.number.isRequired,
      phEffect: PropTypes.number.isRequired,
    })).isRequired,
  };

  render() {
    const { selectedItems, totalRows } = this.props;
    console.log('selectedItems in aquarium', selectedItems);

    return (
      <div className="aquarium">
        {map(selectedItems, (item, index) => (
          <img
            alt={item.displayName}
            className="item"
            key={index}
            src={item.src}
          />
        ))}
      </div>
    );
  }
}

export default Aquarium;
