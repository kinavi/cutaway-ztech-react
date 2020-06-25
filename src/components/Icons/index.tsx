import React from 'react';
import { IconContext } from 'react-icons';
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';

const IconWithContext = (Icon: JSX.Element): JSX.Element => (
  <IconContext.Provider value={{ style: { width: '20px', height: '20px', color: 'white' } }}>
    {Icon}
  </IconContext.Provider>
);

const Icons = {
  arrowDown: IconWithContext(<IoIosArrowDown />),
  arrowUp: IconWithContext(<IoIosArrowUp />),
  arrowBack: IconWithContext(<IoIosArrowBack />),
  arrowForward: IconWithContext(<IoIosArrowForward />),
};

export default Icons;
