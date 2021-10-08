import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useDebounce } from '../hooks/useDebounce'
import * as movieActions from '../store/actions'
import Modal from '../components/UI/Modal'
import MovieDetails from '../components/Movie/MovieDetails'
import Movie from '../components/Movie/Movie'

// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Search = () => {
  let query = useQuery()
  const debouncedSearchTerm = useDebounce(query.get('q'), 500)
  const [isToggleModal, setIsToggleModal] = useState(false)
  const { searchResults, isLoading } = useSelector((state) => state.searchMovie)
  const { movieDetails } = useSelector((state) => state.movieDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(movieActions.fetchSearchMovie(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm])

  const onCloseModalHandler = () => {
    setIsToggleModal(false)
  }

  const onSelectMovieHandler = (movie) => {
    dispatch(movieActions.fetchMovieDetails(movie.media_type, movie.id))
    setIsToggleModal(true)
  }

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <>
        <div className='search-container'>
          {searchResults.map((movie) => {
            let movieRows = []
            let movieImageUrl
            if (movie.poster_path !== null && movie.media_type !== 'person') {
              movieImageUrl =
                'https://image.tmdb.org/t/p/w500' + movie.poster_path
              const movieComponent = (
                <Movie
                  movieDetails={() => onSelectMovieHandler(movie)}
                  key={movie.id}
                  movieImage={movieImageUrl}
                  movie={movie}
                />
              )
              movieRows.push(movieComponent)
            }
            return movieRows
          })}
        </div>
        <Modal
          Modal
          show={isToggleModal}
          modalClosed={onCloseModalHandler}
          movie={movieDetails}
        >
          <MovieDetails movie={movieDetails} />
        </Modal>
      </>
    ) : (
      <div className='no-results'>
        <div className='no-results__text'>
          <p>
            Your search for "{debouncedSearchTerm}" did not have any matches.
          </p>
          <p>Suggestions:</p>
          <ul>
            <li>Try different keywords</li>
            <li>Looking for a movie or TV show?</li>
            <li>Try using a movie, TV show title, an actor or director</li>
            <li>Try a genre, like comedy, romance, sports, or drama</li>
          </ul>
        </div>
      </div>
    )
  }

  return !isLoading ? renderSearchResults() : <h1>Loading...</h1>
}

export default Search
