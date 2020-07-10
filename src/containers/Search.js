import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    movieList: [];
  }

  render() {
    return <div className="search-container">{this.state.movieList}</div>;
  }
}
