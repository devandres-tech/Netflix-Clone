import { FETCH_NETFLIX_ORIGINALS } from '../actions/index'
import { AnyAction } from 'redux';
import { DefaultReducerState, IAction } from '../../types';

export default function (state: DefaultReducerState = {}, action: IAction) {
  switch (action.type) {
    case FETCH_NETFLIX_ORIGINALS:
      const data = action.payload?.data.results
      return { ...state, data }
    default:
      return state
  }
}
