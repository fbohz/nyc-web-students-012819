import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import { SELECT_PAINTING, DELETE_PAINTING, FETCH_PAINTINGS } from './actions/types'

const initialState = {
  paintings: [],
  activePaintingId: null
}

const reducer = (state = initialState, action) => {
  console.log('action', action);
  switch(action.type) {
    case FETCH_PAINTINGS:
      return {...state, paintings: action.payload}
    case SELECT_PAINTING:
      return {...state, activePaintingId: action.payload}
    case DELETE_PAINTING:
      return {
        ...state,
        activePaintingId: null,
        paintings: state.paintings.filter(painting => painting.id !== action.payload)
      }
    default:
      return state
  }
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
