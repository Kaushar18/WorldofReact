import React,{useState} from 'react'
import Dropdown from '../Contact/Dropdown'
import TraslatResult from './TraslatResult'
import Contact from '../Contact/Contact'

function Translate() {
    
    const Languages=[
        {
            title:"Hindi",
            value:"hi"
        },
        {
            title:"Arabic",
            value:"ar"
        },
        {
            title:"Gujarati",
            value:"gu"
        },
        {
            title:"French",
            value:"fr"
        },
        {
            title:"German",
            value:"de"
        },
        {
            title:"Spanish",
            value:"es"
        }

    ]
    const [selected,setSelected] = useState(Languages[0])
    const [input,setInput] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input 
                        value={input} 
                     onChange={(e)=>setInput(e.target.value)} />
                </div>
            </div>
            
            <Dropdown 
                label="Show Languages"
                options={Languages}
                selected={selected}
                onSelectionChange={setSelected}
            />
            <hr />
            <h3 className="ui header"> Output</h3>
            <TraslatResult language={selected} text={input}/>
            
        </div>
    )
}

export default Translate
