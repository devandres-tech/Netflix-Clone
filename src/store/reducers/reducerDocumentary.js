import { FETCH_DOCUMENTARIES } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_DOCUMENTARIES:
      const data = action.payload.data.results;
      return { ...state, data }
    default:
      return state;
  }
}