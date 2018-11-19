import React, { Component } from 'react';
import NavigationItem from '../../components/NavigationItems/NavigationItem/NavigationItem'
import SearchLogo from '../../static/images/search-icon.svg'; 
import NetflixLogo from '../../static/images/Netflix_Logo_RGB.png'; 
import BellLogo from '../../static/images/bell-logo.svg';
import DropdownArrow from '../../static/images/drop-down-arrow.svg'; 

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
          <NavigationItem link="/" exact><img className="navigation__container--logo" src={NetflixLogo} alt=""/></NavigationItem>
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
              type="text"
              placeholder="Title, genres, people" />
            
          </div> 
         
          <NavigationItem link="/">KIDS</NavigationItem>         
          <NavigationItem link="/">DVD</NavigationItem>
          <BellLogo className="navigation__container--bellLogo" />  
         
            <div className="dropdownContainer">
            
              <div className="navigation__container--userLogo">
                <div className="dropdownContent">
                <div>
                  <div className="dropdownContent--user"></div>
                  <p className="dropdownContent--user-text">Andres</p>
                </div>
                <div>
                  <div className="dropdownContent--user dropdownContent--user-2"></div>
                  <p className="dropdownContent--user-text">Tony</p>
                </div>
                <div>
                  <div className="dropdownContent--user dropdownContent--user-3"></div>
                  <p className="dropdownContent--user-text">Luis</p>
                </div>
                <p className="dropdownContent-text">Manage Profiles</p>
             
                </div>
                <div className="dropdownContent dropdownContent--2">
                <p className="dropdownContent-textOutside">Account</p>
                <p className="dropdownContent-textOutside">Help Center</p>
                <p className="dropdownContent-textOutside">Sign out of Netflix</p>
                </div>
              </div>
            </div>
  
          <DropdownArrow className="navigation__container--downArrow"/>
        </ul>
        
      </nav>
    )
  }
} 

export default navigation; 