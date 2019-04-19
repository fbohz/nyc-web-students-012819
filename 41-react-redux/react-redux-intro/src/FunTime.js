import React from 'react';
import { connect } from 'react-redux';

function FunTime(props) {
  console.log('FunTime', props);
  return <h1>Are we having fun? {props.havingFun ? 'Yes' : 'No'}</h1>
}

//efficienct

// something in state changed
// go run your mapStateToProps
// do I need to rerender? =? smart enough to not do unnecessary rerenders
const mapStateToProps = (state) => {
  console.log('%c mapStateToProps FunTime', 'color: yellow', state);
  return {
    havingFun: state.fun
  }
}

export default connect(mapStateToProps)(FunTime);
