import React from 'react'
import noImage from "../../../assets/noimage.jpg"
import "./BookCard.css"

function BookCard({book,onBookSelect}) {
    if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = {
            thumbnail:noImage,
        };
    }
        
    return (
        <div 
            className="book-item item"
            onClick={()=>onBookSelect(book)}
            >
            <img 
                className="ui image"
                src={book.volumeInfo.imageLinks.thumbnail} 
                alt={book.volumeInfo.title}
             />
             <div className="content">
            <a className="ui header" href={book.volumeInfo.previewLink}>{book.volumeInfo.title}</a>
            <div>{book.volumeInfo.authors} : {book.volumeInfo.publishedDate}</div>

            </div>
        </div>
    )
}

export default BookCard
