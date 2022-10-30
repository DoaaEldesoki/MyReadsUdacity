import React from 'react'
import { Link } from 'react-router-dom';
import Book from '../components/book'

const Home = ({ books, handleCategory }) => {

  let currentlyReadingShelf = books
    .filter(book => book.shelf === 'currentlyReading')
  let WantToReadShelf = books
    .filter(book => book.shelf === 'wantToRead')
  let ReadShelf = books
    .filter(book => book.shelf === 'read')
  return (
    <div>
      <div className="list-books" >
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReadingShelf?.map((book) => {
                    return (
                      <li key={book.id}>
                        <Book book={book} handleCategory={handleCategory}  />
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {WantToReadShelf?.map((book) => {
                    return (
                      <li key={book.id}>
                        <Book book={book} handleCategory={handleCategory} />
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title"> Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {ReadShelf?.map((book) => {
                    return (
                      <li key={book.id}>
                        <Book book={book} handleCategory={handleCategory} />
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'> </Link>
        </div>
      </div>
    </div>
  )
}

export default Home