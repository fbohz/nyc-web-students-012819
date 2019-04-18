import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore } from 'redux';


const initialState = { counter: 0, user_id: null, fun: true, cats: [] }

// use this very PURE function to change state
function reducer(state = initialState, action) {
  console.log('%c reducer is run:', 'color: blue', state, action);
  // why is my let setState highlighted?
  switch (action.type) {
    case 'increment_counter':
      // let newState = {...state}
      // newState.counter++;
      // return newStatwe

      return {...state, counter: state.counter + 1}
    case 'decrement_counter':
      // copying state... then overwriting the counter key's value
      return {...state, counter: state.counter - 1}
      // return {counter: state.counter - 1, ...state}
    case 'add_cat':
      // in this reducer, do I know what cat to add?
      return {...state, cats: [...state.cats, action.cat]}
    default: // return the unchanged state
      return state
  }
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

//. you know what action you want to take,
// any additional information is like bringing a checklist with you to Amazon
store.dispatch({ type: 'add_cat', cat: "Sugar" })
console.log('state:', store.getState())

store.dispatch({ type: 'add_cat', cat: "Cinnamon" })
console.log('state:', store.getState())

// store.dispatch({ type: 'add_cat', payload: "Cinnamon" }) // convention

// 1. convention
// 2. question

// dispatch is your setState
// single handeClick
store.dispatch({ type: 'add_cat', cat: "Cinnamon" })
console.log('state:', store.getState())
store.dispatch({ type: 'add_cat', cat: "Cinnamon" })
console.log('state:', store.getState())
store.dispatch({ type: 'add_cat', cat: "Cinnamon" })
console.log('state:', store.getState())
store.dispatch({ type: 'add_cat', cat: "Cinnamon" })
console.log('state:', store.getState())
store.dispatch({ type: 'add_cat', cat: "Cinnamon" })
console.log('state:', store.getState())
store.dispatch({ type: 'add_cat', cat: "Cinnamon" })
console.log('state:', store.getState()) // here is where state really changed

// react will batch
// OIbject.assign

this.setState(prevState => ({ cats: [...prevState.cats, "sugar"] }))

//. pure javascriopt

// you could have used this in mod 3
// used this same concept in all mods








ReactDOM.render(<App />, document.getElementById('root'));




serviceWorker.unregister();
