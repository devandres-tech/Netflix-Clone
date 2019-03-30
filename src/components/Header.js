import React from 'react';

import PlayLogo from '../static/images/play-button.svg';
import AddLogo from '../static/images/add.svg';


export default function Header(props) {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path})`,
    backgroundPosition: "center",
  }

  return (
    <header style={backgroundStyle} className="header">
      <div className="header__container">
        <h1 className="header__container-heading">{props.movie.name}</h1>
        <button onClick={() => alert("not a movie!")} className="header__container-btnPlay">
          <PlayLogo className="header__container-btnMyList-play" />
          Play
        </button>

        <button className="header__container-btnMyList">
          <AddLogo className="header__container-btnMyList-add" />
          My List
        </button>
        <p className="header__container-overview">{props.movie.overview}</p>
      </div>
      <div className="header--fadeBottom"></div>
    </header>
  )
}