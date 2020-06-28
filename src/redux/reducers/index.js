import { combineReducers } from 'redux';
import { type } from '../action';
import { initialState } from '../store/initial';

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SWITCH_LANG:
      return { ...state, lang: action.lang };
    default:
      return initialState;
  }
};

export default combineReducers({
  app: AppReducer,
});
