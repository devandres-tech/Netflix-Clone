import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import MovieGenre from '../components/MovieGenre';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </>
    );
  }
}

{/* <div className="movieShowcase__container">
  {
    this.props.movies.map((movie) => {
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
        <div className={"movieShowcase__container--movie" + (netflixUrl ? "__netflix" : "")}>
          <img src={movieImageUrl} className="movieShowcase__container--movie-image" />
        </div>
      )
    })
  }
</div> */}