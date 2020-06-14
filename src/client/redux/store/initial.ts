import {
  IApp, IGame, IState, StatusGame,
} from '../types';

export const APP: IApp = {
  status: StatusGame.initial,

};

export const GAME: IGame = {
  firstSelected: {
    isSelect: false,
    id: '',
    name: '',
  },
  secondSelected: {
    isSelect: false,
    id: '',
    name: '',
  },
  gameFields: [],
  pointCount: 0,
};

export const INITIAL_STATE: IState = {
  app: APP,
  game: GAME,
};
