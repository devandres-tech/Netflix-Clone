import React from 'react';

export default function MovieGenreImage(props) {
  let netflixUrl = false;

  if (
    props.url ===
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
  ) {
    netflixUrl = true;
  }

  return (
    <div
      onClick={props.movieDetailsModal}
      className={
        'movieShowcase__container--movie' + (netflixUrl ? '__netflix' : '')
      }
    >
      <img
        src={props.posterUrl}
        className="movieShowcase__container--movie-image"
      />
    </div>
  );
}
