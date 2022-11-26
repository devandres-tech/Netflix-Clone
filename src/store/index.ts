import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import TrendingReducer from './slices/trendingSlice'
import NetflixOriginalsReducer from './slices/netflixOriginalsSlice'
import TopRatedReducer from './slices/topRatedSlice'
import ActionMoviesReducer from './slices/actionMovieSlice'
import ComedyMoviesReducer from './slices/comedyMoviesSlice'
import HorrorMoviesReducer from './slices/horrorMoviesSlice'
import RomanceMoviesReducer from './slices/romanceMoviesSlice'
import DocumentaryReducer from './slices/documentarySlice'
import SearchMovieReducer from './slices/searchSlice'
import MovieDetailsReducer from './slices/movieDetailsSlice'

export const store = configureStore({
  reducer: {
    trending: TrendingReducer,
    netflixOriginals: NetflixOriginalsReducer,
    topRated: TopRatedReducer,
    action: ActionMoviesReducer,
    comedy: ComedyMoviesReducer,
    horror: HorrorMoviesReducer,
    romance: RomanceMoviesReducer,
    searchMovie: SearchMovieReducer,
    documentary: DocumentaryReducer,
    movieDetails: MovieDetailsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
