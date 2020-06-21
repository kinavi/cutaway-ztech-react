import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ArrowDown = (): JSX.Element => <IoIosArrowDown />;
const ArrowUp = (): JSX.Element => <IoIosArrowUp />;

const IconWithContext = (Icon): JSX.Element => (
  <IconContext.Provider value={{ style: { width: '20px', height: '20px', color: 'white' } }}>
    <Icon />
  </IconContext.Provider>
);

const Icons = {
  arrowDown: IconWithContext(ArrowDown),
  arrowUp: IconWithContext(ArrowUp),
};

export default Icons;
