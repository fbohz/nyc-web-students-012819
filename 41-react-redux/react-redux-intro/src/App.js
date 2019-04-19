import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import DoubleDisplay from './DoubleDisplay';
import SuperButton from './SuperButton';
import SuperDuperButton from './SuperDuperButton';
import FunTime from './FunTime';

import { connect } from 'react-redux';

// wait... useless... where is my state?
class App extends Component {
  handleClick = (event) => {
    // bind it!
    // send a message to the store to do work
    this.props.dispatch({ type: 'increment_counter' })
    // does what we expect
  }

  render() {
    // console.log(store)
    console.log('App props', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FunTime />

          <button onClick={this.handleClick}>Click Me!</button>
          <h1>Counter: {this.props.counter}</h1>

          <Display />
          <DoubleDisplay />
          <SuperButton />
          <SuperDuperButton />
        </header>
      </div>
    );
  }
}

// Instagram => oh did Tashawn poist a new photp?
//    show in the feed => subscribe / follow
// Redux
// everyone who wants to know about updates from the store
  // getState
  // subscribe (connect) => receive updates
// PubSub => Publish Subscribe

// magical connect function
// mapStateToProps <=
// , mapDispatchToProps, mergeProps, _ref2

// connect is higher order function =>
  // function that returns another function
  // take in a function
  // does both
// mod 3... :0

// Super straight forward
// thinking about the Single Source of Truth is tricky
  // state
  // Router you have params
  // you have two sources of truth
  // redux => shared state

// Pubsub
// listen for some sort of event?
// .addEventListener => DOM listen for events

// mapStateToProps
// what do you think it does?
// map your state to your props
                        // this is what is in your store
function mapStateToProps(state) {
  //t his object tells you what to map to props

  // so we havent' given state from redux just yet
  console.log('%c mapStateToProps', 'color: yellow', state);
  return {
    beef: "steak",
    cats: state.cats,
    counter: state.counter,
  }
}

// when do we use getState... never again!
// is very imperative => declarative

// 1. every component that needs to connect to redux will have to connect to redux
// 2. mapStateToProps => give us state from redux

// const HOC = connect(mapStateToProps)
// // what is a Higher Order Component?
//   // if a function that takes in a component and returns a component
// export default HOC(App);

// ok on this one line?
export default connect(mapStateToProps)(App);
