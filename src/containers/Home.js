import React, { Component } from 'react';
import axios from "../axios-movies";

import Navbar from './Navbar';
import MainContent from './MainContent';
import Movie from '../components/Movie/Movie';
import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';

class Home extends Component {
  state = {
    /** Toggles the modal when a movie is clicked. */
    toggleModal: false,
    /** Holds the movie information for a single movie. */
    movieOverview: {},
  }


  /* Get the appropriate details for a specific movie that was clicked */
  // selectMovieHandler = (movie) => {
  //   this.setState({ toggleModal: true });

  //   let url;
  //   /** Make the appropriate API call to get the details for a single movie or tv show. */
  //   if (movie.media_type === "movie") {
  //     const movieId = movie.id;
  //     url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`;

  //   } else if (movie.media_type === "tv") {
  //     const tvId = movie.id
  //     url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=${process.env.API_KEY}`;
  //   }

  //   axios.get(url)
  //     .then(res => {
  //       const movieData = res.data;
  //       this.setState({ movieOverview: movieData });
  //     }).catch(error => {
  //       console.log(error);
  //     });
  // }

  closeModal = () => {
    this.setState({ toggleModal: false });
  }

  render() {
    return (
      <div>
        <MainContent />
        <Modal show={this.state.toggleModal}
          modalClosed={this.closeModal}
          movie={this.state.movieOverview}>
          <MovieDetails movie={this.state.movieOverview} />
        </Modal>
      </div>
    );
  }
}

export default Home;