import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore } from 'redux';

const initialState = {
  counter: 0,
  user_id: null,
  fun: true,
  cats: []
}

function reducer(state = initialState, action) {
  console.log('%c reducer is run:', 'color: blue', state, action);

  switch (action.type) {
    case 'increment_counter':
      return {...state, counter: state.counter + 1}
    case 'decrement_counter':
      return {...state, counter: state.counter - 1}
    case 'add_cat':
      return {...state, cats: [...state.cats, action.payload]}
    default:
      return state
  }
}


console.log('I am about to create a store');
const store = createStore(reducer);
console.log('I am done creating a store');
console.log(store);
console.log('%c Initial State:', 'color: green', store.getState());


console.log('before dispatch');
store.dispatch({ type: 'increment_counter' });
console.log('after dispatch');
console.log('%c state:', 'color: green', store.getState());

store.dispatch({ type: 'decrement_counter' }); // dispatch is your new setState
console.log('%c state:', 'color: green', store.getState());

store.dispatch({ type: 'add_cat', payload: "Sugar" });
store.dispatch({ type: 'add_cat', payload: "Cinnamon" });
console.log('%c state:', 'color: green', store.getState());






ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
