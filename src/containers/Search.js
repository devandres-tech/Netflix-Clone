import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="search-container">
        {this.props.history.location.movieRows}
      </div>
    );
  }
}
