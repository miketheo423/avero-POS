import { FETCH_MENU_ITEMS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_MENU_ITEMS:
    return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}