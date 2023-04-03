import { useState } from "react";
import React from "react";
import "../styles/search.css";

const Search = () => {
  const [value, setValue] = useState();
  return (
    <>
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-button" type="submit">
          GO!
        </button>
      </form>
    </>
  );
};

export default Search;
