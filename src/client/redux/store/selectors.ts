import { IState, IGameField, ISelected } from '../types';

export const getGameFields = (state: IState): Array<IGameField> => state.game.gameFields;
export const getPointCount = (state: IState): number => state.game.pointCount;
export const getFirstSelected = (state: IState): ISelected => state.game.firstSelected;
export const getSecondSelected = (state: IState): ISelected => state.game.secondSelected;

export const isSelectedEqual = (state: IState): boolean => {
  if (!state.game.firstSelected.name || !state.game.secondSelected.name) {
    return false;
  }
  return state.game.firstSelected.name === state.game.secondSelected.name;
};

export const isSelected = (state: IState): boolean => state.game.firstSelected.isSelect && state.game.secondSelected.isSelect;

export const getCountLeft = (state: IState): number => state.game.gameFields.filter((field: IGameField) => field.isOpen === false).length;
