import React, { Component } from 'react';
import City from '../containers/city'


class CityList extends Component {
  static defaultProps = {
    cities: [
      { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
      { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
      { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' }
    ]
  }

  render() {
    return (
      <div className="cities col-sm-7">
        {this.props.cities.map((city) => {
          return <City key={city.name} city={city} />
        })}
      </div>
    );
  };
}

export default CityList;
