import React from 'react'
import ShelfChanger from './shelfChanger';


const Book = ({ book, handleCategory }) => {
    return (
            <div className="book">
                <div className="book-top">

                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                            ((book?.imageLinks && book.imageLinks.smallThumbnail) ?
                            `url(${book?.imageLinks?.smallThumbnail})` : "none")
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <ShelfChanger handleCategory={handleCategory} book={book}  />
                    </div>
                </div>
                <div className="book-title">{book?.title}</div>
                <div className="book-authors">{book?.authors}</div>
            </div>
    )
}

export default Book