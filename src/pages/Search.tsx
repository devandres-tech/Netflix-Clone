import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ModalMovieDetails from '../components/ModalMovieDetails'
import Modal from '../components/UI/Modal'
import { useDebounce } from '../hooks/useDebounce'
import * as movieActions from '../store/actions'
import { RootReducerState } from '../types';
import { SearchMovieReducerState, MovieDetailsReducerState } from '../types/redux/reducer';

// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Search = () => {
  let query = useQuery()
  const debouncedSearchTerm = useDebounce(query.get('q') || "", 500)
  const [isToggleModal, setIsToggleModal] = useState(false)
  const { searchResults, isLoading } = useSelector((state: RootReducerState): SearchMovieReducerState => state.searchMovie)
  const { movieDetails } = useSelector((state: RootReducerState): MovieDetailsReducerState => state.movieDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(movieActions.fetchSearchMovie(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm])

  const onCloseModalHandler = () => {
    setIsToggleModal(false)
  }

  const onSelectMovieHandler = (search: {media_type: string, id: number}) => {
    dispatch(movieActions.fetchMovieDetails(search.media_type, search.id))
    setIsToggleModal(true)
  }

  const renderSearchResults = () => {
    return searchResults !== undefined && searchResults.length > 0 ? (
      <>
        <div className='search-container'>
          {searchResults.map((movie) => {
            if (movie.media_type !== 'person' && movie.backdrop_path !== null) {
              const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
              return (
                <div className='movie' key={movie.id}>
                  <div
                    onClick={() => onSelectMovieHandler(movie)}
                    className='movie__column-poster'
                  >
                    <img src={movieImageUrl} alt='' className='movie__poster' />
                  </div>
                </div>
              )
            }
          }).filter(Boolean)}
        </div>
        <Modal
          show={isToggleModal}
          modalClosed={onCloseModalHandler}
          backgroundImage={
            movieDetails && (movieDetails.backdrop_path || movieDetails.poster_path)
          }
        >
          { movieDetails && <ModalMovieDetails movie={movieDetails} /> }
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
