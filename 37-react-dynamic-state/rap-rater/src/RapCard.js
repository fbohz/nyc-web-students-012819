import React from "react";

const RapCard = () => {
  return (
    <div>
      <h2>{this.props.rapper.name}</h2>
      <img src={this.props.rapper.sadImage} />
    </div>
  );
};

export default RapCard;
