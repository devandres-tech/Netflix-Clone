import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'
import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAIL,
} from '../actions/index'
import { string } from 'prop-types'

interface IMovieDetails {
  backdrop_path?: string
  poster_path?: string
  title: any
  name: any
  vote_average: any
  release_date: any
  first_air_date: any
  runtime: any
  episode_run_time: any
  number_of_episodes: any
  number_of_seasons: any
  overview: any
}

interface IInitialState {
  isLoading: boolean
  movieDetails: IMovieDetails
}

const media_type = {
  tv: 'tv',
  movie: 'movie',
}

// const initialState: IInitialState = {
//   isLoading: false,
//   movieDetails: [],
// }

// export default function (state = initialState, action: any) {
//   switch (action.type) {
//     case FETCH_MOVIE_DETAILS:
//       return { ...state, isLoading: true }
//     case FETCH_MOVIE_DETAILS_FAIL:
//       return { ...state, isLoading: false }
//     case FETCH_MOVIE_DETAILS_SUCCESS:
//       const movieDetails = action.payload.data
//       return { ...state, movieDetails, isLoading: false }
//     default:
//       return state
//   }
// }

const initialState: IInitialState = {
  isLoading: false,
  movieDetails: {
    backdrop_path: '',
    poster_path: '',
    title: '',
    name: '',
    vote_average: '',
    release_date: '',
    first_air_date: '',
    runtime: '',
    episode_run_time: '',
    number_of_episodes: '',
    number_of_seasons: '',
    overview: '',
  },
}

export const getMovieDetailsAsync = createAsyncThunk<
  any,
  string,
  { state: RootState }
>('movieDetails/getMovieDetailsAsync', async (mediaType, mediaId) => {
  let urlPath
  if (mediaType === media_type.movie)
    urlPath = `/movie/${mediaId}?api_key=${process.env.API_KEY}`
  if (mediaType === media_type.tv)
    urlPath = `/tv/${mediaId}?api_key=${process.env.API_KEY}`
  const response = await axios.get(urlPath)
  return response.data.results
})

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieDetailsAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.movieDetails = payload
    })
  },
})

export default movieDetailsSlice.reducer
