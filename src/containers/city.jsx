import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }
  render() {

    let classes = "card";
    if (this.props.city === this.props.selectedCity) {
      classes += " active-city";
    }

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="card-description">
          <h2>{this.props.city.name}</h2>
          <p>{this.props.city.address}</p>
        </div>
      </div>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
