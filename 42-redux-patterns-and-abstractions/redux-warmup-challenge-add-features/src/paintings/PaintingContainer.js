import React, { Component } from 'react';
import PaintingList from './PaintingList';
import DeleteablePainting from './DeleteablePainting';
import paintings from '../data/artworks'
import { connect } from 'react-redux'

class PaintingContainer extends Component {
  render() {
    return (
      <div className="row">
        <div className="six wide column">
          <PaintingList paintings={this.props.paintings} />
        </div>
        <div className="ten wide column">
          {this.props.activePainting ? (
            <DeleteablePainting painting={this.props.activePainting} />
          ) : (
            <h3>select a painting</h3>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // {currentUser: {id: 1, username: 'wahetev'}}

  return {
    paintings: state.paintings,
    activePainting: state.activePainting
  }
}

export default connect(mapStateToProps)(PaintingContainer)
