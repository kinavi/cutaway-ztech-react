import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Page from './Page';

const App = (): JSX.Element => (
  <Switch>
    <Route path="/ru">
      <Page language="ru" />
    </Route>
    <Route>
      <Page language="sr" />
    </Route>
  </Switch>
);

export default App;
