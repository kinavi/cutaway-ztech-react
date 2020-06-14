// import { FloorType } from './component/types';
import { v4 as uuidv4 } from 'uuid';
import { IGameField } from './redux/types';
import Icons from './component/icons';

export const getRandomInt = (max: number): number => Math.floor(Math.random() * Math.floor(max));

const shuffle = (arr: Array<IGameField>) => {
  let j: number;
  let temp: IGameField;
  for (let i: number = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

export const generationGameMap = (): Array<IGameField> => {
  const originGameFields = Object.keys(Icons).map((item): IGameField => ({
    element: Icons[item], name: item, id: uuidv4(), isOpen: false,
  }));
  const copyGameFields = Object.keys(Icons).map((item): IGameField => ({
    element: Icons[item], name: item, id: uuidv4(), isOpen: false,
  }));
  return shuffle([...originGameFields, ...copyGameFields]);
};
