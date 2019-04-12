import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <ul>
      <Link to="/home">
        <li>Home</li>
      </Link>
      <Link to="/rappers">
        <li>Rappers</li>
      </Link>
      <Link to="/favorites">
        <li>Favorites</li>
      </Link>
      <Link to="/signup">
        <li>Sign Up</li>
      </Link>
      <Link to="/home">
        <li onClick={props.clickHandler}>Log Out</li>
      </Link>
    </ul>
  );
};

export default NavBar;
