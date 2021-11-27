import React, { useEffect, useState } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchContainer from './containers/SearchContainer'
import MyReads from './components/MyReads'

function App() {
  const [myBooks, setMyBooks] = useState([])
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
