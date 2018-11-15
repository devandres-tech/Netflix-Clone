import React, { Component } from 'react'; 
import Aux from '../../../hoc/Aux/Aux';
import MovieRow from '../MovieRow'; 
 

class MovieSummary extends Component {

   

   render() {


      return (
            <Aux>
            <div className="shit">
               <h1 className="modal__title">{this.props.movie.title || this.props.movie.name}</h1>
               <p className="modal__info">
                  <span className="modal__rating">Rating: {this.props.movie.vote_average * 10}%  </span>
                  Release date: {this.props.movie.release_date || this.props.movie.first_air_date}  Runtime: {this.props.movie.runtime || this.props.movie.episode_run_time}m
         </p>
               <p className="modal__episode">{this.props.movie.number_of_episodes ? " Episodes: " + this.props.movie.number_of_episodes : ""}
                  {this.props.movie.number_of_seasons ? " Seasons: " + this.props.movie.number_of_seasons : ""}</p>
               <p className="modal__overview">{this.props.movie.overview}</p>
               <button>Play</button>
               <button>My list</button>
               <p>staring: mdf gglo bool emmy djf </p>
               <p>Genres: mdf gglo bool emmy djf </p>
            </div>

   
      
   </Aux>
      )
   }
}




// const movieSummary = (props) => (

//    <Aux>
//       <div>
//          <h1 className="modal__title">{props.movie.title || props.movie.name}</h1>
//          <p className="modal__info">
//             <span className="modal__rating">Rating: {props.movie.vote_average * 10}%  </span> 
//             Release date: {props.movie.release_date || props.movie.first_air_date}  Runtime: {props.movie.runtime  || props.movie.episode_run_time}m
//          </p>
//          <p className="modal__episode">{props.movie.number_of_episodes ? " Episodes: " + props.movie.number_of_episodes : ""} 
//             {props.movie.number_of_seasons ? " Seasons: " + props.movie.number_of_seasons : ""}</p>
//          <p className="modal__overview">{props.movie.overview}</p>
//          <button>Play</button>  
//          <button>My list</button>  
//          <p>staring: mdf gglo bool emmy djf </p>
//          <p>Genres: mdf gglo bool emmy djf </p>
//       </div>
//    </Aux>
// ); 

export default MovieSummary; 