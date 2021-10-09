import React from 'react'

import PlayLogo from '../static/images/play-button.svg'
import AddLogo from '../static/images/add.svg'
import ReactPlayer from 'react-player'

const Header = ({ movie: { backdrop_path, name, overview } }) => {
  return (
    <header className='header'>
      <ReactPlayer
        playing={true}
        loop={true}
        width='100%'
        height='100%'
        className='header__video'
        url='https://vimeo.com/384025132'
      />
      <h1 className='header__container-heading'>{name}</h1>
      <button
        onClick={() => alert('not a movie!')}
        className='header__container-btnPlay'
      >
        <PlayLogo className='header__container-btnMyList-play' />
        Play
      </button>
      <button className='header__container-btnMyList'>
        <AddLogo className='header__container-btnMyList-add' />
        My List
      </button>
      <p className='header__container-overview'>{overview}</p>
      <div className='header__container--fadeBottom'></div>
    </header>
  )
}

export default Header
