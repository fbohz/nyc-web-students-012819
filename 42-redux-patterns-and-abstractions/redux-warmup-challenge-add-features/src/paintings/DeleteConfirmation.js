import React from 'react';
import { connect } from 'react-redux'
import actions from '../actions'

const DeleteConfirmation = ({deletePainting, handleCancelClick, painting}) => {
  // console.log('DeleteConfirmation props', props);
  return (
    <div className="item">
      <div className="ui small image">
        <img src={painting.image} alt={painting.slug} />
      </div>
      <div className="middle aligned content">
        <h3>Are you sure you want to remove {painting.title}</h3>
        <div className="ui buttons">
          <div
            onClick={handleCancelClick}
            className="ui basic green button"
          >
            No
          </div>
          <div
            onClick={() => deletePainting(painting.id)}
            className="ui red basic button"
          >
            Delete It
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, actions)(DeleteConfirmation)
