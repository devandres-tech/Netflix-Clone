import React, { Component } from 'react'

export default class MovieGenre extends Component {
   state = {}

   render() {
      let netflixUrl = false;
      if (this.props.url === `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`) {
         netflixUrl = true;
      }

      return (
         <>
            <div onClick={() => this.props.selectMovieHandler(this.props.movie)}
               className={"movieShowcase__container--movie" + (netflixUrl ? "__netflix" : "")}>
               <img src={this.props.posterUrl} className="movieShowcase__container--movie-image" />
            </div>
         </>
      )
   }
}
