import React from 'react';
 


const movieRow = (props) => (

   <div onClick={props.getMovie} className="movie">
         <div onClick={props.movieDetails} className="movie__column-poster">
            <img src={props.movie.posterSrc} alt="" className="movie__poster" />
         </div>
   </div> 
);

export default movieRow; 