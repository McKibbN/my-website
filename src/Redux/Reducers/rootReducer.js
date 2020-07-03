import { combineReducers } from 'redux';
import yPosReducer from './yPosReducer.js';
import sideDrawerReducer from './sideDrawerReducer.js';

export default combineReducers({
 yPosReducer,
 sideDrawerReducer
});
