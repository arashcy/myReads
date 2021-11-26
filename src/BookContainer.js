import React, { useState } from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

export default function BookContainer({setAllBooksChild, allBooks, type, title}) {
  const change = async (book, e) => {
    BooksAPI.update(book, e.target.value);
    allBooks = allBooks.map(book1 => {
      if(book1.id === book.id) return {...book1, shelf: e.target.value}
      return book1
    })
    setAllBooksChild(allBooks)
  };
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {allBooks.map((book) => {
              if (book.shelf === type)
                return <Book book={book} changeChild={change}/>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
