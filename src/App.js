import React, { useEffect, useState } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import BookContainer from './BookContainer'


// state = {
  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */
  // showSearchPage: false
// }

function App() {
  const [showSearchPage, setshowSearchPage] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [allBooks, setAllBooks] = useState([])
  const handleSearchInput = async (e)=> {
    console.log(searchResults);
    console.log(e.target.value);
    const res = await BooksAPI.search(e.target.value)
    console.log(res);
    setSearchResults(res || [])
    console.log(searchResults);
  }
  const search = async () => {
    const res = await BooksAPI.getAll()
    // console.log(res);
    setAllBooks(res)

  }
  useEffect(() => {
    search()
  }, [])
  const change = async (book, e)=> {
    console.log(book.id, e.target.value);
    const res = await BooksAPI.update(book, e.target.value)
    console.log(res);
  }
  return (
    <div className="app">
    {showSearchPage ? (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => setshowSearchPage(false)}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input onChange={handleSearchInput} type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          { //TODO: remove this
              console.log(searchResults)
            }
            {
              searchResults.length> 0? (
                searchResults.map(book => (
                  <li class="search-item" key={book.id}>
                    <div className="book">
                      <div className="book-top">
                      {book.imageLinks? (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>): ([])}
                      
                        {/* {book.imageLinks? (<img class="thumbnail" src={book.imageLinks.smallThumbnail}></img>): ([])} */}
                        <div className="book-shelf-changer">
                          <select onChange={(e)=> change(book, e)}>
                            <option value="move" disabled>Move to...</option>
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
                    <h4>{book.title}</h4>
                  </li>
                  )
                )
              ) : (<li>Empty</li>)
            }
           
          </ol>
        </div>
      </div>
    ) : (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookContainer allBooks={allBooks} type='currentlyReading' title='Currently Reading'/>
            <BookContainer allBooks={allBooks} type='wantToRead' title='Want to Read'/>
            <BookContainer allBooks={allBooks} type='read' title='Read'/>
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => setshowSearchPage(true)}>Add a book</button>
        </div>
      </div>
    )}
  </div>
  );
}

export default App;
