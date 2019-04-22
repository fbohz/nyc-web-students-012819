import React from 'react';
import { connect } from 'react-redux'

const PaintingListItem = (props) => {
  return (
    <div onClick={() => {
      props.dispatch({type: "SELECT_PAINTING"})
    }} className="ui item">
      <span style={{ cursor: 'pointer' }}>{props.painting.title}</span>
    </div>
  );
};

export default connect()(PaintingListItem)
