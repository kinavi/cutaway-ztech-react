import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { FloorType } from './types';
import { IGameField } from '../redux/types';

const Floor = (props: FloorType & IGameField): JSX.Element => {
  const {
    id, element, isOpen, name,
    secondSelected, firstSelected, updateFirstSelected, updateSecondSelected, updateGameField,
  } = props;

  const handleClick = () => {
    if (!firstSelected.isSelect && !isOpen) {
      updateFirstSelected({
        isSelect: true,
        id,
        name,
      });
      updateGameField(id, true);
      return;
    }
    if (!secondSelected.isSelect && !isOpen) {
      updateSecondSelected({
        isSelect: true,
        id,
        name,
      });
      updateGameField(id, true);
    }
  };

  return (
    <div className="floor" onClick={handleClick}>
      <CSSTransition in={isOpen} timeout={200} classNames="floor">
        {
          isOpen
            ? <div className="floor__card">{ element }</div>
            : <div className="floor__mock" />
        }
      </CSSTransition>
    </div>
  );
};

export default Floor;
