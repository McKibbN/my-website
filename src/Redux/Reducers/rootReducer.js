import { combineReducers } from 'redux';
import yPosReducer from './yPosReducer.js';
import sideDrawerReducer from './sideDrawerReducer.js';
import pageReducer from './pageReducer.js';

export default combineReducers({
 yPosReducer,
 sideDrawerReducer,
 pageReducer
});
