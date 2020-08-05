import React, { Component } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  fetchNetflixOriginals,
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchDocumentaries,
  fetchHorrorMovies
} from '../store/actions/index';
import DisplayMovieRow from './DisplayMovieRow';


class MainContent extends Component {

  state = {
    /** Will hold our chosen movie to display on the header */
    selectedMovie: {},
    movieInfo: [
      {
        title: 'Netflix Originals',
        url: `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`,
        movies: [],
      },
      {
        title: 'Trending Now',
        url: `/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`,
        movies: [],
      },
      {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`,
        movies: [],
      },
      {
        title: 'Action Movies',
        url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`,
        movies: [],
      },
      {
        title: 'Comedy Movies',
        url: `/discover/tv?api_key=${process.env.API_KEY}&with_genres=35`,
        movies: [],
      },
      {
        title: 'Horror Movies',
        url: `/discover/tv?api_key=${process.env.API_KEY}&with_genres=27`,
        movies: [],
      },
      {
        title: 'Documentaries',
        url: `/discover/tv?api_key=${process.env.API_KEY}&with_genres=99`,
        movies: [],
      },
    ],
  };

  componentDidMount = async () => {
    await this.getMovie();
    await this.props.fetchNetflixOriginals();
    await this.props.fetchTrending();
    await this.props.fetchTopRated();
    await this.props.fetchActionMovies();
    await this.props.fetchComedyMovies();
    await this.props.fetchDocumentaries();
    await this.props.fetchHorrorMovies();

    const newMoviesArray = this.state.movieInfo.map((movie) => {
      if (movie.title === 'Netflix Originals') {
        movie.movies.push(...this.props.netflixOriginals.data)
      }
      if (movie.title === 'Trending Now') {
        movie.movies.push(...this.props.trending.data)
      }
      if (movie.title === 'Top Rated') {
        movie.movies.push(...this.props.topRated.data)
      }
      if (movie.title === 'Action Movies') {
        movie.movies.push(...this.props.actionMovies.data)
      }
      if (movie.title === 'Comedy Movies') {
        movie.movies.push(...this.props.comedyMovies.data)
      }
      if (movie.title === 'Documentaries') {
        movie.movies.push(...this.props.documentaries.data)
      }
      if (movie.title === 'Horror Movies') {
        movie.movies.push(...this.props.horrorMovies.data)
      }
      return movie
    })
    await this.setState({ movieInfo: newMoviesArray })
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
    return (
      <div className="container">
        <Header movie={this.state.selectedMovie} />
        <div className="movieShowcase">
          {
            this.state.movieInfo.map((info) => {
              if (info.movies.length > 0) {
                return (
                  <DisplayMovieRow
                    selectMovieHandler={this.props.selectMovieHandler}
                    key={info.title}
                    title={info.title}
                    url={info.url}
                    movies={info.movies}
                  />)
              }
            })
          }
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    netflixOriginals: state.netflixOriginals,
    trending: state.trending,
    topRated: state.topRated,
    actionMovies: state.action,
    comedyMovies: state.comedy,
    documentaries: state.documentary,
    horrorMovies: state.horror
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchNetflixOriginals,
    fetchTrending,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchDocumentaries,
    fetchHorrorMovies
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent); 