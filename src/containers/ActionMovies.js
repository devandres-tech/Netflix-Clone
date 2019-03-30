import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { fetchActionMovies } from '../store/actions/index';
import { getMovieRows } from '../getMovie';

class ActionMovies extends Component {

  componentWillMount() {
    this.props.fetchActionMovies();
  }

  render() {
    let movies
    // Call getMoviesRows function only when we get the data back 
    // from the API through redux 
    if (this.props.actionMovies.data) {
      const url = "/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=28";
      movies = getMovieRows(this.props.actionMovies.data, url);
    }
    return (
      <>
        <h1 className="movieShowcase__heading">Action Movies</h1>
        <div className="movieShowcase__container">
          {movies}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { actionMovies: state.action }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchActionMovies }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionMovies);