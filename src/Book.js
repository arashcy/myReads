import React, { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

function Book({book}) {
  const [showSearchPage, setshowSearchPage] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const change = async (book, e) => {
    console.log(book.id, e.target.value);
    const res = await BooksAPI.update(book, e.target.value);
    console.log(res);
  };
  console.log(book);
  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  `url(${book?.imageLinks?.smallThumbnail})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    </div>
  );
}

export default Book;
