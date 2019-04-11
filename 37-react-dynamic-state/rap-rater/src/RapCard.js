import React from "react";
import EditForm from "./EditForm";
import RapInfo from "./RapInfo";

class RapCard extends React.Component {
  state = {
    renderForm: false,
    renderInfo: false
  };

  clickHandler = () => {
    this.setState({
      renderForm: !this.state.renderForm
    });
  };
  render() {
    return (
      <div>
        {this.state.renderInfo ? (
          <RapInfo
            rapper={this.props.rapper}
            removeFavoriteClickHandler={this.props.removeFavoriteClickHandler}
          />
        ) : (
          <div>
            <h2>{this.props.rapper.name}</h2>
            <h4>{this.props.rapper.rating}</h4>
            <img
              src={this.props.rapper.sadImage}
              onClick={() =>
                this.props.addFavoriteClickHandler(this.props.rapper)
              }
            />
            {this.props.favorites ? null : (
              <button onClick={this.clickHandler}>Edit Rapper</button>
            )}
            {this.props.favorites ? (
              <button
                onClick={() =>
                  this.props.removeFavoriteClickHandler(this.props.rapper)
                }
              >
                Unfavorite
              </button>
            ) : (
              <button>Up Vote</button>
            )}
            {this.props.favorites ? (
              <button
                onClick={() =>
                  this.setState({ renderInfo: !this.state.renderInfo })
                }
              >
                More Info
              </button>
            ) : (
              <button>Down Vote</button>
            )}
            {this.state.renderForm ? (
              <EditForm
                rapper={this.props.rapper}
                submitHandler={this.props.editSubmitHandler}
              />
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default RapCard;
