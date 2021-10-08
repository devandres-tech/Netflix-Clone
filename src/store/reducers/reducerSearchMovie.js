import {
  FETCH_SEARCH_MOVIE,
  FETCH_SEARCH_MOVIE_FAIL,
  FETCH_SEARCH_MOVIE_SUCCESS,
} from '../actions/index'

const initialState = {
  isLoading: false,
  searchResults: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_MOVIE:
      return { ...state, isLoading: true }
    case FETCH_SEARCH_MOVIE_FAIL:
      return { ...state, isLoading: false }
    case FETCH_SEARCH_MOVIE_SUCCESS:
      const searchResults = action.payload.data.results
      return { ...state, searchResults, isLoading: false }
    default:
      return state
  }
}
