
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import blog from './blog';
import app from './app';
import post from './post';

export default combineReducers({
  app,
  blog,
  post,
  routing: routerReducer,
  loadingBar: loadingBarReducer,
});
