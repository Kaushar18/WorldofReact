import React from 'react'

function Component1({onInputChange}) {
    
    const onFormSubmit=(event)=>{
        event.preventDefault()
    }
    
    return (
        <div>
            <form onSubmit={onFormSubmit}>
            <input onChange={(e)=>onInputChange(e.target.value)} type="text" />
            </form>
        </div>
    )
}

export default Component1
