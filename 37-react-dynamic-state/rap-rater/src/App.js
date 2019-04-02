import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RapCard from "./RapCard";

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {}
  // }

  // State is just an object that lives as an attribute for this instance
  // So you can change state as if it were any other object (ie this.state.rappers = something)
  state = {
    rappers: []
  };

  componentDidMount() {
    console.log("App Did Mount");
    fetch("http://localhost:4000/rapperList")
      .then(resp => resp.json())
      .then(rappers => this.setState({ rappers: rappers }));
  }

  render() {
    let rappers = this.state.rappers.map(rapperObj => (
      <RapCard key={rapperObj.name} rapper={rapperObj} />
    ));
    console.log("App Rappers", rappers);

    return (
      <div>{this.state.rappers.length > 0 ? rappers : <h1>Loading</h1>}</div>
    );
  }
}

export default App;
