import { FETCH_ROMANCE_MOVIES } from '../actions/index';
import { IAction, DefaultReducerState } from '../../types';

export default function (state: DefaultReducerState = {}, action: IAction) {
  switch (action.type) {
    case FETCH_ROMANCE_MOVIES:
      const data = action.payload?.data.results;
      return { ...state, data };
    default:
      return state;
  }
}
