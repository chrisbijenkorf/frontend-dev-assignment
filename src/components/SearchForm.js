import React from "react";
import IosSearch from "../../node_modules/react-ionicons/lib/IosSearch";

const SearchForm = () => {
  return (
    <form action="" className="search-form" data-at="SearchForm">
      <input
        type="search"
        name="query"
        className="search-input"
        placeholder="Zoeken"
      />

      <button className="search-button" type="submit">
        <IosSearch />
      </button>
    </form>
  );
};

export default SearchForm;
