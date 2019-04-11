import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {



    const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;

    return (
      <div className="city-info col-sm-5">
        <img src={src} alt="" className="citypic"/>
        <h2>{this.props.selectedCity.name}</h2>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);
