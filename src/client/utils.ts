import { FloorType } from './component/types';
import Icons from './component/icons';

const gameMap = 8;

const HeartIcons = [Icons.heart, Icons.heart, Icons.heart, Icons.heart];
const CircleIcons = [Icons.circle, Icons.circle, Icons.circle, Icons.circle];
const gameObjects = [HeartIcons, CircleIcons];

export const getRandomInt = (max: number): number => Math.floor(Math.random() * Math.floor(max));

export const generationGameMap = (): Array<JSX.Element> => {
  const result = [];
  while (result.length < gameMap) {
    const object = gameObjects[getRandomInt(2)].pop();

    if (object !== undefined) result.push(object);
  }
  return result;
};
