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
          <div  className="header__background">
              {/* <h1>{this.props.movie.name}</h1> */}
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