import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TrendingMovies from './TrendingMovies';
import NetflixOriginals from './NetflixOriginals';
import { fetchNetflixOriginals } from '../store/actions/index';
import TopRated from './TopRated';
import ActionMovies from './ActionMovies';
import ComedyMovies from './ComedyMovies';
import Documentaries from './Documentaries';
import DisplayMovieRow from './DisplayMovieRow';


class MainContent extends Component {

  state = {
    /** Will hold our chosen movie to display on the header */
    selectedMovie: {},
    movieInfo: [
      {
        title: 'Netflix Originals',
        url: `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`,
        movies: []
      }
    ],
    netflixOriginals: []
  };

  componentDidMount = async () => {
    await this.getMovie();
    await this.props.fetchNetflixOriginals();
    this.state.movieInfo.forEach((movie) => {
      if (movie.title === 'Netflix Originals') {
        movie.movies.push(...this.props.netflixOriginals.data)
      }
    })
    // await this.setState({ movieInfo: this.props.netflixOriginals.data })
  };

  getMovie = () => {
    /** Movie Id for the Narcos series  */
    const movieId = 63351;
    /** Make Api call to retrieve the details for a single movie  */
    const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${process.env.API_KEY}`;
    axios
      .get(url)
      .then(res => {
        const movieData = res.data;
        this.setState({ selectedMovie: movieData });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    // console.log('render().state', this.state)
    return (
      <div className="container">
        <Header movie={this.state.selectedMovie} />
        <div className="movieShowcase">
          {
            this.state.movieInfo.map((info) => {
              // console.log('render()----', info)
              return (
                <DisplayMovieRow
                  title={info.title}
                  url={info.url}
                  movies={info.movies}
                />)
            })
          }
          {/* <DisplayMovieRow
            title={'Netflix Originals'}
            movies={this.state.netflixOriginals}
          /> */}
          {/* <NetflixOriginals /> */}
          <TrendingMovies />
          <TopRated />
          <ActionMovies />
          <ComedyMovies />
          <Documentaries />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { netflixOriginals: state.netflixOriginals };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchNetflixOriginals }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
  (MainContent); 