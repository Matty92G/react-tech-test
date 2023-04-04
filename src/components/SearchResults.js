import { useState } from "react";
import React from "react";
import "../styles/searchresults.css";

const SearchResults = () => {
  const [value, setValue] = useState();
  return (
    <>
      <p>Search Results</p>
      <img
        className="search-results"
        src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt="searchResults"
      />
    </>
  );
};

export default SearchResults;
