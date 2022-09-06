import React, { useEffect } from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import * as movieActions from '../store/actions'
import { RootReducerState } from '../types/redux/reducer'

import Header from './Header'
import DisplayMovieRow from './DisplayMovieRow'
import { IMainContent } from '../types/components'
import { MovieDetailType } from '../types/data';

const MainContent = ({ selectMovieHandler }: IMainContent): JSX.Element => {
  const { movieDetails } = useSelector((state: RootReducerState) => state.movieDetails);
  const netflixOriginals = useSelector((state: RootReducerState) => state.netflixOriginals)
  const trending = useSelector((state: RootReducerState) => state.trending)
  const topRated = useSelector((state: RootReducerState) => state.topRated)
  const actionMovies = useSelector((state: RootReducerState) => state.action)
  const comedyMovies = useSelector((state: RootReducerState) => state.comedy)
  const horrorMovies = useSelector((state: RootReducerState) => state.horror)
  const romanceMovies = useSelector((state: RootReducerState) => state.romance)
  const documentaries = useSelector((state: RootReducerState) => state.documentary)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.fetchMovieDetails('tv', 63351))
    dispatch(movieActions.fetchNetflixOriginals())
    dispatch(movieActions.fetchTrending())
    dispatch(movieActions.fetchTopRated())
    dispatch(movieActions.fetchActionMovies())
    dispatch(movieActions.fetchComedyMovies())
    dispatch(movieActions.fetchHorrorMovies())
    dispatch(movieActions.fetchRomanceMovies())
    dispatch(movieActions.fetchDocumentaries())
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
        <DisplayMovieRow
          title='Top Rated'
          selectMovieHandler={selectMovieHandler}
          movies={topRated.data}
        />
        <DisplayMovieRow
          title='Action Movies'
          selectMovieHandler={selectMovieHandler}
          movies={actionMovies.data}
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
