import React from 'react'

const Movie = ({ movieDetails, movieImage }) => (
  <div className='movie'>
    <div onClick={movieDetails} className='movie__column-poster'>
      <img src={movieImage} alt='' className='movie__poster' />
    </div>
  </div>
)

export default Movie
