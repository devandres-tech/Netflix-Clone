import React from 'react';

const movieRow = (props) => (

   <div className="movie">
         <div className="movie__column-poster">
            <img src={props.movie.posterSrc} alt="" className="movie__poster" />
         </div>
   </div> 
);

export default movieRow; 