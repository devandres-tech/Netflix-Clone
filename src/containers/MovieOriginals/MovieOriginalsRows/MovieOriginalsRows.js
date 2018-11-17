import React, { Component } from 'react';

// `url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path})`;

const movieOriginalsRows = (props) => (


   <div onClick={props.movieDetails} className="movieShowcase__container" id="netflixOriginals">
      <img src={props.posterUrl} className="movieShowcase__container--movie-image" />
   </div>

);

export default movieOriginalsRows; 