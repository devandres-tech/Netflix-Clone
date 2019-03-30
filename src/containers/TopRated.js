import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { fetchTopRated } from '../store/actions/index';
import { getMovieRows } from '../getMovie';

class TopRated extends Component {

  componentWillMount() {
    this.props.fetchTopRated();
  }

  render() {
    let movies
    // Call getMoviesRows function only when we get the data back 
    // from the API through redux 
    if (this.props.topRated.data) {
      const url = "/movie/top_rated?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US";
      movies = getMovieRows(this.props.topRated.data, url);
    }
    return (
      <>
        <h1 className="movieShowcase__heading">Top Rated</h1>
        <div className="movieShowcase__container">
          {movies}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { topRated: state.topRated }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTopRated }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRated);