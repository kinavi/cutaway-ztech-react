import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Надо написать генератор ключа. Как на работе

import Floor from '../component/Floor';
import { generationGameMap } from '../utils';

const App = (): JSX.Element => {
  const GameMap = generationGameMap();
  const renderGameMap = () => (
    <div className="game__map">
      {GameMap.map((item, index) => <Floor key={index}>{item}</Floor>)}
    </div>
  );
  return (
    <div className="app">
      {renderGameMap()}
    </div>
  );
};

export default App;
