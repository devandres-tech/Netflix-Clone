import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAIL,
} from '../actions/index'

const initialState = {
  isLoading: false,
  movieDetails: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return { ...state, isLoading: true }
    case FETCH_MOVIE_DETAILS_FAIL:
      return { ...state, isLoading: false }
    case FETCH_MOVIE_DETAILS_SUCCESS:
      const movieDetails = action.payload.data
      return { ...state, movieDetails, isLoading: false }
    default:
      return state
  }
}
