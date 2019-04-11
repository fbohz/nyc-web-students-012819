import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RapContainer from "./containers/RapContainer";
import Favorites from "./containers/Favorites";
import RapCard from "./components/RapCard";
import Home from "./components/Home";
import Error from "./components/Error";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    favorites: []
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
    console.log("APP Render");
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            path="/rappers"
            render={routerProps => (
              <RapContainer
                addFavoriteClickHandler={this.addFavoriteClickHandler}
              />
            )}
          />
          <Route path="/home" component={Home} />
          <Route path="/" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;

//

// <Favorites
//   rappers={this.state.favorites}
//   removeFavoriteClickHandler={this.removeFavoriteClickHandler}
// />
