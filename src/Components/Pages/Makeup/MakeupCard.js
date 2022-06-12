import React from 'react'
import './MakeupCard.css'

function MakeupCard({product}) {
    return (
        <div className=" makeup-item four wide column">
            <div className="content">
            
                <img src={product.image_link} className="ui image"/>
                <h4>{product.name}</h4>
                <h4>{product.price}</h4>
                </div>
        </div>
    
    )
}

export default MakeupCard
