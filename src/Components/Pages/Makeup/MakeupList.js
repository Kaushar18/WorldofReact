import React from 'react'
import MakeupCard from './MakeupCard'

function MakeupList({filteredProducts}) {
    const filterdata = filteredProducts.map((product)=>{
        return <MakeupCard  key={product.id} product={product} />
    })
    return (
        <div>
            <div className="ui grid">
                {filterdata}
            </div>
        </div>
    )
}

export default MakeupList
