import { FETCH_CHECKS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CHECKS:
      return action.payload.data;

    default:
      return state;
  }
}