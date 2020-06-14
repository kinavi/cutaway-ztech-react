import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from '../reducers';
import { INITIAL_STATE } from './initial';

export default createStore(Reducers, INITIAL_STATE, composeWithDevTools(
  applyMiddleware(thunk),
));
