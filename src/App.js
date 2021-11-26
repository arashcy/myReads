import React, { useEffect, useState } from 'react'
import { useNavigate, Routes, BrowserRouter, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookContainer from './BookContainer'
import SearchContainer from './SearchContainer'
import MyReads from './MyReads'

function App() {
  const [myBooks, setMyBooks] = useState([]) //TODO: change myBooks to mybooks
  const getMyBooks = async () => {
    setMyBooks(await BooksAPI.getAll())
  }

  useEffect(() => {
    getMyBooks()
  }, [])
  
  const navigate = useNavigate()
  const setShowSearchPage = (value)=> {
    if(value) return navigate('/search')
    navigate('/')
  }
  console.log('app.js render');
  return (
    <div className="app">
      <Routes>
          <Route exact path="/" element={<MyReads myBooks={myBooks} setMyBooks={setMyBooks} setShowSearchPage={setShowSearchPage}/>} />
          <Route exact path="/search" element={<SearchContainer myBooks={myBooks} setShowSearchPage={setShowSearchPage} updateMyBooks={setMyBooks}/>} />
      </Routes>
  </div>
  );
}

export default App;
