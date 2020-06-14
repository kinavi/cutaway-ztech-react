import { combineReducers } from 'redux';
import appReducer from './app';
import gameReducer from './game';

export default combineReducers({
  app: appReducer,
  game: gameReducer,
});
