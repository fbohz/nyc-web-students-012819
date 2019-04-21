import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './App';
import configureStore from './configureStore';

const store = configureStore();

// debugger;
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
