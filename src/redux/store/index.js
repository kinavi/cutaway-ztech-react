import {createStore} from 'redux';
import reducers from '../reducers';
import {initialState} from './initial';

export const store = createStore(reducers, initialState);
