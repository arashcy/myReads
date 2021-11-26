import React, { useEffect, useState } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookContainer from './BookContainer'
import SearchContainer from './SearchContainer'

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false)
  const [allBooks, setAllBooks] = useState([])
  const search = async () => {
    const res = await BooksAPI.getAll()
    console.log('search');
    setAllBooks(res)
  }
  // console.log('app.js render', allBooks);
  console.log('app.js render');
  useEffect(() => {
    search()
  }, [])

  return (
    <div className="app">
    {showSearchPage ? (
      <SearchContainer setShowSearchPageChild={setShowSearchPage}/>
    ) : (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookContainer setAllBooksChild={setAllBooks} allBooks={allBooks} type='currentlyReading' title='Currently Reading'/>
            <BookContainer setAllBooksChild={setAllBooks} allBooks={allBooks} type='wantToRead' title='Want to Read'/>
            <BookContainer setAllBooksChild={setAllBooks} allBooks={allBooks} type='read' title='Read'/>
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => setShowSearchPage(true)}>Add a book</button>
        </div>
      </div>
    )}
  </div>
  );
}

export default App;
