import React from 'react'

function BookDetail({book}) {
    return (
        <div>
            <img 
                className="ui image"
                src={book.volumeInfo.imageLinks.thumbnail} 
                alt={book.volumeInfo.title}
             />
             <div className="ui header">{book.volumeInfo.title}</div>
            <div>Page Count:{book.volumeInfo.pageCount}</div>
            <div>Ratings:{book.volumeInfo.ratingsCount}</div>
            <div>{book.searchInfo.textSnippet}</div>
        </div>
    )
}

export default BookDetail
