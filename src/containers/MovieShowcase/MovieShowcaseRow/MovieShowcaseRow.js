import React, { Component } from 'react';

// `url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path})`;

const movieShowcaseRow = (props) => (

   <div>
      <div className="shit">
         <img src={movieImageUrl} />
      </div>
   </div>
);

export default movieShowcaseRow; 