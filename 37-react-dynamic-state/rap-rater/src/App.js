import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import RapContainer from "./containers/RapContainer";
import Favorites from "./containers/Favorites";
import Home from "./components/Home";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";

class App extends Component {
  state = {
    user: {},
    favorites: []
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    console.log("app did mount", token);
    fetch("http://localhost:3000/api/v1/get_user", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        authorization: `${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => this.setState({ user: data.user }));
  }

  addFavoriteClickHandler = rapperObj => {
    this.setState(
      {
        favorites: [...this.state.favorites, rapperObj]
      },
      () => this.props.history.push("/favorites")
    );
  };

  removeFavoriteClickHandler = rapperObj => {
    let newArr = [...this.state.favorites].filter(
      rapper => rapper.id !== rapperObj.id
    );
    this.setState(
      {
        favorites: newArr
      },
      () => this.props.history.push("/rappers")
    );
  };

  createUser = userInfo => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        user: { username: userInfo.username, password: userInfo.password }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ user: data.user });
        localStorage.setItem("token", data.token);
      });
  };

  logout = () => {
    console.log("logging out");
    localStorage.removeItem("token");
    this.props.history.push("/home");
  };

  render() {
    console.log("App user", this.state.user);
    return (
      <div>
        <NavBar clickHandler={this.logout} />
        <Switch>
          <Route
            path="/signup"
            render={() => <Signup submitHandler={this.createUser} />}
          />
          <Route
            path="/favorites"
            render={() => (
              <Favorites
                rappers={this.state.favorites}
                removeFavoriteClickHandler={this.removeFavoriteClickHandler}
              />
            )}
          />
          <Route
            path="/rappers"
            render={routerProps => (
              <RapContainer
                user={this.state.user}
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

export default withRouter(App);

//
