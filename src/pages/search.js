import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as BooksApi from '../BooksAPI'
import Book from '../components/book'

const Search = ({ handleCategory, books }) => {
  const [searchResults, setSearchResults] = useState([])
  const [query, setQuery] = useState("")
  const updateQuery = (query) => {
    setQuery(query)
    getbooks();

  }
  const getbooks = async () => {
    const res = await BooksApi.search(query);
    setSearchResults(res);
  };
  useEffect(() => {
    getbooks()
  }, []);

for(let i=0;i<books.length; i++){
 books?.map((b)=> {
  if(searchResults?.length>0){
    if(b.id === searchResults[i].id){
      searchResults[i].shelf=b.shelf
  }
  }
})
}
  const showingResults = searchResults


  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'></Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(e) => updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <div className="bookshelf">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {showingResults?.length > 0 && showingResults.map((book) => (
                  <li key={book.id}>
                    <Book book={book} handleCategory={handleCategory}/>
                    <p>{book.shelf}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Search