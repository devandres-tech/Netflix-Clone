import { FETCH_TRENDING } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_TRENDING:
      const data = action.payload.data.results;
      return { ...state, data }
    default:
      return state;
  }
}