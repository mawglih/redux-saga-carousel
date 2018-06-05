import { combineReducers } from 'redux';
import currentIndexReducer from './currentIndexReducer';

export default combineReducers({
  currentIndex: currentIndexReducer
})
