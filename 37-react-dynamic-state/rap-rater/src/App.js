import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RapCard from "./RapCard";
import RapContainer from "./RapContainer";
import SearchForm from "./SearchForm";
import Form from "./CreateForm";

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {}
  // }

  // State is just an object that lives as an attribute for this instance
  // So you can change state as if it were any other object (ie this.state.rappers = something)
  state = {
    rappers: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:4000/rapperList")
      .then(resp => resp.json())
      .then(rappers => this.setState({ rappers: rappers }));
  }

  submitHandler = rapper => {
    let newArray = [rapper, ...this.state.rappers];
    this.setState({ rappers: newArray }, () => console.log(this.state.rappers));
  };

  changeHandler = e => {
    this.setState({ searchTerm: e.target.value });
  };

  filterRappers = () => {
    return this.state.rappers.filter(rapperObj =>
      rapperObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <Form submitHandler={this.submitHandler} />
        <br />
        <SearchForm
          changeHandler={this.changeHandler}
          searchTerm={this.state.searchTerm}
        />
        <RapContainer rappers={this.filterRappers()} />
      </div>
    );
  }
}

export default App;
