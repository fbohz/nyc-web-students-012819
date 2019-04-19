import React from 'react';
import { connect } from 'react-redux';

function SuperDuperButton(props) {
  // functional setState
  const handleClick = () => {
    // dispatch is synchronous
    props.dispatch({ type: 'DECREMENT_COUNTER'})
    console.log('hello');
    props.dispatch({ type: 'decrement_counter'})
    console.log('world');
    props.dispatch({ type: 'decrement_counter'})
    console.log('boy');
    props.dispatch({ type: 'decrement_counter'})
    console.log('meets world');
  }
  return <button onClick={handleClick}>Super --!</button>
}

export default connect()(SuperDuperButton);
