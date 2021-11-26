import React from "react";
import Book from "./Book";

export default function Search({changeChild, searchResultsChild}) {
    console.log('search');
    return (
        <div className="search-books-results">
        <ol className="books-grid">
            {" "}
            {" "}
            {searchResultsChild.length > 0 ? (
            searchResultsChild.map((book) => (
                <Book book={book} changeChild={changeChild}/>
            ))
            ) : (
            <li> Empty </li>
            )}
        </ol>{" "}
        </div>
    );
}
