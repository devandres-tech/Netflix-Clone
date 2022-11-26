import React, { useEffect } from 'react'
import * as actionMoviesSlice from '../store/slices/actionMovieSlice'
import * as movieDetailsSlice from '../store/slices/movieDetailsSlice'
import * as netflixOriginalsSlice from '../store/slices/netflixOriginalsSlice'
import * as trendingSlice from '../store/slices/trendingSlice'
import * as topRatedSlice from '../store/slices/topRatedSlice'
import * as comedySlice from '../store/slices/comedyMoviesSlice'
import * as documentarySlice from '../store/slices/documentarySlice'
import * as horrorMoviesSlice from '../store/slices/horrorMoviesSlice'
import * as romanceMoviesSlice from '../store/slices/romanceMoviesSlice'
import { useAppSelector, useAppDispatch } from '../store'

import Header from './Header'
import DisplayMovieRow from './DisplayMovieRow'

const MainContent = ({ selectMovieHandler }: { selectMovieHandler: any }) => {
  const { movieDetails } = useAppSelector((state) => state.movieDetails)
  const netflixOriginals = useAppSelector((state) => state.netflixOriginals)
  const trending = useAppSelector((state) => state.trending)
  const topRated = useAppSelector((state) => state.topRated)
  const actionMoviesState = useAppSelector((state) => state.action)
  const comedyMovies = useAppSelector((state) => state.comedy)
  const horrorMovies = useAppSelector((state) => state.horror)
  const romanceMovies = useAppSelector((state) => state.romance)
  const documentaries = useAppSelector((state) => state.documentary)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      movieDetailsSlice.getMovieDetailsAsync({
        mediaType: 'tv',
        mediaId: '63351',
      })
    )
    dispatch(netflixOriginalsSlice.getNetflixOriginalsAsync())
    dispatch(trendingSlice.getTrendingAsync())
    dispatch(topRatedSlice.getTopRatedAsync())
    dispatch(actionMoviesSlice.getActionMoviesAsync())
    dispatch(comedySlice.getComedyMoviesAsync())
    dispatch(horrorMoviesSlice.getHorrorMoviesAsync())
    dispatch(romanceMoviesSlice.getRomanceMoviesAsync())
    dispatch(documentarySlice.getDocumentariesAsync())
  }, [dispatch])

  return (
    <div className='container'>
      <Header name={movieDetails.name} overview={movieDetails.overview} />
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
        <DisplayMovieRow
          title='Top Rated'
          selectMovieHandler={selectMovieHandler}
          movies={topRated.data}
        />
        <DisplayMovieRow
          title='Action Movies'
          selectMovieHandler={selectMovieHandler}
          movies={actionMoviesState.data}
        />
        <DisplayMovieRow
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
        />
      </div>
    </div>
  )
}

export default MainContent
