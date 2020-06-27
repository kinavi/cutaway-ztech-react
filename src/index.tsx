import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
} from 'react-router-dom';
import App from './container/App';

import './SuperFormReset.css';
import 'normalize.css';
import './style/index.sass';

const Client = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<Client />, document.getElementById('root'));
