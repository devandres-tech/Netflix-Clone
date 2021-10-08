import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import Modal from '../components/UI/Modal'
import MovieDetails from '../components/Movie/MovieDetails'
import Movie from '../components/Movie/Movie'
import axios from '../axios-movies'

const Search = ({ location: { searchResults, userInput }, history }) => {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     movies: [],
  //     toggleModal: false,
  //     /** Holds the movie information for a single movie. */
  //     movieOverview: {},
  //   }
  // }

  const [isToggleModal, setIsToggleModal] = useState(false)

  // componentDidMount = async () => {

  //   console.log('movie roww', movieRows)
  //   const { movieRows } = this.props.history.location;
  //   if (movieRows) {
  //     await this.setState({ movies: movieRows });

  //   }
  // }

  // useEffect(() => {
  //   if (!userInput) {
  //     console.log('Search.useEffect()')
  //     history.push('/')
  //   }
  // }, [userInput])

  // useEffect(() => {
  //   console.log('searchResults', searchResults)
  // }, [searchResults])

  // componentDidUpdate = async (prevProps) => {
  //   console.log('hiiiiiii')
  //   if (
  //     prevProps.location.movieRows.length !==
  //     this.props.location.movieRows.length
  //   ) {
  //     await this.setState({ movies: this.props.location.movieRows });
  //   }
  // }

  const closeModal = () => {
    setIsToggleModal(false)
  }

  // /* Get the appropriate details for a specific movie that was clicked */
  // selectMovieHandler = (movie) => {
  //   this.setState({ toggleModal: true });

  //   let url;
  //   /** Make the appropriate API call to get the details for a single movie or tv show. */
  //   if (movie.media_type === "movie") {
  //     const movieId = movie.id;
  //     url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`;

  //   } else if (movie.media_type === "tv") {
  //     const tvId = movie.id
  //     url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=${process.env.API_KEY}`;
  //   }

  //   axios.get(url)
  //     .then(res => {
  //       const movieData = res.data;
  //       this.setState({ movieOverview: movieData });
  //     }).catch(error => {
  //       console.log(error);
  //     });
  // }

  // const { movies } = this.state
  // const { userInput } = this.props.location
  // console.log('search().render()', this.props.history.location)

  return <h1>hello</h1>
  // searchResults === undefined ? (
  //   <Redirect to='/' />
  // ) : (
  //   <div className='search-container'>
  //     {searchResults.map((movie) => {
  //       let movieRows = []
  //       let movieImageUrl
  //       if (movie.poster_path !== null && movie.media_type !== 'person') {
  //         movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path

  //         /** Set the movie object to our Movie component */
  //         const movieComponent = (
  //           <Movie
  //             // movieDetails={() => this.selectMovieHandler(movie)}
  //             key={movie.id}
  //             movieImage={movieImageUrl}
  //             movie={movie}
  //           />
  //         )

  //         /** Push our movie component to our movieRows array */
  //         movieRows.push(movieComponent)
  //       }
  //       return movieRows
  //     })}
  //   </div>
  // )

  // <>
  //   {searchResults && searchResults.data.length > 0 ? (
  //     <div className='search-container'>
  //       {searchResults.map((movie) => {
  //         let movieRows = []
  //         let movieImageUrl
  //         if (movie.poster_path !== null && movie.media_type !== 'person') {
  //           movieImageUrl =
  //             'https://image.tmdb.org/t/p/w500' + movie.poster_path

  //           /** Set the movie object to our Movie component */
  //           const movieComponent = (
  //             <Movie
  //               // movieDetails={() => this.selectMovieHandler(movie)}
  //               key={movie.id}
  //               movieImage={movieImageUrl}
  //               movie={movie}
  //             />
  //           )

  //           /** Push our movie component to our movieRows array */
  //           movieRows.push(movieComponent)
  //         }
  //         return movieRows
  //       })}
  //     </div>
  //   ) : (
  //     <div className='no-results'>
  //       <div className='no-results__text'>
  //         <p>Your search for "{userInput}" did not have any matches.</p>
  //         <p>Suggestions:</p>
  //         <ul>
  //           <li>Try different keywords</li>
  //           <li>Looking for a movie or TV show?</li>
  //           <li>Try using a movie, TV show title, an actor or director</li>
  //           <li>Try a genre, like comedy, romance, sports, or drama</li>
  //         </ul>
  //       </div>
  //     </div>
  //   )}
  /* <Modal
        Modal
        show={isToggleModal}
        modalClosed={closeModal}
        // movie={this.state.movieOverview}
      > */
  /* <MovieDetails movie={this.state.movieOverview} /> */
  /* </Modal> */
  // </>
}

export default Search
