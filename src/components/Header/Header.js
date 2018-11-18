import React, { Component } from 'react';
import PlayLogo from '../../static/images/play-button.svg'; 
import AddLogo from '../../static/images/add.svg'; 


class Header extends Component {

  render() {

    const backgroundStyle = {
      transform: "scaleY(-45rem)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path})`
    }

    return (
      <header style={backgroundStyle} className="header">
          <div className="header__container">
              <h1 className="header__container-heading">{this.props.movie.name}</h1>
          <button onClick={() => alert("not a moive!")} className="header__container-btnPlay">
            <PlayLogo className="header__container-btnMyList-play" />
            Play
          </button>
          <button className="header__container-btnMyList">
            <AddLogo className="header__container-btnMyList-add" />
            My List
          </button>
              <p className="header__container-overview">{this.props.movie.overview}</p>
          </div>    
    
        </header>
    )

  }
}



export default Header; 