import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../store'
import ModalMovieDetails from '../components/ModalMovieDetails'
import Modal from '../components/Modal'
import { useDebounce } from '../hooks/useDebounce'
import * as searchSlice from '../store/slices/searchSlice'
import * as movieDetailsSlice from '../store/slices/movieDetailsSlice'

interface IMovie {
  id: string
  media_type?: string
  backdrop_path?: string
}

// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Search = () => {
  let query = useQuery()
  const debouncedSearchTerm = useDebounce(query.get('q'), 500)
  const [isToggleModal, setIsToggleModal] = useState(false)
  const { searchResults, isLoading } = useAppSelector(
    (state) => state.searchMovie
  )
  const { movieDetails } = useAppSelector((state) => state.movieDetails)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(searchSlice.searchItemsAsync(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm])

  const onCloseModalHandler = () => {
    setIsToggleModal(false)
  }

  const onSelectMovieHandler = (movie: IMovie) => {
    dispatch(
      movieDetailsSlice.getMovieDetailsAsync({
        mediaType: movie.media_type,
        mediaId: movie.id,
      })
    )
    setIsToggleModal(true)
  }

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <>
        <div className='search-container'>
          {searchResults.map((movie: IMovie) => {
            if (movie.backdrop_path !== null && movie.media_type !== 'person') {
              const movieImageUrl =
                'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
              return (
                <div className='movie'>
                  <div
                    onClick={() => onSelectMovieHandler(movie)}
                    className='movie__column-poster'
                  >
                    <img src={movieImageUrl} alt='' className='movie__poster' />
                  </div>
                </div>
              )
            }
          })}
        </div>
        <Modal
          show={isToggleModal}
          toggleBackdrop={onCloseModalHandler}
          backgroundImage={
            movieDetails.backdrop_path || movieDetails.poster_path
          }
        >
          <ModalMovieDetails {...movieDetails} />
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
