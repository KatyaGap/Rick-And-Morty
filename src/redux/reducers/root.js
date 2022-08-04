import { combineReducers } from 'redux';
import filterReducer from './filter';
import heroReducer from './hero';

const rootReducer = combineReducers({
  heroes: heroReducer,
  filtered: filterReducer,
});
export default rootReducer;
