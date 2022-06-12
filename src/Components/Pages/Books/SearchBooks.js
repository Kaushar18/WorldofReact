import React, {useState,useEffect} from 'react'
import SearchBookForm from './SearchBookForm'
import BooksList from './BooksList'
import BookApi from '../../../api/BookApi'
import BookDetail from './BookDetail'

function SearchBooks() {
    const [input,setInput] = useState('book')
    const [books,setBooks] = useState([])
    const [selectedBook,setSelectedBook]= useState('')
    useEffect(()=>{
        const searchBooks=async()=>{
            const response= await BookApi.get('',{
                params:{
                    q:input
                }
            })
            setBooks(response.data.items)

        }
        const timeoutId=setTimeout(() => {
            searchBooks()
        }, 1000);
        return(()=>{
            clearTimeout(timeoutId)
        })

    },[input])
    

    return (
        <div className="ui container">
            <SearchBookForm onInputChange={setInput}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="nine wide column">
                        <BookDetail book={selectedBook} />
                    </div>
                    <div className="seven wide column">
                        <BooksList
                             onBookSelect={(selectedBook)=>setSelectedBook(selectedBook)}
                             books={books}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBooks
