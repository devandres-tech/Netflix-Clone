import React, { Component } from "react";
import axios from 'axios'; 
import MovieShowCaseRow from '../MovieShowcase/MovieShowcaseRow/MovieShowcaseRow'; 
import Modal from "../../components/UI/Modal/Modal"; 
import MovieSummary from '../../components/MovieRow/MovieSummary/MovieSummary'; 

class MovieShowcase extends Component {

  state = {
    trendingMovieRows: [],
    toggle: false,
    movieDetails: {}
  }

  componentWillMount() {
    this.getTrending(); 
  }
  
  /** 
   Get the movie details for a single movie 
   @param {object} movieObject - A single movie object
   */
  getMovieDetails = (movieObject) => {
    this.setState({ toggle: true }); 
    this.setState({ movieDetails: movieObject }); 
  }

  closeModal = () => {
    this.setState({toggle: false})
  }

  getTrending = () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US&page=1'; 

    axios.get(url)
      .then(res => {
        console.log(res.data.results); 
        const results = res.data.results; 
        let movieRows = []; 

        results.forEach((movie) => {
          const movieImageUrl = "https://image.tmdb.org/t/p/original/" + movie.backdrop_path;
          console.log(movieImageUrl);
          const movieComponent = <MovieShowCaseRow
                                  movieDetails={() => this.getMovieDetails(movie)}
                                  key={movie.id}
                                  posterUrl={movieImageUrl}
                                  movie={movie}/>
          movieRows.push(movieComponent);                                   
         })
        // update state 
        this.setState({trendingMovieRows: movieRows})

      }).catch(error => {
        console.log(error); 
      })
  }




   render() {


      return (  
        <div className="movieShowcase">
          <h1 className="movieShowcase__heading">Trending Now</h1>
          <div className="movieShowcase__container">
              {this.state.trendingMovieRows}
          </div>
          <h1 className="movieShowcase__heading">Popular on Netflix</h1>
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