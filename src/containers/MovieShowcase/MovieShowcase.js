import React, { Component } from "react";
import axios from 'axios'; 
import MovieShowCaseRow from '../MovieShowcase/MovieShowcaseRow/MovieShowcaseRow'; 
import Modal from "../../components/UI/Modal/Modal"; 
import MovieSummary from '../../components/MovieRow/MovieSummary/MovieSummary'; 

class MovieShowcase extends Component {

  state = {
    trendingMovieRows: [],
    netflixOriginalsRows: [],
    toggle: false,
    movieDetails: {},
  }

  componentWillMount() {
    this.getTrending(); 
    this.getNetflixMovies(); 
  }
  
  /** 
   Get the movie details for a single movie 
   @param {object} movieObject - A single movie object
   */
  getMovieDetails = (movieObject) => {
    this.setState({toggle: true})
    this.setState({ movieDetails: movieObject }); 
  }

  closeModal = () => {
    this.setState({toggle: false})
  }


  /** Extract our movie data */
  getMovieRows = (res, url) => {
    const results = res.data.results; 
    let movieRows = []; 
     
    results.forEach((movie) => {
      let movieImageUrl = "https://image.tmdb.org/t/p/original/" + movie.backdrop_path;
      if (url === "https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213") {
        movieImageUrl = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
      }
     
      console.log(movieImageUrl);
      const movieComponent = <MovieShowCaseRow
        movieDetails={() => this.getMovieDetails(movie)}
        key={movie.id}
        url={url}
        posterUrl={movieImageUrl}
        movie={movie} />
      movieRows.push(movieComponent);
    })
    // update state 
   return movieRows; 
       
  }

  /**
   * Send request for movies that are popular 
   */
  getTrending = () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US&page=1'; 

    axios.get(url)
      .then(res => {
        const movieRows = this.getMovieRows(res, url);
        this.setState({ trendingMovieRows: movieRows }); 
      }).catch(error => {
        console.log(error); 
      })
  }

  /**
   * Get Netflix originals 
   */
  getNetflixMovies = () => {
    
    const url = "https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213";

    axios.get(url)
      .then(res => {
        console.log(res); 
        const movieRows = this.getMovieRows(res, url); 
        this.setState({ netflixOriginalsRows: movieRows }); 
      })
      .catch(error => {
        console.log(error); 
      })
  }

   render() {


      return (  
        <div className="movieShowcase">

          <h1 className="movieShowcase__heading">Netflix Originals</h1>
          <div className="movieShowcase__container">
            {this.state.netflixOriginalsRows}
          </div>
          
          <h1 className="movieShowcase__heading">Trending Now</h1>
          <div className="movieShowcase__container">
              {this.state.trendingMovieRows}
          </div>
        
          <Modal show={this.state.toggle} modalClosed={this.closeModal} movie={this.state.movieDetails}>
            <MovieSummary movie={this.state.movieDetails}/>
          </Modal>
        </div>
      );
   }
}

export default MovieShowcase; 