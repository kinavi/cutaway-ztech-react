import { AnyAction } from 'redux';
import { ISelected } from '../redux/types';

export type FloorType = {
  updateFirstSelected: (gameField: ISelected) => AnyAction,
  updateSecondSelected: (gameField: ISelected) => AnyAction,
  updateGameField: (id: string, isOpen: boolean) => AnyAction,
  firstSelected: ISelected,
  secondSelected: ISelected,

}
