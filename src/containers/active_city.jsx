import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class ActiveCity extends Component {
  render() {
    return (
      <div className="city-info col-sm-5">
        <img src="https://kitt.lewagon.com/placeholder/cities/paris" alt="" className="citypic"/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);
