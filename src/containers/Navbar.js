import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import NavigationItem from '../components/NavigationItem'
import SearchLogo from '../static/images/search-icon.svg';
import NetflixLogo from '../static/images/Netflix_Logo_RGB.png';
import BellLogo from '../static/images/bell-logo.svg';
import DropdownArrow from '../static/images/drop-down-arrow.svg';
import DropdownContent from "../components/DropdownContent";

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolling: false,
    }
    // use to debounce api call
    this.onSearchHandler = _.debounce(this.onSearchHandler, 1000)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /** changes the scrolling state depending on the Y-position */
  handleScroll = (event) => {
    if (window.scrollY === 0) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY > 50) {
      this.setState({ scrolling: true });
    }
  }

  /** makes api call */
  onSearchHandler = (event) => {
    this.props.history.push('/search')
    console.log('helo--', event.target.value)
  }

  onChange = (event) => {
    const userInput = event.target.value;
    this.props.history.push('/search')
    this.onSearchHandler(event)
    if (userInput === "") {
      this.props.history.push('/')
    }
  }

  /** Make API call as soon as the user starts typing.  */
  makeAipCall = (searchItem) => {
    const url = `/search/multi?api_key=${process.env.API_KEY}&language=en-US&include_adult=false&query=${searchItem}`;

    axios.get(url)
      .then(res => {
        const results = res.data.results;
        let movieImageUrl;
        /** Will hold all our movies Components */
        let movieRows = [];

        /** Loop through all the movies */
        results.forEach((movie) => {
          /** Manually build our image url and set it on the Movie component. */
          if (movie.poster_path !== null && movie.media_type !== "person") {
            movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

            /** Set the movie object to our Movie component */
            const movieComponent = <Movie
              movieDetails={() => this.selectMovieHandler(movie)}
              key={movie.id}
              movieImage={movieImageUrl}
              movie={movie} />

            /** Push our movie component to our movieRows array */
            movieRows.push(movieComponent);
          }
        })
        /** Set our MovieList array to the movieRows array */
        this.setState({ MovieList: movieRows });
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    const { scrolling, showMovies } = this.state;

    return (
      <nav className={"navigation " + (scrolling ? "black" : "")} >
        <ul className="navigation__container">
          <NavLink to="/">
            <img className="navigation__container--logo" src={NetflixLogo} alt="" />
          </NavLink>
          <DropdownArrow className="navigation__container--downArrow-2"></DropdownArrow>
          <div className="navigation__container-link pseudo-link">Home</div>
          <div className="navigation__container-link pseudo-link">TV Shows</div>
          <div className="navigation__container-link pseudo-link">Movies</div>
          <div className="navigation__container-link pseudo-link">Recently Added</div>
          <div className="navigation__container-link pseudo-link">My List</div>

          <div className="navigation__container--left">
            <SearchLogo className="logo" />
            <input
              onChange={() => this.onChange(event)}
              className="navigation__container--left__input"
              type="text"
              placeholder="Title, genres, people" />
          </div>

          <div className="navigation__container-link pseudo-link">KIDS</div>
          <div className="navigation__container-link pseudo-link">DVD</div>
          <BellLogo className="navigation__container--bellLogo" />

          <DropdownContent />
          <DropdownArrow className="navigation__container--downArrow" />
        </ul>
      </nav>
    )
  }
}

export default withRouter(Navbar); 
