import React from "react";

export default function SearchBar({
  setShowSearchPage,
  handleSearchInput,
}) {
  return (
    <div>
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => setShowSearchPage(false)}
        >
          {" "}
          Close{" "}
        </button>{" "}
        <div className="search-books-input-wrapper">
          <input
            onChange={handleSearchInput}
            type="text"
            placeholder="Search by title or author"
          />
        </div>{" "}
      </div>{" "}
    </div>
  );
}
