import React from "react";

class RapCard extends React.Component {
  state = {
    clicked: false
  };

  clickHandler = () => {
    console.log("clicked");
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <h2>{this.props.rapper.name}</h2>
        <img
          src={
            this.state.clicked
              ? this.props.rapper.happyImage
              : this.props.rapper.sadImage
          }
        />
        <button onClick={this.clickHandler}>Flip Rapper</button>
      </div>
    );
  }
}

export default RapCard;
