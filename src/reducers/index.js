import { combineReducers } from 'redux';
import TablesReducer from './reducer_tables';
import ChecksReducer from './reducer_checks';
import MenuReducer from './reducer_menu';
import promise from 'redux-promise';

const rootReducer = combineReducers({
  tables: TablesReducer,
  checks: ChecksReducer,
  menu: MenuReducer,
});

export default rootReducer;
