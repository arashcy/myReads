import React, { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Search from "./Search";
import SearchBar from "./SearchBar";

export default function SearchContainer({ myBooks, updateAllBooks, setShowSearchPageChild }) {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchInput = async (e) => {
    let res = await BooksAPI.search(e.target.value);
    if(res?.length>0){
      myBooks.forEach(book => {
        res.forEach(shelfBook => {
          if(shelfBook.id === book.id){
            shelfBook.shelf = book.shelf
          }
        })
      })
    }
    setSearchResults(res || []);
  };
  const change = async (book, e) => {
    await BooksAPI.update(book, e.target.value);
    const allBooks = await BooksAPI.getAll()
    console.log('search container ');
    updateAllBooks(allBooks)
  };
  console.log('search container');
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
