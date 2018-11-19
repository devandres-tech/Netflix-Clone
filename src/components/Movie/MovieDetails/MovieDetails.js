import React, { Component } from 'react'; 
import Aux from '../../../hoc/Aux/Aux';
import AddIcon from '../../../static/images/add.svg'; 
import PlayIcon from '../../../static/images/play-button.svg'; 
 

class MovieDetails extends Component {


   render() {
      
      return <Aux>
          <div className="modal__container">
            <h1 className="modal__title">
              {this.props.movie.title || this.props.movie.name}
            </h1>
            <p className="modal__info">
              <span className="modal__rating">
                Rating: {this.props.movie.vote_average * 10}%{" "}
              </span>
              Release date: {this.props.movie.release_date || this.props.movie.first_air_date }  Runtime: { this.props.movie.runtime || this.props.movie.episode_run_time}m
            </p>
            <p className="modal__episode">
              {this.props.movie.number_of_episodes ? " Episodes: " + this.props.movie.number_of_episodes : ""}
              {this.props.movie.number_of_seasons ? " Seasons: " + this.props.movie.number_of_seasons : ""}
            </p>
            <p className="modal__overview">{this.props.movie.overview}</p>
            <button className="modal__btn modal__btn--red">
              <PlayIcon className="modal__btn--icon" />
              Play
            </button>
            <button className="modal__btn">
              <AddIcon className="modal__btn--icon" />
              My List
            </button>
          </div>
        </Aux>;
   }
}

export default MovieDetails; 