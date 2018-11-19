import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../../components/Header/Header';
import MovieShowcase from '../MovieShowcase/MovieShowcase';
import Footer from '../../../components/Footer/Footer';
import { BrowserRouter } from "react-router-dom";


class MainContent extends Component {
  state = {
    selectedMovie: {}
  };

  componentDidMount = () => {
    this.getMovie();
  };


  getMovie = () => {
    /**
     * @param movieId narcos netflix series id 
     */
    const movieId = 63351;

    const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0`;
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
      <BrowserRouter>
        <div className="container">
          <Header movie={this.state.selectedMovie} />
          <MovieShowcase />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default MainContent; 