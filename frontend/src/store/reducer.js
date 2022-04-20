import { combineReducers } from 'redux';
import filesReducer from './filesReducer';

const reducer = combineReducers({
  files: filesReducer,
});

export default reducer;
