import React from 'react'
import { useState } from 'react'

function AccordionComponent({items}) {
    const [activeIndex,setActiveIndex] = useState(null)
    const onTitleClick = (index) =>{
        setActiveIndex(index)
    }
    const renderedItems= items.map((item,index)=>{
        const active = index===activeIndex ? "active" :""
        return <React.Fragment key={item.title}>
            <div className= {`title ${active}`}
                 onClick={() => onTitleClick(index)}>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>

        </React.Fragment>
    })
    return (
        <div className="ui accordion">
           {renderedItems}
        </div>
    )
}

export default AccordionComponent
