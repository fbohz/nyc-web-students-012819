import React from 'react';

const PaintingListItem = ({ painting, selectPainting }) => {
  return (
    <div onClick={() => selectPainting(painting.id)} className="ui item">
      <span style={{ cursor: 'pointer' }}>{painting.title}</span>
    </div>
  );
};

export default PaintingListItem;
