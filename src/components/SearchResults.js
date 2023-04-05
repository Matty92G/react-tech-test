import { useState } from "react";
import React from "react";
import "../styles/searchresults.css";

const SearchResults = (results) => {
  const defaultLink =
    "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
  const [image, setImage] = useState(defaultLink);

  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <>
        <p>Search Results</p>
        <img
          className="search-results"
          onSubmit={(e) => setImage(e.target.image[0])}
          src={image}
          alt="searchResults"
        />
      </>
    );
  }
};

export default SearchResults;
