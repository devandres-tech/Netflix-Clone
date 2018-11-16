import React, { Component } from 'react'; 






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
              <button onClick={() => alert("not a moive!")} className="header__container-btnPlay">Play</button>
          <button className="header__container-btnMyList">My List</button>
              <p className="header__container-overview">{this.props.movie.overview}</p>
          </div>    
    
        </header>
    )

  }
}


// const header = (props) => (

//    <header className="header">
//   <div className="header__background" style={{ background: `url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path})` }}>
//       <h1>{props.movie.name}</h1>

//    </div>
//    </header>
// ); 

export default Header; 