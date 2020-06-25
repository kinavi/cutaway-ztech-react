import React from 'react';
// TODO Надо перенести иконку ко всем остальным, подумать над ее контекстом
import { IoIosMenu } from 'react-icons/io';

type MenyType = {
    onClick: () => void
}

const Menu = (props: MenyType): JSX.Element => {
  const {
    onClick,
  } = props;
  return (
    <div className="header__menu" {...props}>
      <IoIosMenu />
    </div>
  );
};

export default Menu;
