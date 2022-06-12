import React from 'react'

function SearchBookForm({onInputChange}) {
    const onFormSubmit= (event)=>{
        event.preventDefault();

    }
    return (
        <div onSubmit={onFormSubmit}className="ui form">
            <div className="field">
                <label>Enter Book Name</label>
                <input 
                    type="text" 
                    onChange={(e)=>onInputChange(e.target.value)}
                />
            </div>
            
        </div>
    )
}

export default SearchBookForm
