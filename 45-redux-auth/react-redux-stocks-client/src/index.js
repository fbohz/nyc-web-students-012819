import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'

import 'semantic-ui-css/semantic.min.css';

// import Provider and createStore and add Store to Provider around App
// add in react-thunk -> docs for how to add to createStore

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
