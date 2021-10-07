import { FETCH_SEARCH_MOVIE } from '../actions/index'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_SEARCH_MOVIE:
      const data = action.payload.data.results
      return { ...state, data }
    default:
      return state
  }
}
