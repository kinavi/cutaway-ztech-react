import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import App from './App';
=======
import {
  BrowserRouter,
} from 'react-router-dom';
import App from './container/App';

import './SuperFormReset.css';
import 'normalize.css';
import './style/index.sass';
>>>>>>> fb539230b08e5923944bb881e0bcf77a3b063974

const Client = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<Client />, document.getElementById('root'));
