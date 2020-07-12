import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
} from 'react-router-dom';
import Favicon from 'react-favicon';
import App from './container/App';

import './style/SuperFormReset.css';
import 'normalize.css';
import './style/index.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../image/logo.png';

const Client = () => (
  <BrowserRouter>
    <Favicon url={logo} />
    <App />
  </BrowserRouter>
);

ReactDOM.render(<Client />, document.getElementById('root'));
