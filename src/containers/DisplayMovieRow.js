import React, { Component } from 'react';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import MovieGenre from '../components/MovieGenre';

const getMovieRows = (movies, url, selectMovieHandler) => {
  const movieRow = movies.map((movie) => {
    let movieImageUrl =
      'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;
    if (
      url === `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
    ) {
      movieImageUrl =
        'https://image.tmdb.org/t/p/original/' + movie.poster_path;
    }

    if (movie.poster_path && movie.backdrop_path !== null) {
      const movieComponent = (
        <MovieGenre
          selectMovieHandler={selectMovieHandler}
          key={movie.id}
          url={url}
          posterUrl={movieImageUrl}
          movie={movie}
        />
      );

      return movieComponent;
    }
  });
  return movieRow;
};

// export default function DisplayMovieRow(props) {
//   // let movies = getMovieRows(props.movies, props.url, props.selectMovieHandler);
//   return (
//     <>
//       <h1 className="movieShowcase__heading">{props.title}</h1>
//       {/* <div className="movieShowcase__container">{movies}</div> */}
//       <OwlCarousel
//         ref="car"
//         options={options}
//         event={events}
//         className="movieShowcase__container"
//       >
//         {props.movies.map((movieItem) => {
//           return (
//             <div>
//               <img src={movieItem.posterUrl} />
//             </div>
//           );
//         })}
//       </OwlCarousel>
//     </>
//   );
// }

// import React, { Component } from 'react'

export default class DisplayMovieRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onSlideChange = (value) => {
    this.setState({ value })
  }

  render() {
    console.log('DisplayMovie.render()', this.props.movies);
    let netflixUrl = false;
    if (
      this.props.url ===
      `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
    ) {
      netflixUrl = true;
    }
    return (
      <>
        <h1 className="movieShowcase__heading">{this.props.title}</h1>
        {/* <div className="movieShowcase__container">{movies}</div> */}
        <Dots value={this.state.value} onChange={this.onSlideChange} number={this.props.movies.length} />
        <Carousel
          // className="movieShowcase__container"
          infinite
          draggable={false}
          arrows
          value={this.state.value}
          slidesPerScroll={4}
          slidesPerPage={4}
          onChange={this.onSlideChange}
        >
          {this.props.movies.map((movie, idx) => {
            let movieImageUrl =
              'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;
            if (
              this.props.url ===
              `/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
            ) {
              movieImageUrl =
                'https://image.tmdb.org/t/p/original/' + movie.poster_path;
            }
            // return <img key={idx} src={movieImageUrl} />;
            return (
              <div
                className={"movieShowcase__container--movie" + (netflixUrl ? "__netflix" : "")}
              >
                <img
                  className="movieShowcase__container--movie-image"
                  src={movieImageUrl}
                />
              </div>
            );
          })}
        </Carousel>
      </>
    );
  }
}
