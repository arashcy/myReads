import React from "react";
import Book from "./Book";

export default function Search({change, searchResults}) {
    console.log('search');
    return (
        <div className="search-books-results">
        <ol className="books-grid">
            {" "}
            {" "}
            {searchResults.length > 0 ? (
            searchResults.map((book) => (
                <li key={book.id}><Book book={book} change={change}/></li>
            ))
            ) : (
            <li> Empty </li>
            )}
        </ol>{" "}
        </div>
    );
}
