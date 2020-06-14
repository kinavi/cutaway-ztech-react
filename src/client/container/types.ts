import { AnyAction } from 'redux';
import { IGameField, ISelected, StatusGame } from '../redux/types';

export type AppPropsType = {
    setGameFields: (fields: Array<IGameField>) => AnyAction,
    updateFirstSelected: (gameField: ISelected) => AnyAction,
    updateSecondSelected: (gameField: ISelected) => AnyAction,
    updateGameField: (id: string, isOpen: boolean) => AnyAction,
    undoSelect: (idFields: Array<string>) => AnyAction,
    incrementCount: () => AnyAction,
    refreshSelects: () => AnyAction,
    updateStatusGame: (status: StatusGame) => AnyAction,
}

export interface IStateProps {
    isfinish: boolean,
    gameFields: Array<IGameField>,
    pointCount: number,
    firstSelected: ISelected,
    secondSelected: ISelected,
    isSelectedEqual: boolean,
    isSelected: boolean,
    countLeft: number
}
