import React, { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Search from "./Search";
import SearchBar from "./SearchBar";

export default function SearchContainer({ setShowSearchPageChild }) {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchInput = async (e) => {
    const res = await BooksAPI.search(e.target.value);
    setSearchResults(res || []);
  };
  const change = async (book, e) => {
    const res = await BooksAPI.update(book, e.target.value);
  };
  return (
    <div className="search-books">
        <SearchBar
            setShowSearchPageChild={setShowSearchPageChild}
            handleSearchInputChild={handleSearchInput}
        />
        <Search            
            changeChild={change}
            searchResultsChild={searchResults}
        />
    </div>
  );
}
