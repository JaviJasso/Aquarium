// Dependencies
import React, { Component } from 'react';
import map from 'lodash/map';
// Externals
import Aquarium from '../Aquarium';
import Items from '../Items';
// Internals
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedItems: [],
      items: [
        {
          id: 'rock',
          displayName: 'Rock',
          src: 'https://arcreef.com/wp-content/uploads/2016/04/Dry-live-rock-arcreef2.jpg',
          co2Effect: 0,
          phEffect: 0,
        },
        {
          id: 'plant',
          displayName: 'Plant',
          src: 'https://cdn.petbarn.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/5/95501_1_Y_aqua-one-broad-leaf-amazon-silk-plant_1_1.jpg',
          co2Effect: 0,
          phEffect: 0,
        },
        {
          id: 'wood',
          displayName: 'Wood',
          src: 'http://blog.aquariuminfo.org/wp-content/uploads/2015/07/rosewood.jpg',
          co2Effect: 0,
          phEffect: 0,
        },
        {
          id: 'fish',
          displayName: 'Fish',
          src: 'https://pbs.twimg.com/profile_images/765796728243163137/gh305Klf.jpg',
          co2Effect: 0,
          phEffect: 0,
        },
      ]
    };
    this.selectItem = this.selectItem.bind(this);
  }

  // kelsinho review tonight
  selectItem(item) {
    const { selectedItems } = this.state;
    selectedItems.push(item);
    this.setState({ selectedItems });
  }

  render() {
    const { selectedItems, items } = this.state;
    return (
      <div className="App">
        <div className="logo-banner">
          logo
        </div>
        <Items itemButtons={items} selectItem={this.selectItem} />
        <Aquarium selectedItems={selectedItems} />
        <div className="analytics">
          analytics
        </div>
      </div>
    );
  }
}

export default App;
