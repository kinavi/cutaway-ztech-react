import React from 'react';
import { IconContext } from 'react-icons';
import {
  BsFillHeartFill, BsFillCircleFill, BsFillSquareFill, BsFillStarFill,
} from 'react-icons/bs';


const Heart = (): JSX.Element => <BsFillHeartFill />;
const Circle = (): JSX.Element => <BsFillCircleFill />;
const Square = (): JSX.Element => <BsFillSquareFill />;
const Star = (): JSX.Element => <BsFillStarFill />;


const IconWithContext = (Icon): JSX.Element => (
  <IconContext.Provider value={{ style: { width: '100px', height: '100px', color: 'white' } }}>
    <Icon />
  </IconContext.Provider>
);

const Icons = {
  heart: IconWithContext(Heart),
  circle: IconWithContext(Circle),
  square: IconWithContext(Square),
  star: IconWithContext(Star),
};

export default Icons;
