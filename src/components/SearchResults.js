import React from 'react';
import '../styles/searchresults.css';

const SearchResults = ({ searchResults }) => {
  if (!searchResults.length) {
    return <p>No results</p>;
  } else {
    return (
      <>
        <p>Search Results</p>
        {searchResults.map((image) => (
          <img className="search-results" src={image} alt="searchResults" />
        ))}
      </>
    );
  }
};

export default SearchResults;
