import React from 'react'; 
import Aux from '../../../hoc/Aux/Aux';
import MovieRow from '../MovieRow'; 
 

const movieSummary = (props) => (

   <Aux>
      <h1 className="modal__title">{props.movie.title}</h1>
      <p className="modal__info">
         <span className="modal__rating">Rating: {props.movie.vote_average * 10}%  </span> 
         Release date: {props.movie.release_date}  Runtime: {props.movie.runtime}m
      </p>
      <p className="modal__overview">{props.movie.overview}</p>
       <button>Play</button>  
       <button>My list</button>  
       <p>staring: mdf gglo bool emmy djf </p>
       <p>Genres: mdf gglo bool emmy djf </p>
   </Aux>
); 

export default movieSummary; 