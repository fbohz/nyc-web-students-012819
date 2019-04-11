import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <Link to="/home">
        <li>Home</li>
      </Link>
      <Link to="/rappers">
        <li>Rappers</li>
      </Link>
    </ul>
  );
};

export default NavBar;
