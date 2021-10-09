import React, { useState } from 'react'

import MainContent from '../components/MainContent'
import Modal from '../components/UI/Modal'
import ModalMovieDetails from '../components/ModalMovieDetails'

const Home = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const [movieDetails, setMovieDetails] = useState({})

  const selectMovieHandler = async (movie) => {
    setToggleModal(true)
    setMovieDetails(movie)
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
        backgroundImage={movieDetails.backdrop_path || movieDetails.poster_path}
      >
        <ModalMovieDetails movie={movieDetails} />
      </Modal>
    </>
  )
}

export default Home
