import React, { Component } from 'react';
import PaintingList from './PaintingList';
import DeleteablePainting from './DeleteablePainting';
import paintings from '../data/artworks'

class PaintingContainer extends Component {
  state = {paintings: [], activePainting: null }

  componentDidMount() {
    this.setState({ paintings, activePainting: paintings[14] })
  }

  render() {
    // console.log('THIS.PROPS in Container', this.props);
    return (
      <div className="row">
        <div className="six wide column">
          <PaintingList paintings={this.state.paintings} />
        </div>
        <div className="ten wide column">
          {this.state.activePainting ? (
            <DeleteablePainting painting={this.state.activePainting} />
          ) : (
            <h3>select a painting</h3>
          )}
        </div>
      </div>
    );
  }
}

export default PaintingContainer
