import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as movieActions from '../store/actions'

import Header from './Header'
import Footer from './Footer'

import DisplayMovieRow from './DisplayMovieRow'

const MainContent = ({ selectMovieHandler }) => {
  const headerMovie = useSelector((state) => state.headerMovie)
  const netflixOriginals = useSelector((state) => state.netflixOriginals)
  const trending = useSelector((state) => state.trending)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(movieActions.fetchHeaderMovie())
    dispatch(movieActions.fetchNetflixOriginals())
    dispatch(movieActions.fetchTrending())
  }, [dispatch])

  return (
    <div className='container'>
      <Header movie={headerMovie} />
      <div className='movieShowcase'>
        <DisplayMovieRow
          isNetflixMovies={true}
          title='Netflix Originals'
          selectMovieHandler={selectMovieHandler}
          movies={netflixOriginals.data}
        />
        <DisplayMovieRow
          title='Trending'
          selectMovieHandler={selectMovieHandler}
          movies={trending.data}
        />
      </div>
      <Footer />
    </div>
  )
}

export default MainContent
