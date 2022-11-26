import React, { useEffect } from 'react'
import * as actionMoviesSlice from '../store/slices/actionMovieSlice'
import * as movieDetailsSlice from '../store/slices/movieDetailsSlice'
import * as netflixOriginalsSlice from '../store/slices/netflixOriginalsSlice'
import * as trendingSlice from '../store/slices/trendingSlice'
import { useAppSelector, useAppDispatch } from '../store'

import Header from './Header'
import DisplayMovieRow from './DisplayMovieRow'

const MainContent = ({ selectMovieHandler }: { selectMovieHandler: any }) => {
  const { movieDetails } = useAppSelector((state) => state.movieDetails)
  const netflixOriginals = useAppSelector((state) => state.netflixOriginals)
  const trending = useAppSelector((state) => state.trending)
  // const topRated = useSelector((state) => state.topRated)
  const actionMoviesState = useAppSelector((state) => state.action)
  // const comedyMovies = useSelector((state) => state.comedy)
  // const horrorMovies = useSelector((state) => state.horror)
  // const romanceMovies = useSelector((state) => state.romance)
  // const documentaries = useSelector((state) => state.documentary)

  const dispatch = useAppDispatch()

  useEffect(() => {
    // dispatch(movieDetailsSlice.getMovieDetailsAsync('tv', '63351'))
    dispatch(
      movieDetailsSlice.getMovieDetailsAsync({
        mediaType: 'tv',
        mediaId: '63351',
      })
    )
    dispatch(netflixOriginalsSlice.getNetflixOriginalsAsync())
    dispatch(trendingSlice.getTrendingAsync())
    // dispatch(movieActions.fetchTopRated())
    dispatch(actionMoviesSlice.getActionMoviesAsync())
    // dispatch(movieActions.fetchComedyMovies())
    // dispatch(movieActions.fetchHorrorMovies())
    // dispatch(movieActions.fetchRomanceMovies())
    // dispatch(movieActions.fetchDocumentaries())
  }, [dispatch])

  return (
    <div className='container'>
      <Header movie={movieDetails} />
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
        {/* <DisplayMovieRow
          title='Top Rated'
          selectMovieHandler={selectMovieHandler}
          movies={topRated.data}
        /> */}
        <DisplayMovieRow
          title='Action Movies'
          selectMovieHandler={selectMovieHandler}
          movies={actionMoviesState.data}
        />
        {/* <DisplayMovieRow
          title='Comedy'
          selectMovieHandler={selectMovieHandler}
          movies={comedyMovies.data}
        />
        <DisplayMovieRow
          title='Horror Movies'
          selectMovieHandler={selectMovieHandler}
          movies={horrorMovies.data}
        />
        <DisplayMovieRow
          title='Romance'
          selectMovieHandler={selectMovieHandler}
          movies={romanceMovies.data}
        />
        <DisplayMovieRow
          title='Documentaries'
          selectMovieHandler={selectMovieHandler}
          movies={documentaries.data}
        /> */}
      </div>
    </div>
  )
}

export default MainContent
