import React, { Component } from "react";

class MovieShowcase extends Component {
   render() {
      return (
         <div className="movieShowcase">
          <h1 className="movieShowcase__heading">New Releases</h1>
          <div className="movieShowcase__container">
            <div className="movieShowcase__container--movie">movie 1</div>
            <div className="movieShowcase__container--movie">movie 2</div>
            <div className="movieShowcase__container--movie">movie 3</div>
            <div className="movieShowcase__container--movie">movie 4</div>
            <div className="movieShowcase__container--movie">movie 5</div>
            <div className="movieShowcase__container--movie">movie 6</div>
          </div>

          <h1 className="movieShowcase__heading">Trending Now</h1>
          <div className="movieShowcase__container">
            <div className="movieShowcase__container--movie">movie 1</div>
            <div className="movieShowcase__container--movie">movie 2</div>
            <div className="movieShowcase__container--movie">movie 3</div>
            <div className="movieShowcase__container--movie">movie 4</div>
            <div className="movieShowcase__container--movie">movie 5</div>
            <div className="movieShowcase__container--movie">movie 6</div>
          </div>
        </div>
        )
   }
}

export default MovieShowcase; 