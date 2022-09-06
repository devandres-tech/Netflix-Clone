import { FETCH_TRENDING } from '../actions/index';
import { AnyAction } from 'redux';
import { DefaultReducerState } from '../../types';
import { IAction } from '../../types/redux/action';

export default function (state: DefaultReducerState = {}, action: IAction) {
  switch (action.type) {
    case FETCH_TRENDING:
      const data = action.payload?.data.results;
      return { ...state, data };
    default:
      return state;
  }
}
