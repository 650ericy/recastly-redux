import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const startingState = {
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0]
};

const store = createStore(
  rootReducer,
  startingState,
  applyMiddleware(thunk)

);



export default store;


