import React from "react";
import BookContainer from "./BookContainer";

export default function MyReads({setShowSearchPage, allBooks, setAllBooks}) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookContainer
            setAllBooksChild={setAllBooks}
            allBooks={allBooks}
            type="currentlyReading"
            title="Currently Reading"
          />
          <BookContainer
            setAllBooksChild={setAllBooks}
            allBooks={allBooks}
            type="wantToRead"
            title="Want to Read"
          />
          <BookContainer
            setAllBooksChild={setAllBooks}
            allBooks={allBooks}
            type="read"
            title="Read"
          />
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => setShowSearchPage(true)}>Add a book</button>
      </div>
    </div>
  );
}
