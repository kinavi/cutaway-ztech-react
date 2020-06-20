import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';

const Client = () => (
  <App />
);

ReactDOM.render(<Client />, document.getElementById('root'));
