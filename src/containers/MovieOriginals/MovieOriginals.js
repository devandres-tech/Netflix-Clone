import React, { Component } from 'react';

class MovieOriginals extends Component {
   render() {
      return (
         <div className="movieOriginals">
            <h1>Netflix Originals</h1>
            <div className="movieOriginals__container">
               <div className="movieOriginals__container--movie">movie 1</div>
               <div className="movieOriginals__container--movie">movie 2</div>
               <div className="movieOriginals__container--movie">movie 3</div>
               <div className="movieOriginals__container--movie">movie 4</div>
               <div className="movieOriginals__container--movie">movie 5</div>
               <div className="movieOriginals__container--movie">movie 6</div>
            </div>
         </div>

      );
   }
}

export default MovieOriginals; 