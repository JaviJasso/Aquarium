// Dependencies
import React, { PureComponent } from 'react';
import map from 'lodash';


class Aquarium extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      co2Effect: PropTypes.number.isRequired,
      phEffect: PropTypes.number.isRequired,
    })).isRequired
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {map(this.props.items, (item) => (
              <th>{item.displayName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
