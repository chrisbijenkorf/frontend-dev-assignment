import React from "react";
import IosSearch from "../../node_modules/react-ionicons/lib/IosSearch";
import "../css/searchForm.css";

const SearchForm = () => {
  return (
    <form action="" className="search-form">
      <div className="form-element">
        <input
          autoComplete="off"
          autocapitalize="off"
          autocorrect="off"
          spellcheck="off"
          type="search"
          name="query"
          className="search-input"
          placeholder="Zoeken"
        />
        <button className="search-button" type="submit">
          <IosSearch color="#777" fontSize="17px" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
