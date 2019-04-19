import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState = {
  counter: 0,
  user_id: null,
  fun: true,
  cats: []
}

// you will until Tuesday
// if you all do it your own way... hell breaks loose
function reducer(state = initialState, action) {
  console.log('%c reducer is run:', 'color: blue', state, action);

  // That is when you start trying to abstract
  // To follow cleaner code conventions
  switch (action.type) {
    case 'increment_counter': // routes
      return {...state, counter: state.counter + 1} // controller, change your model
    case 'decrement_counter':
      return {...state, counter: state.counter - 1}
    // case 'four_times_counter_minus':
    case 'add_cat':
      return {...state, cats: [...state.cats, action.payload]}
    default:
      return state
  }
}
//
// console.group("INDEX_STUFF");
// console.log('I am about to create a store');
const store = createStore(reducer);
// console.log('I am done creating a store');
// console.log(store);
// console.log('%c Initial State:', 'color: green', store.getState());
//
//
// console.log('before dispatch');
// store.dispatch({ type: 'increment_counter' });
// console.log('after dispatch');
// console.log('%c state:', 'color: green', store.getState());
//
// store.dispatch({ type: 'decrement_counter' }); // dispatch is your new setState
// console.log('%c state:', 'color: green', store.getState());
//
// store.dispatch({ type: 'add_cat', payload: "Sugar" });
// store.dispatch({ type: 'add_cat', payload: "Cinnamon" });
// console.log('%c state:', 'color: green', store.getState());
// console.groupEnd("INDEX_STUFF")


// In index.js after you createStore but before passing to Provider

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group("DISPATCH");
    console.log('%c state before dispatch', 'color: red', store.getState());
    const returnValue = rawDispatch(action);
    console.log('%c state after dispatch', 'color: blue', store.getState());
    console.groupEnd();
    return returnValue;
  }
}
store.dispatch = addLoggingToDispatch(store);




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
