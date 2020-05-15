import React, { Component } from 'react'

import Modal from '../components/UI/Modal';
import MovieDetails from '../components/Movie/MovieDetails';

export default class MovieGenre extends Component {
   state = {
      toggleModal: false
   }

   handleToggleModal = () => {
      this.setState({ toggleModal: true });
   }

   closeModal = () => {
      this.setState({ toggleModal: false })
   }

   render() {
      let netflixUrl = false;
      if (this.props.url === `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`) {
         netflixUrl = true;
      }

      return (
         <>
            <div onClick={() => this.handleToggleModal()}
               className={"movieShowcase__container--movie" + (netflixUrl ? "__netflix" : "")}>
               <img src={this.props.posterUrl} className="movieShowcase__container--movie-image" />
            </div>
            <Modal show={this.state.toggleModal} movie={this.props.movie} modalClosed={this.closeModal}>
               <MovieDetails movie={this.props.movie} />
            </Modal>
         </>
      )
   }
}
