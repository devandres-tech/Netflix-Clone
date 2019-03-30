import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { fetchTrending } from '../store/actions/index';
import { getMovieRows } from '../getMovie';

class TrendingMovies extends Component {

  componentWillMount() {
    this.props.fetchTrending();
  }

  render() {
    let movies
    // Call getMoviesRows function only when we get the data back 
    // from the API through redux 
    if (this.props.trending.data) {
      const url = '/trending/all/week?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US';
      movies = getMovieRows(this.props.trending.data, url);
    }
    return (
      <>
        <h1 className="movieShowcase__heading">Trending Now</h1>
        <div className="movieShowcase__container">
          {movies}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { trending: state.trending }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTrending }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingMovies);
