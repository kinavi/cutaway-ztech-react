import { AnyAction, Dispatch } from 'redux';
import { IGameField, ISelected, StatusGame } from '../types';

export enum Actions {

    UPDATE_STATUSE_GAME = 'UPDATE_STATUSE_GAME',

    UPDATE_FIRST_SELECTED = 'UPDATE_FIRST_SELECTED',
    UPDATE_SECOND_SELECTED = 'UPDATE_SECOND_SELECTED',
    REFRESH_SELECTED = 'REFRESH_SELECTED',

    SET_GAME_FIELDS = 'SET_GAME_FIELDS',
    UPDATE_GAME_FIELD = 'UPDATE_GAME_FIELD',

    INCREMENT_COUNT = 'INCREMENT_COUNT',
    DECREMENT_COUNT = 'DECREMENT_COUNT',

    REFRESH_COUNT = 'REFRESH_COUNT'
}

export const updateStatusGame = (status: StatusGame): AnyAction => ({ type: Actions.UPDATE_STATUSE_GAME, payload: status });
export const updateFirstSelected = (gameField: ISelected): AnyAction => ({ type: Actions.UPDATE_FIRST_SELECTED, payload: gameField });
export const updateSecondSelected = (gameField: ISelected): AnyAction => ({ type: Actions.UPDATE_SECOND_SELECTED, payload: gameField });
export const setGameFields = (fields: Array<IGameField>): AnyAction => ({ type: Actions.SET_GAME_FIELDS, payload: fields });
export const updateGameField = (id: string, isOpen: boolean): AnyAction => ({ type: Actions.UPDATE_GAME_FIELD, payload: { id, isOpen } });
export const incrementCount = (): AnyAction => ({ type: Actions.INCREMENT_COUNT });
export const refreshCount = (): AnyAction => ({ type: Actions.REFRESH_COUNT });

export const refreshSelects = () => (dispatch: Dispatch): void => {
  dispatch(updateFirstSelected({ isSelect: false, name: '', id: '' }));
  dispatch(updateSecondSelected({ isSelect: false, name: '', id: '' }));
};

export const undoSelect = (idFields: Array<string>) => (dispatch: Dispatch): void => {
  idFields.map((id: string) => dispatch(updateGameField(id, false)));
};
