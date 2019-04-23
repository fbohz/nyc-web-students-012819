import React from 'react';
import PaintingShow from './PaintingShow';
import DeleteConfirmation from './DeleteConfirmation';

export default class DeleteablePainting extends React.Component {
  state = {
    deleteView: false
  }

  handleToggle = () => {
    this.setState({ deleteView: !this.state.deleteView });
  };

  render() {
    return this.state.deleteView ? (
      <DeleteConfirmation
        handleCancelClick={this.handleToggle}
        painting={this.props.painting}
      />
    ) : (
      <PaintingShow
        painting={this.props.painting}
        handleDelete={this.handleToggle}
      />
    );
  }
}
