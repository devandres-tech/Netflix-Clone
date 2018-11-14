import React, { Component } from 'react'; 

import NavigationItem from './NavigationItem/NavigationItem';
import SearchLogo from '../../static/images/search-icon.svg'; 
import SearchMovie from '../../containers/SearchMovie/SearchMovie'; 


// const navigationItems = (props) => (
//   <ul className="navigation__container">
//     <NavigationItem link="/" exact>Netflix</NavigationItem>
//     <NavigationItem link="/">Home</NavigationItem>
//     <NavigationItem link="/">TV Shows</NavigationItem>
//     <NavigationItem link="/">Movies</NavigationItem>
//     <NavigationItem link="/">Recently Added</NavigationItem>
//     <NavigationItem link="/">My List</NavigationItem>
    
//     <div className="navigation__container--left">
//       <SearchLogo className="logo"/>
//       <SearchMovie />
//       {/* <input 
//         placeholder="Title, people, genres" 
//         type="text" /> */}
//       {/* <p>hello</p>
//       <p>hello</p> */}
//     </div>
//   </ul>
// );

// export default navigationItems; 

class NavigationItems extends Component {


  render() {
    return (
      <ul className="navigation__container">
     <NavigationItem link="/" exact>Netflix</NavigationItem>
     <NavigationItem link="/">Home</NavigationItem>
     <NavigationItem link="/">TV Shows</NavigationItem>
     <NavigationItem link="/">Movies</NavigationItem>
     <NavigationItem link="/">Recently Added</NavigationItem>
     <NavigationItem link="/">My List</NavigationItem>

     <div className="navigation__container--left">
       <SearchLogo className="logo"/>
     </div>
   </ul>
    ); 
  }
}

export default NavigationItems; 
