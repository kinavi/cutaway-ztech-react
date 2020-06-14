import { AnyAction } from 'redux';
import { IGame, IGameField } from '../types';
import { GAME } from '../store/initial';
import { Actions } from '../actions';

const fieldsReducer = (
  state: Array<IGameField> = [],
  action: AnyAction,
): Array<IGameField> => {
  switch (action.type) {
    case Actions.UPDATE_GAME_FIELD:
      return state.map((field: IGameField) => {
        if (field.id === action.payload.id) {
          return { ...field, isOpen: action.payload.isOpen };
        }
        return field;
      });
    default:
      return state;
  }
};

const gameReducer = (
  state: IGame = GAME,
  action: AnyAction,
): IGame => {
  switch (action.type) {
    case Actions.UPDATE_FIRST_SELECTED:
      return { ...state, firstSelected: action.payload };
    case Actions.UPDATE_SECOND_SELECTED:
      return { ...state, secondSelected: action.payload };
    case Actions.INCREMENT_COUNT:
      return { ...state, pointCount: state.pointCount + 1 };
    case Actions.REFRESH_COUNT:
      return { ...state, pointCount: 0 };
    case Actions.SET_GAME_FIELDS:
      return { ...state, gameFields: action.payload };
    case Actions.UPDATE_GAME_FIELD:
      return { ...state, gameFields: fieldsReducer(state.gameFields, action) };
    default:
      return state;
  }
};

export default gameReducer;
