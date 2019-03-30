import React, { Component } from "react";
import axios from '../axios-movies';
import MovieGenre from '../components/MovieGenre';
import Modal from "../components/UI/Modal";
import MovieDetails from '../components/Movie/MovieDetails';

class MovieGenreRow extends Component {

  /** Hold each genre movie row in an array */
  state = {
    trendingMovieRow: [],
    netflixOriginalsRow: [],
    topRatedRow: [],
    comedyMovieRow: [],
    horrorMovieRow: [],
    actionMovieRow: [],
    animatedMovieRow: [],
    documentaryRow: [],
    romanceMovieRow: [],
    movieOverview: {},
    toggleModal: false,
  }

  /** Make all API calls as soon as our MovieGenreRow component mounts. */
  componentWillMount() {
    this.getTrending();
    this.getTopRated();
    this.getComedyMovies();
    this.getActionMovies();
    this.getHorrorMovies();
    this.getNetflixMovies();
    this.getRomanceMovies();
    this.getDocumentaries();
    this.getAnimatedMovies();
  }

  /** 
   Get the movie details for a single movie 
   @param {object} movieObject - A single movie object
   */
  getMovieDetails = (movieObject) => {
    console.log(movieObject);
    this.setState({ toggleModal: true });
    this.setState({ movieOverview: movieObject });

  }

  closeModal = () => {
    this.setState({ toggleModal: false })
  }


  /** Extract our movie data and pass it to our MovieGenre Component. */
  getMovieRows = (res, url) => {
    const results = res.data.results;
    let movieRows = [];

    results.forEach((movie) => {
      let movieImageUrl = "https://image.tmdb.org/t/p/original/" + movie.backdrop_path;
      if (url === "/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213") {
        movieImageUrl = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
      }

      if (movie.poster_path && movie.backdrop_path !== null) {

        const movieComponent = <MovieGenre
          movieDetailsModal={() => this.getMovieDetails(movie)}
          key={movie.id}
          url={url}
          posterUrl={movieImageUrl}
          movie={movie} />
        movieRows.push(movieComponent);
      }
    })

    return movieRows;

  }

  /**
   * Send request for movies that are popular right now
   */
  getTrending = () => {
    const url = "/trending/all/week?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US";

    axios.get(url)
      .then(res => {
        const movieRows = this.getMovieRows(res, url);

        this.setState({ trendingMovieRow: movieRows });
      })
      .catch(error => {
        console.log(error);
      });
  }

  /**
   * Send request for movies that are top rated 
   */
  getTopRated = () => {
    const url = "/movie/top_rated?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US";

    axios.get(url)
      .then(res => {
        const movieRows = this.getMovieRows(res, url);

        this.setState({ topRatedRow: movieRows });
      }).catch(error => {
        console.log(error);
      })
  }

  /**
   * Get Netflix originals 
   */
  getNetflixMovies = () => {
    const url = "/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213";

    axios.get(url)
      .then(res => {
        const movieRows = this.getMovieRows(res, url);

        this.setState({ netflixOriginalsRow: movieRows });
      })
      .catch(error => {
        console.log(error);
      })
  }

  getActionMovies = () => {
    const url = "/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=28";

    axios.get(url)
      .then(res => {
        const movieRows = this.getMovieRows(res, url);

        this.setState({ actionMovieRow: movieRows });
      })
      .catch(error => {
        console.log(error);
      })
  }

  getComedyMovies = () => {
    const url = "/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=35";

    axios.get(url)
      .then(res => {
        const movieRows = this.getMovieRows(res, url);

        this.setState({ comedyMovieRow: movieRows });
      })
      .catch(error => {
        console.log(error);
      })
  }

  getHorrorMovies = () => {
    const url = "/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=27";

    axios.get(url)
      .then(res => {
        const movieRows = this.getMovieRows(res, url);

        this.setState({ horrorMovieRow: movieRows });
      })
      .catch(error => {
        console.log(error);
      })
  }

  getRomanceMovies = () => {
    const url = "/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=10749";

    axios.get(url)
      .then(res => {
        const movieRows = this.getMovieRows(res, url);

        this.setState({ romanceMovieRow: movieRows });
      })
      .catch(error => {
        console.log(error);
      })
  }

  getAnimatedMovies = () => {
    const url = "/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=16";

    axios.get(url)
      .then(res => {
        const movieRows = this.getMovieRows(res, url);

        this.setState({ animatedMovieRow: movieRows });
      })
      .catch(error => {
        console.log(error);
      })
  }

  getDocumentaries = () => {
    const url = "/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=99";

    axios.get(url)
      .then(res => {
        const movieRows = this.getMovieRows(res, url);

        this.setState({ documentaryRow: movieRows });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {

    return (
      <div className="movieShowcase">
        <h1 className="movieShowcase__heading">NETFLIX ORIGINALS</h1>
        <div className="movieShowcase__container">
          {this.state.netflixOriginalsRow}
        </div>

        <h1 className="movieShowcase__heading">Trending Now</h1>
        <div className="movieShowcase__container">
          {this.state.trendingMovieRow}
        </div>

        <h1 className="movieShowcase__heading">Top Rated</h1>
        <div className="movieShowcase__container">
          {this.state.topRatedRow}
        </div>

        <h1 className="movieShowcase__heading">Action Movies</h1>
        <div className="movieShowcase__container">
          {this.state.actionMovieRow}
        </div>

        <h1 className="movieShowcase__heading">Comedy Movies</h1>
        <div className="movieShowcase__container">
          {this.state.comedyMovieRow}
        </div>

        <h1 className="movieShowcase__heading">Horror Movies</h1>
        <div className="movieShowcase__container">
          {this.state.horrorMovieRow}
        </div>

        <h1 className="movieShowcase__heading">Romance Movies</h1>
        <div className="movieShowcase__container">
          {this.state.romanceMovieRow}
        </div>

        <h1 className="movieShowcase__heading">Animated Films</h1>
        <div className="movieShowcase__container">
          {this.state.animatedMovieRow}
        </div>

        <h1 className="movieShowcase__heading">Documentaries</h1>
        <div className="movieShowcase__container">
          {this.state.documentaryRow}
        </div>

        <Modal show={this.state.toggleModal} modalClosed={this.closeModal} movie={this.state.movieOverview}>
          <MovieDetails movie={this.state.movieOverview} />
        </Modal>
      </div>
    );
  }
}

export default MovieGenreRow; 
