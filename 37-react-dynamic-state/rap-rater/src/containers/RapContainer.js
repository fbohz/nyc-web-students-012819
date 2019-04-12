import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import RapCard from "../components/RapCard";
import SearchForm from "../components/SearchForm";
import CreateForm from "../components/CreateForm";

class RapContainer extends Component {
  state = {
    rappers: [],
    searchTerm: ""
  };

  componentDidMount() {
    if (this.props.user.username) {
      fetch("http://localhost:4000/rapperList")
        .then(resp => resp.json())
        .then(rappers => this.setState({ rappers: rappers }));
    } else {
      this.props.history.push("/signup");
    }
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

  createRapCards = () => {
    return this.state.rappers.map(rapperObj => (
      <RapCard
        key={rapperObj.name}
        rapper={rapperObj}
        editSubmitHandler={this.editSubmitHandler}
        addFavoriteClickHandler={this.props.addFavoriteClickHandler}
      />
    ));
  };

  editSubmitHandler = (rapperObj, song) => {
    let newArr = [...this.state.rappers];
    let rapper = newArr.find(rapper => rapper.id === rapperObj.id);
    rapper["top hit"] = song;
    this.setState({
      rappers: newArr
    });
  };

  render() {
    return (
      <div>
        <h2>Rap Container</h2>
        {this.state.rappers.length > 0 ? (
          <Switch>
            <Route
              path="/rappers/:id"
              render={routerProps => {
                let id = parseInt(routerProps.match.params.id);
                let rapper = this.state.rappers.find(
                  rapper => rapper.id === id
                );
                return <RapCard rapper={rapper} />;
              }}
            />

            <Route
              path="/rappers"
              render={() => {
                return (
                  <div>
                    <CreateForm submitHandler={this.submitHandler} />
                    <br />
                    <SearchForm
                      changeHandler={this.changeHandler}
                      searchTerm={this.state.searchTerm}
                    />
                    {this.state.rappers.length > 0 ? (
                      this.createRapCards()
                    ) : (
                      <h1>Loading</h1>
                    )}
                  </div>
                );
              }}
            />
          </Switch>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

export default withRouter(RapContainer);
