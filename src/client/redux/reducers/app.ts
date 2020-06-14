import { AnyAction } from 'redux';
import { IApp } from '../types';
import { APP } from '../store/initial';
import { Actions } from '../actions';

const appReducer = (
  state: IApp = APP,
  action: AnyAction,
): IApp => {
  switch (action.type) {
    case Actions.UPDATE_STATUSE_GAME:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export default appReducer;
