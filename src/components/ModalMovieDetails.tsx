import React from 'react'

import AddIcon from '../static/images/add.svg'
import PlayIcon from '../static/images/play-button.svg'
import { IMovieDetails } from '../types';

const MovieDetails = ({
  movie: {
    name,
    vote_average,
    first_air_date,
    episode_run_time,
    number_of_episodes,
    number_of_seasons,
    overview,
  },
}: IMovieDetails): JSX.Element => {
  return (
    <div className='modal__container'>
      <h1 className='modal__title'>{name}</h1>
      <p className='modal__info'>
        <span className='modal__rating'>Rating: {vote_average * 10}% </span>
        Release date: {first_air_date} Runtime:{' '}
        {episode_run_time}m
      </p>
      <p className='modal__episode'>
        {number_of_episodes ? ' Episodes: ' + number_of_episodes : ''}
        {number_of_seasons ? ' Seasons: ' + number_of_seasons : ''}
      </p>
      <p className='modal__overview'>{overview}</p>
      <button className='modal__btn modal__btn--red'>
        <PlayIcon className='modal__btn--icon' />
        Play
      </button>
      <button className='modal__btn'>
        <AddIcon className='modal__btn--icon' />
        My List
      </button>
    </div>
  )
}

export default MovieDetails
