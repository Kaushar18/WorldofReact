import React from 'react'

function Component2({onInputChange}) {
    return (
        <div>
            <input 
                onChange={(e) =>onInputChange(e.target.value)}
                type="text" />
        </div>
    )
}

export default Component2
