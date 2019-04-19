import React from 'react';
import { connect } from 'react-redux';

function SuperButton(props) {
  const handleClick = () => {
    props.dispatch({ type: 'decrement_counter'})
  }
  return <button onClick={handleClick}>Decremenbt!</button>
}

export default connect()(SuperButton);
