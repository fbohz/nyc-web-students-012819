import React from 'react';
import { connect } from 'react-redux';

// is the puropose of display to fire a dispatch?
function Display(props) {
  console.log('Display', props);
  return <h1>Counter: {props.beef}</h1>
}

const mapStateToProps = (state) => {
  console.log('%c mapStateToProps Display', 'color: yellow', state);
  return {
    beef: state.counter
  }
}

export default connect(mapStateToProps)(Display);
