import React, { Component } from 'react';
import Slider from "react-slick";


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
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      draggable: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1824,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 798,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        }
      ]
    };
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
        <Slider
          // className="movieShowcase__container"
          {...settings}
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
        </Slider>
      </>
    );
  }
}
