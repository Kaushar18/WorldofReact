import React ,{useState}from 'react'
import { useEffect } from 'react'

function Dropdown({languages,selected,onSelectionChange}) {
    const [open,setOpen] = useState('')
    useEffect(()=>{
        document.body.addEventListener('click',()=>{
            setOpen(open)
        }, {capture:true})

    },[])
    const renderedlang=languages.map((lang)=>{
        if(lang.title===selected.title){
            return null
        }
        return(
            <div 
                key={lang.value} 
                className="item"
                onClick={()=>onSelectionChange(lang)}
            >
                    {lang.title}
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Select Language</label>
                    <div 
                        className={`ui selection dropdown ${open?'visible active':''}`}
                        onClick={()=>setOpen(!open)}
                    >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.title}</div>
                        <div className={`menu ${open?'visible transition':''}`}>
                        {renderedlang}

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
