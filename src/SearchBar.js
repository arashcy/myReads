import React from "react";

export default function SearchBar({
  setShowSearchPageChild,
  handleSearchInputChild,
}) {
  return (
    <div>
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => setShowSearchPageChild(false)}
        >
          {" "}
          Close{" "}
        </button>{" "}
        <div className="search-books-input-wrapper">
          <input
            onChange={handleSearchInputChild}
            type="text"
            placeholder="Search by title or author"
          />
        </div>{" "}
      </div>{" "}
    </div>
  );
}
