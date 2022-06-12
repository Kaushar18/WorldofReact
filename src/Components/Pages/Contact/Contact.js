import React,{useState} from 'react'
import Dropdown from './Dropdown'

function Contact() {
    const colors=[
        {
            title:"Red",
            value:"red"
        },
        {
            title:"Green",
            value:"green"
        },
        {
            title:"Yellow",
            value:"yellow"
        },
        {
            title:"Blue",
            value:"blue"
        }
    ]
    const [selected,setSelected] = useState(colors[0])
    return (
        <div>
            <Dropdown 
                label="Show Colors"
                selected={selected}
                onSelectionChange={setSelected}
                options={colors} 

            />    
        </div>
    )
}

export default Contact
