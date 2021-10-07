import React, { useState } from 'react'

import MainContent from '../components/MainContent'
import Modal from '../components/UI/Modal'
import MovieDetails from '../components/Movie/MovieDetails'

const Home = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const [movieOverview, setMovieOverview] = useState({})


  /* Get the appropriate details for a specific movie that was clicked */
  const selectMovieHandler = async (movie) => {
    console.log('movei is', movie)
    setToggleModal(true)
    setMovieOverview(movie)
  }

  const closeModal = () => {
    setToggleModal(false)
  }

  return (
    <>
      <div className='main-content'>
        <MainContent selectMovieHandler={selectMovieHandler} />
      </div>
      <Modal
        show={toggleModal}
        modalClosed={closeModal}
        movie={movieOverview}
      >
        <MovieDetails movie={movieOverview} />
      </Modal>
    </>
  )
}

export default Home
