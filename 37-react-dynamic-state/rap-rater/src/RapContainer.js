import React, { Component } from "react";
import RapCard from "./RapCard";
class RapContainer extends Component {
  render() {
    let rappers = this.props.rappers.map(rapperObj => (
      <RapCard key={rapperObj.name} rapper={rapperObj} />
    ));

    return (
      <div>{this.props.rappers.length > 0 ? rappers : <h1>Loading</h1>}</div>
    );
  }
}

export default RapContainer;
