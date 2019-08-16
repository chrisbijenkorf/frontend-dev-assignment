import React from "react";

const SearchForm = () => {
  return (
    <form action="" className="search-form" data-at="SearchForm">
      <input
        type="search"
        name="query"
        className="search-input"
        placeholder="Zoeken"
      />

      <button className="search-button" type="submit" />
    </form>
  );
};

export default SearchForm;
