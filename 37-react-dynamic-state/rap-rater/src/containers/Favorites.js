import React from "react";
import RapCard from "../components/RapCard";

const Favorites = props => {
  let rappers = props.rappers.map(rapper => (
    <RapCard
      key={rapper.id}
      rapper={rapper}
      favorites
      removeFavoriteClickHandler={props.removeFavoriteClickHandler}
    />
  ));
  return (
    <div>
      <h1>Favorites</h1>
      {rappers}
    </div>
  );
};

export default Favorites;
