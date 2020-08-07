import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default class DisplayMovieRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnMount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = (e) => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
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
          className="movieShowcase__container"
          navigation={true}
          grabCursor={false}
          draggable={false}
          loop={true}
          loopAdditionalSlides={
            width >= 1378 ? 4 :
              width >= 998 ? 3 :
                width >= 625 ? 2 : 2
          }
          breakpoints={{
            1378: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            998: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            625: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            0: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          preventClicksPropagation={true}
          preventClicks={true}
          scrollbar={{ draggable: false, hide: true }}
          slideToClickedSlide={false}
          pagination={{ clickable: true }}
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
            if (movie.poster_path && movie.backdrop_path !== null) {
              return (
                <SwiperSlide
                  onClick={() => this.props.selectMovieHandler(movie)}
                  key={idx}
                  className={
                    'movieShowcase__container--movie' +
                    (netflixUrl ? '__netflix' : '')
                  }
                >
                  <img
                    src={movieImageUrl}
                    className="movieShowcase__container--movie-image"
                  />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </>
    );
  }
}
