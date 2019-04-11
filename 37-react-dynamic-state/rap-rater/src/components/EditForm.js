import React, { Component } from "react";

class EditForm extends Component {
  state = {
    "top hit": this.props.rapper["top hit"]
  };

  changeHandler = e => {
    console.log("changing");
    this.setState({
      "top hit": e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.props.rapper, this.state["top hit"]);
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state["top hit"]}
          onChange={this.changeHandler}
        />
        <button>Change Hit</button>
      </form>
    );
  }
}

export default EditForm;
