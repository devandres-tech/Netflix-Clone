import React, {Component} from 'react';
 

const movieRow = (props) => (

   <div  className="movie">
         <div onClick={props.movieDetails} className="movie__column-poster">
            <img src={props.movieImage} alt="" className="movie__poster" />
         </div>
   </div> 
);

export default movieRow; 