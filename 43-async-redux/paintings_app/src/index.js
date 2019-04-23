import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './configureStore';

// console.log('store', store);


const store = configureStore();

// debugger;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
