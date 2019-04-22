import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import paintings from './data/artworks'

const initialState = {mike: "Cheng", paintings, activePainting: paintings[0]}
const reducer = (state = initialState, action) => {
  console.log(action);
  return state
}
const store = createStore(reducer)

// console.log('store', store);

// import configureStore from './configureStore';

// const store = configureStore();

// debugger;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
