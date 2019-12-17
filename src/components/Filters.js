import React from 'react';
import fetchMock from "fetch-mock";
import {getByType} from "../data/pets";
import PropTypes from 'prop-types';

// import fetchMock from ''
class Filters extends React.Component {

  static propTypes = {
    onChangeType: PropTypes.func,
    onFindPetsClick: PropTypes.func
  };

  // static defaultProps = {
  //   onChangeType: console.log("empty onChangeType function props"),
  //   onFindPetsClick: console.log("empty onFindPetsClick function props")
  // };

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.props.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
