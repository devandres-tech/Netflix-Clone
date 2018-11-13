import React from 'react';

const movieRow = (props) => (

   <div className="movie">
         <div className="movie__column-poster">
            <img src={props.movie.posterSrc} alt="" className="movie__poster" />
         </div>
      
      <div className={"movie__column-overview " + (props.val % 2 == 0 ? 'even' : 'odd')}>
            <h1 className="movie__column-overview-heading">{props.movie.title}</h1>
            <p className="movie__column-overview-text">{props.movie.overview}</p>
            <a className="movie__column-overview-btn"
               onClick={() => { window.location.href = "https://www.themoviedb.org/movie/" + props.movie.id; }}>
               view</a>
         </div>
   </div> 
);

export default movieRow; 