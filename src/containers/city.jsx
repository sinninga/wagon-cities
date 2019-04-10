import React, { Component } from 'react';

class City extends Component {
  render() {

    return (
      <div className="card">
        <div className="card-description">
          <h2>{this.props.city.name}</h2>
          <p>{this.props.city.address}</p>
        </div>
      </div>
    );
  };
}

export default City;
