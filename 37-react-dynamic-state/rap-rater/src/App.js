import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RapContainer from "./RapContainer";
import Favorites from "./Favorites";
import RapCard from "./RapCard";
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
    favorites: [],
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

  editSubmitHandler = (rapperObj, song) => {
    let newArr = [...this.state.rappers];
    let rapper = newArr.find(rapper => rapper.id === rapperObj.id);
    rapper["top hit"] = song;
    this.setState({
      rappers: newArr
    });
  };

  addFavoriteClickHandler = rapperObj => {
    console.log("favoritting");
    this.setState({
      favorites: [...this.state.favorites, rapperObj]
    });
  };

  removeFavoriteClickHandler = rapperObj => {
    let newArr = [...this.state.favorites].filter(
      rapper => rapper.id !== rapperObj.id
    );
    this.setState({
      favorites: newArr
    });
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
        <RapContainer
          rappers={this.filterRappers()}
          editSubmitHandler={this.editSubmitHandler}
          addFavoriteClickHandler={this.addFavoriteClickHandler}
        />
        <Favorites
          rappers={this.state.favorites}
          removeFavoriteClickHandler={this.removeFavoriteClickHandler}
        />
      </div>
    );
  }
}

export default App;
