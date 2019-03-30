import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getMovieRows } from '../getMovie';
import { fetchNetflixOriginals } from '../store/actions/index';

class NetflixOriginals extends Component {

  componentWillMount() {
    this.props.fetchNetflixOriginals();
  }

  render() {
    let movies
    // Call getMoviesRows function only when we get the data back 
    // from the API through redux 
    if (this.props.movies.data) {
      const url = '/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213';
      movies = getMovieRows(this.props.movies.data, url);
    }
    return (
      <>
        <h1 className="movieShowcase__heading">NETFLIX ORIGINALS</h1>
        <div className="movieShowcase__container">
          {movies}
        </div>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return { movies: state.netflixOriginals }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchNetflixOriginals }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NetflixOriginals);
