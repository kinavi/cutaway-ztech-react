import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Floor from '../component/Floor';
import { generationGameMap } from '../utils';
import { IState, StatusGame } from '../redux/types';
import { AppPropsType, IStateProps } from './types';
import * as Selectors from '../redux/store/selectors';
import {
  refreshSelects,
  setGameFields,
  updateFirstSelected,
  updateSecondSelected,
  incrementCount,
  updateGameField,
  undoSelect,
  updateStatusGame,
} from '../redux/actions';

const App = (props: AppPropsType & IStateProps): JSX.Element => {
  const {
    countLeft,
    gameFields, pointCount,
    firstSelected, secondSelected,
    updateFirstSelected, updateSecondSelected, setGameFields,
    incrementCount, updateGameField, refreshSelects,
    undoSelect, updateStatusGame,
    isSelectedEqual, isSelected, isfinish,
  } = props;

  useEffect(() => {
    if (isSelected && isSelectedEqual) {
      incrementCount();
      refreshSelects();
    }

    if (isSelected && !isSelectedEqual) {
      setTimeout(() => {
        undoSelect([firstSelected.id, secondSelected.id]);
        refreshSelects();
      }, 500);
    }
  }, [secondSelected]);

  useEffect(() => {
    if (gameFields.length && countLeft === 0) {
      updateStatusGame(StatusGame.finished);
    }
  }, [countLeft]);

  const combineProps = {
    firstSelected, secondSelected, updateFirstSelected, updateSecondSelected, updateGameField,
  };

  const handleClick = () => {
    refreshSelects();
    setGameFields(generationGameMap());
    updateStatusGame(StatusGame.started);
  };

  const renderGameMap = () => (
    <div className="game__map">
      {gameFields.map((item, index) => <Floor {...combineProps} {...item} key={index} />)}
    </div>
  );

  return (
    <div className="app">
      <div className="app__controll-panel controll-panel">
        <span className="controll-panel__count-label">
          {pointCount}
          {' '}
          - point
        </span>
        <button className="controll-panel__btn" onClick={handleClick}>{ !isfinish ? 'Start' : 'Repeat'}</button>
      </div>
      <div>
        { isfinish && <div className="app__modal">win</div>}
        {renderGameMap()}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState): IStateProps => ({
  isfinish: state.app.status === StatusGame.finished,
  gameFields: Selectors.getGameFields(state),
  pointCount: Selectors.getPointCount(state),
  firstSelected: Selectors.getFirstSelected(state),
  secondSelected: Selectors.getSecondSelected(state),
  isSelectedEqual: Selectors.isSelectedEqual(state),
  isSelected: Selectors.isSelected(state),
  countLeft: Selectors.getCountLeft(state),
});

const ActionsCreator = {
  updateStatusGame,
  refreshSelects,
  setGameFields,
  updateFirstSelected,
  updateSecondSelected,
  incrementCount,
  updateGameField,
  undoSelect,
};

export const AppWithState = connect(mapStateToProps, ActionsCreator)(App);
