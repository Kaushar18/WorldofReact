import React from 'react'
import BookCard from './BookCard'

function BooksList({books,onBookSelect}) {
    const renderedBooks= books.map((book)=>{
        return(
            
                <BookCard onBookSelect={onBookSelect} 
                          key= {book.id}
                          book={book} />
            
        )
    })
    return (
        <div className="ui list">
            {renderedBooks}
        </div>
    )
}

export default BooksList
