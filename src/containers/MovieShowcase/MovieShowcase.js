import React, { Component } from "react";
import axios from 'axios'; 
import MovieShowCaseRow from '../MovieShowcase/MovieShowcaseRow/MovieShowcaseRow'; 

class MovieShowcase extends Component {

  state = {
    trendingMovieRows: [],
    movies: []
  }

  componentWillMount() {
    this.getTrending(); 
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



      return <div className="movieShowcase">
          <h1 className="movieShowcase__heading">
            New Releases
          </h1>
          <div className="movieShowcase__container">
            {/* {this.state.movies[0].title} */}
            {/* {/* <div className="movieShowcase__container--movie">movie 1</div> */}
            {/* <div className="movieShowcase__container--movie"> */}
              {this.state.trendingMovieRows}
              {/* {this.state.trendingMovieRows}
              {this.state.trendingMovieRows}
              {this.state.trendingMovieRows} */}
            {/* </div> */}
            {/* <div className="movieShowcase__container--movie">movie 3</div>
            <div className="movieShowcase__container--movie">movie 4</div>
            <div className="movieShowcase__container--movie">movie 5</div>
            <div className="movieShowcase__container--movie">
              movie 6
            </div> */} 
            {/* </div> */}
            {/* <h1 className="movieShowcase__heading">Trending Now</h1>
          <div className="movieShowcase__container">
            <div className="movieShowcase__container--movie">movie 1</div>
            <div className="movieShowcase__container--movie">movie 2</div>
            <div className="movieShowcase__container--movie">movie 3</div>
            <div className="movieShowcase__container--movie">movie 4</div>
            <div className="movieShowcase__container--movie">movie 5</div>
            <div className="movieShowcase__container--movie">movie 6</div>
          </div> */}
          </div>
        </div>;
   }
}

export default MovieShowcase; 