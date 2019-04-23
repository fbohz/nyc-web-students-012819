import React from 'react';

const MuseumPicker = props => {
  return (
    <div className="row">
      <div className="ui menu">
        <div
          onClick={() => ({})}
          className={`${props.activeMuseum === 'ALL' ? 'active' : ''} item`}
        >
          All Museums
        </div>
        <div
          onClick={() => ({})}
          className={`${props.activeMuseum ===
          'National Gallery of Art, Washington D.C.'
            ? 'active'
            : ''} item`}
        >
          National Gallery of Art, Washington D.C.
        </div>
      </div>
    </div>
  );
};


export default MuseumPicker;
