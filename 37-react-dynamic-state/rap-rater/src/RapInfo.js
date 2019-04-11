import React from "react";
import RapCard from "./RapCard";
class RapInfo extends React.Component {
  state = {
    renderCard: false
  };

  render() {
    return (
      <div>
        <h5>{this.props.rapper["top hit"]}</h5>
        <button
          onClick={() => this.setState({ renderCard: !this.state.renderCard })}
        >
          View Card
        </button>
        {this.state.renderCard ? (
          <RapCard
            favorites
            removeFavoriteClickHandler={this.props.removeFavoriteClickHandler}
            rapper={this.props.rapper}
          />
        ) : null}
      </div>
    );
  }
}

export default RapInfo;
