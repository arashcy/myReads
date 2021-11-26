import React, { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Search from "./Search";
import SearchBar from "./SearchBar";

export default function SearchContainer({ myBooks, updateMyBooks, setShowSearchPage }) {
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
  const change = async (updatedBook, e) => {
    const updatedShelf = e.target.value;
    updateSearchedBook(updatedBook, updatedShelf)
    await BooksAPI.update(updatedBook, updatedShelf);
    updateMyBooks(await BooksAPI.getAll())    
  };
  const updateSearchedBook = (updatedBook, updatedShelf)=> {
    const updatedResults = searchResults.map(searchedBook=> {
      if(searchedBook.id === updatedBook.id){
        return {...searchedBook, shelf: updatedShelf}
      }
      return searchedBook
    })
    console.log(updatedResults, updatedBook, updatedShelf);
    setSearchResults(updatedResults)
  }
  return (
    <div className="search-books">
        <SearchBar
            setShowSearchPage={setShowSearchPage}
            handleSearchInput={handleSearchInput}
        />
        <Search            
            change={change}
            searchResults={searchResults}
        />
    </div>
  );
}
