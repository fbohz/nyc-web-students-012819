import React from 'react';
import { connect } from 'react-redux';

// is the puropose of display to fire a dispatch?
function DoubleDisplay(props) {
  console.log('DoubleDisplay', props);
  return <h1>Twice the Counter: {props.beef} and Thrice: {props.triple}</h1>
}

// the math, the filtering, the casing, logic ends up in here
// this opens pandoras box
// how do you decide?

// helper functions, call them in mapStateToProps
// abstract away the logic but still excuted it in mapStateToProps

// props should be semantic?
// in DoubleDisplay because mapStateToProps should only map things
// OHHHHHHHHH m,ansdfl;asdfjkl;s'dajfklasdjfklasdjf
// Single REsponsibility
// It DEPENDS => a LOT LOOOOOTS
const mapStateToProps = (state) => {
  console.log('%c mapStateToProps DoubleDisplay', 'color: yellow', state);
  return {
    beef: state.counter * 2,
    triple: state.counter * 3
  }
}

export default connect(mapStateToProps)(DoubleDisplay);
