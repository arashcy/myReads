import React, { useState } from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

export default function BookContainer({setMyBooks, myBooks, type, title}) {
  const change = async (book, e) => {
    BooksAPI.update(book, e.target.value);
    myBooks = myBooks.map(book1 => {
      if(book1.id === book.id) return {...book1, shelf: e.target.value}
      return book1
    })
    setMyBooks(myBooks)
  };
  console.log('book container');
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {myBooks.map((book) => {
              if (book.shelf === type)
                return <li key={book.id}><Book book={book} change={change}/></li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
