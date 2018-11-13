import React from 'react';

const search = (props) => (
   <div className="search">
   
      <input 
         onChange={props.onSearch}
         type="text" 
         placeholder="Search movie..." 
         className="search__input"/>
   
   </div>
   
);

export default search; 