import React from "react";

const SearchForm = ({ searchTerm, changeHandler }) => {
  return (
    <input
      type="text"
      placeholder="Search Rappers"
      value={searchTerm}
      onChange={changeHandler}
    />
  );
};

export default SearchForm;
