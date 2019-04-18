import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// make this magical store!!!
import { createStore } from 'redux';

// ok?
console.log('I am about to create a store');
const store = createStore(reducer) // reducer => this is a function
console.log('I am done creating a store');

// PURE FUNCTION! very very very pure
// 100000000000% message passing
                // prevState, what you do
function reducer(state = 'penguin', action) { // don't very much like the name reducer
                        // is just an object: {type: "@@redux/INITu.c.b.w.a.b"}
  // state => the state
  // action => function => do something, affect the key/valuye of state
  //    do
  console.log('is going to be run', state, action);

  // the return value is your state
  // undefined
  return state // does my state ever change?
}
// this will also be used to change your state

console.log(store)
// getState => gets the state
// dispatch => send something somewhere => set the state => setState

console.log('state:', store.getState()) // => empty, null, undefined, {},

// very useful, but we don't need to deal with them for a long time
// subscribe
// replaceReducer
// => useless for now Symbol(observable)












import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore } from 'redux';


const initialState = { counter: 0, user_id: null, fun: true, cats: [] }

// use this very PURE function to change state
function reducer(state = initialState, action) {
  // reducer => .reduce => .reduce / .inject => give me the sum/avg all these numbers .inject(:+)
  // it makes something smaller => doesn't quite make it smaller
  // but it does change things
  console.log('%c reducer is run:', 'color: blue', state, action);


  // we made a dispatch to change state
  // prevState
  // the action of what we want to do
    // increment the counter by 1
  if (action.type === 'increment_counter') {
    // increment the counter


    let newState = {...state}
    // if I have {}, [] in state, what do you do?
    // copy!!!!
    newState.counter++;

    return newState
    // because just like react, it's going to want to compare
    // your prevState and your new state

    // see your state object === state object
    // {} you have to copy
    // [] you have to copy

    // did this break a rule?
  } else if (action.type === 'decrement_counter') {
    let newState = {...state}
    newState.counter--;
    return newState;
  } else if (action.type === 'add_cat') {
    // add a cat
  }
  //. BIIIIG if/else

  switch (action.type) {
    case 'increment_counter':
      let newState = {...state}
      newState.counter++;
      return newState
    case 'decrement_counter':
      let newState = {...state}
      newState.counter--;
      return newState;
    case 'add_cat':
      return state
    default: // return the unchanged state
      return state
  }

  // how would you pull this off?
  // send a counter as the type
  // you need to figure out how to make your own setstate
  // a much more defined and predictable one


}

console.log('I am about to create a store');
const store = createStore(reducer)
console.log('I am done creating a store');

console.log(store)
console.log('state:', store.getState())

// Actions must be plain objects. => POJO
// receive an argument that is a POJO

// store => room, building, grocery store => Amazon
// state of all your inventory
// store => Amazon
// dispatch yourself with some indended action
//  reduce their inventory

console.log('before dispatch');
// dispatch an action => send an action to the store => reducer
store.dispatch({ type: 'increment_counter' }) // dispatch is your new setState
console.log('after dispatch');
console.log('state:', store.getState())
// the type defines what type of action you are doing


store.dispatch({ type: 'decrement_counter' }) // dispatch is your new setState
console.log('state:', store.getState())

store.dispatch({ type: 'add_cat' })



















ReactDOM.render(<App />, document.getElementById('root'));




serviceWorker.unregister();





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
