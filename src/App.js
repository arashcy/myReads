import React, { useEffect, useState } from 'react'
import { useNavigate, Routes, BrowserRouter, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookContainer from './BookContainer'
import SearchContainer from './SearchContainer'
import MyReads from './MyReads'

function App() {
  const [allBooks, setMyBooks] = useState([]) //TODO: change allbooks to mybooks
  const getMyBooks = async () => {
    setMyBooks(await BooksAPI.getAll())
  }
  console.log('app.js render');
  useEffect(() => {
    getMyBooks()
  }, [])
  const navigate = useNavigate()
  const setShowSearchPage = (value)=> {
    if(value) return navigate('/search')
    navigate('/')
  }

  return (
    <div className="app">
      <Routes>
          <Route exact path="/" element={<MyReads allBooks={allBooks} setAllBooks={setMyBooks} setShowSearchPage={setShowSearchPage}/>} />
          <Route exact path="/search" element={<SearchContainer myBooks={allBooks} setShowSearchPageChild={setShowSearchPage} updateAllBooks={setMyBooks}/>} />
      </Routes>

      
  </div>
  );
}

export default App;
