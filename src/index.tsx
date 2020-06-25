import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  useLocation,
  useParams,
  useHistory,
  Route,
  Router,
  Switch,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import App from './container/App';

const Client = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<Client />, document.getElementById('root'));
