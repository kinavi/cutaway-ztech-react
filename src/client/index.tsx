import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppWithState } from './container/App';

import './style/index.sass';

import Store from './redux/store';

const Client = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <AppWithState />
    </Provider>
  </BrowserRouter>

);

ReactDOM.render(<Client />, document.getElementById('root'));
