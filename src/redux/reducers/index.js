import {combineReducers} from 'redux';
import { groupReducer } from './groupReducer';

const combineReducer = combineReducers({
  groupReducer
});

const rootReducer = (state, action) => {
  return combineReducer(state, action);
};

export default rootReducer;
