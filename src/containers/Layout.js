import React, { Component } from 'react';
import axios from "axios";

import Navbar from './Navbar';
import MainContent from './MainContent';
import Movie from '../components/Movie/Movie';
import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';

class Layout extends Component {

  state = {
    /** Toggles the movie list when the user starts typing. */
    toggleMovieList: true,
    /** An array that will hold all of our movie Components. */
    MovieList: [],
    /** Toggles the modal when a movie is clicked. */
    toggleModal: false,
    /** Holds the movie information for a single movie. */
    movieOverview: {},
  }

  /** Make API call as soon as the user starts typing.  */
  makeAipCall = (searchItem) => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=9ea839ec7891591994ec0f540b4b199f&language=en-US&include_adult=false&query=${searchItem}`;

    axios.get(url)
      .then(res => {
        const results = res.data.results;
        let movieImageUrl;
        /** Will hold all our movies Components */
        let movieRows = [];

        /** Loop through all the movies */
        results.forEach((movie) => {
          /** Manually build our image url and set it on the Movie component. */
          if (movie.poster_path !== null && movie.media_type !== "person") {
            movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

            /** Set the movie object to our Movie component */
            const movieComponent = <Movie
              movieDetails={() => this.selectMovieHandler(movie)}
              key={movie.id}
              movieImage={movieImageUrl}
              movie={movie} />

            /** Push our movie component to our movieRows array */
            movieRows.push(movieComponent);
          }
        })
        /** Set our MovieList array to the movieRows array */
        this.setState({ MovieList: movieRows });
      }).catch(error => {
        console.log(error);
      });
  }

  /** Get the user input  */
  onSearchHandler = (event) => {
    /** Display the movie list. */
    this.setState({
      toggleMovieList: false
    });

    const userInput = event.target.value;
    /** Pass in the user input to make the API call. */
    this.makeAipCall(userInput);

    /** If the input is empty don't display the movie list. */
    if (userInput === "") {
      this.setState({
        toggleMovieList: true
      });
    }
  }

  /* Get the appropriate details for a specific movie that was clicked */
  selectMovieHandler = (movie) => {
    this.setState({ toggleModal: true });

    let url;
    /** Make the appropriate API call to get the details for a single movie or tv show. */
    if (movie.media_type === "movie") {
      const movieId = movie.id;
      url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0`;

    } else if (movie.media_type === "tv") {
      const tvId = movie.id
      url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0`;
    }

    axios.get(url)
      .then(res => {
        const movieData = res.data;

        this.setState({ movieOverview: movieData });
      }).catch(error => {
        console.log(error);
      });

  }

  closeModal = () => {
    this.setState({ toggleModal: false });
  }

  render() {

    return (
      <div>
        <Navbar showMovies={this.onSearchHandler} />
        {
          this.state.toggleMovieList ? <MainContent /> : <div
            className="search-container">{this.state.MovieList}</div>
        }

        <Modal show={this.state.toggleModal}
          modalClosed={this.closeModal}
          movie={this.state.movieOverview}>

          <MovieDetails movie={this.state.movieOverview} />
        </Modal>
      </div>

    );
  }

}

export default Layout; 