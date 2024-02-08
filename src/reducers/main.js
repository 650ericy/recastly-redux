import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

var rootReducer = combineReducers({
  currentVideo: currentVideo,
  videoList: videoList,
});


export default rootReducer;
