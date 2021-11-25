import React from "react";
import Book from "./Book";

export default function BookContainer({allBooks, type, title}) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {allBooks.map((book) => {
              if (book.shelf === type)
                return <Book book={book} />;
            })}
          </ol>
        </div>
      </div>
      ;
    </div>
  );
}
