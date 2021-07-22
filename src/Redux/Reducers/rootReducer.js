import { combineReducers } from 'redux';
import yPosReducer from './yPosReducer.js';
import sideDrawerReducer from './sideDrawerReducer.js';
import pageReducer from './pageReducer.js';
import coinFaceReducer from './coinFaceReducer.js';

export default combineReducers({
 yPosReducer,
 sideDrawerReducer,
 pageReducer,
 coinFaceReducer
});
