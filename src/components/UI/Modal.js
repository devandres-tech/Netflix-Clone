import React from 'react'

import Backdrop from './Backdrop'

const Modal = ({
  show,
  modalClosed,
  children,
  movie: { backdrop_path, poster_path },
}) => {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${
      backdrop_path || poster_path
    })`,
  }

  return (
    <div>
      <Backdrop show={show} toggleBackdrop={modalClosed} />
      <div
        style={backgroundStyle}
        className={show ? 'modal show' : 'modal hide'}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
