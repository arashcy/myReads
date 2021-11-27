import React from "react";
import BookContainer from "../containers/BookContainer";

export default function MyReads({setShowSearchPage, myBooks, setMyBooks}) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookContainer
            setMyBooks={setMyBooks}
            myBooks={myBooks}
            type="currentlyReading"
            title="Currently Reading"
          />
          <BookContainer
            setMyBooks={setMyBooks}
            myBooks={myBooks}
            type="wantToRead"
            title="Want to Read"
          />
          <BookContainer
            setMyBooks={setMyBooks}
            myBooks={myBooks}
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
