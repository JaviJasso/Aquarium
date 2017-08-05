// Dependencies
import React, { Component } from 'react';
import map from 'lodash/map';
// Externals
import logo from '../../logo.svg';
// Internals
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [
        {
          id: 'rock',
          displayName: 'Rock',
          src: '',
          co2Effect: 0,
          phEffect: 0,
        },
        {
          id: 'plant',
          displayName: 'Plant',
          src: '',
          co2Effect: 0,
          phEffect: 0,
        },
        {
          id: 'wood',
          displayName: 'Wood',
          src: '',
          co2Effect: 0,
          phEffect: 0,
        },
        {
          id: 'fish',
          displayName: 'Fish',
          src: '',
          co2Effect: 0,
          phEffect: 0,
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="logo-banner">
          logo
        </div>
        <div className="items">
          {map(this.state.items, (item) => (
            <button className="add-item" key={item.id}>
              {item.displayName}
            </button>
          ))}
        </div>
        <div className="aquarium">
          aquarium
        </div>
        <div className="analytics">
          analytics
        </div>
      </div>
    );
  }
}

export default App;
