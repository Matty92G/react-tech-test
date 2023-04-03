import { useState } from "react";
import React from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = () => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          GO!
        </button>
      </form>
    </div>
  );
};

export default Search;
