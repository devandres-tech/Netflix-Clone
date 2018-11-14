import React, { Component } from 'react';
import NavigationItem from '../../components/NavigationItems/NavigationItem/NavigationItem'
import SearchLogo from '../../static/images/search-icon.svg'; 

class navigation extends Component {
 state = {
   scrolling: false
 }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll); 
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll); 
  }

  handleScroll = (event) => {
    if (window.scrollY === 0 ) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY > 50) {
      this.setState({ scrolling: true });
    }
  }

 


  render () {

    return (
      <nav className={"navigation " + (this.state.scrolling ? "black" : "")} >
      
        <ul className="navigation__container">
          <NavigationItem link="/" exact>Netflix</NavigationItem>
          <NavigationItem link="/">Home</NavigationItem>
          <NavigationItem link="/">TV Shows</NavigationItem>
          <NavigationItem link="/">Movies</NavigationItem>
          <NavigationItem link="/">Recently Added</NavigationItem>
          <NavigationItem link="/">My List</NavigationItem>

          <div className="navigation__container--left">
            
            <SearchLogo className="logo" />
            <input
              onChange={this.props.showMovies}
              className="navigation__container--left__input"
              // onKeyPress={this.props.showMan}
              type="text"
              placeholder="Title, genres, people" />
            
          </div>
          <NavigationItem link="/">KIDS</NavigationItem>
          <NavigationItem link="/">DVD</NavigationItem>
        </ul>
      </nav>
    )
  }
} 

export default navigation; 