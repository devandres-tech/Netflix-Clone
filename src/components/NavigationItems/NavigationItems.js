import React from 'react'; 
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = props => (
  <ul className="navigation__container">
    <NavigationItem link="/" exact>Netflix</NavigationItem>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/">TV Shows</NavigationItem>
    <NavigationItem link="/">Movies</NavigationItem>
    <NavigationItem link="/">Recently Added</NavigationItem>
    <NavigationItem link="/">My List</NavigationItem>
    
    <div className="navigation__container--left">
      <input 
        placeholder="Search movie..." 
        type="text" />
      {/* <p>hello</p>
      <p>hello</p> */}
    </div>
  </ul>
);

export default navigationItems; 
