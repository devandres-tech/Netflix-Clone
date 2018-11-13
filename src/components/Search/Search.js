import React from 'react';

const search = (props) => (
   
   <input
      onChange={props.onSearch}
      onClick={props.onShow}
      type="text"
      placeholder="Title, genres, people" />
)

export default search;