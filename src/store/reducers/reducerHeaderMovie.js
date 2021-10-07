import { FETCH_HEADER_MOVIE } from '../actions/index'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_HEADER_MOVIE:
      const data = action.payload.data
      return { ...state, ...data }
    default:
      return state
  }
}
