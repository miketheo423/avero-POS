import { combineReducers } from 'redux';
import TablesReducer from './reducer_tables';
import ChecksReducer from './reducer_checks';
import promise from 'redux-promise';

const rootReducer = combineReducers({
  tables: TablesReducer,
  checks: ChecksReducer,
});

export default rootReducer;
