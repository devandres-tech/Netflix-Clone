import { FETCH_TOP_RATED } from '../actions/index';
import { IAction, DefaultReducerState } from '../../types';

export default function (state: DefaultReducerState = {}, action: IAction) {
  switch (action.type) {
    case FETCH_TOP_RATED:
      const data = action.payload?.data.results;
      return { ...state, data };
    default:
      return state;
  }
}
