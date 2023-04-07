import { useState } from "react";
import React from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState("");

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      {console.log(searchResults[0])}
      <Search setSearchResults={setSearchResults} />
      <SearchResults />
    </div>
  );
};

export default App;
