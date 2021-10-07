import { combineReducers } from 'redux'
import TrendingReducer from './reducerTrending'
import NetflixOriginalsReducer from './reducerNetflixOriginals'
import TopRatedReducer from './reducerTopRated'
import ActionMoviesReducer from './reducerActionMovies'
import ComedyMoviesReducer from './reducerComedyMovies'
import HorrorMoviesReducer from './reducerHorrorMovies'
import RomanceMoviesReducer from './reducerRomanceMovies'
import DocumentaryReducer from './reducerDocumentary'
import HeaderMovieReducer from './reducerHeaderMovie'
import SearchMovieReducer from './reducerSearchMovie'

const rootReducer = combineReducers({
  trending: TrendingReducer,
  netflixOriginals: NetflixOriginalsReducer,
  topRated: TopRatedReducer,
  action: ActionMoviesReducer,
  comedy: ComedyMoviesReducer,
  horror: HorrorMoviesReducer,
  romance: RomanceMoviesReducer,
  documentary: DocumentaryReducer,
  headerMovie: HeaderMovieReducer,
  searchMovie: SearchMovieReducer,
})

export default rootReducer
