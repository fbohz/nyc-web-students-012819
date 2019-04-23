import React, { Component } from 'react';
import PaintingList from './PaintingList';
import DeleteablePainting from './DeleteablePainting';
import { connect } from 'react-redux'
import { fetchPaintings } from '../actions'

class PaintingContainer extends Component {
  componentDidMount() {
    this.props.fetchPaintings()
  }

  render() {
    console.log('CONTAINER PROPS', this.props);
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
  const activePainting = state.paintings.find(painting => painting.id === state.activePaintingId)

  return {
    paintings: state.paintings,
    activePainting: activePainting || state.paintings[0]
  }
}

export default connect(mapStateToProps, { fetchPaintings })(PaintingContainer)
