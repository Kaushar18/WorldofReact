import React,{useState,useEffect,useRef} from 'react'

function Dropdown({options,selected,onSelectionChange,label}){
    const [open,setOpen] = useState('')
    const ref=useRef()
    useEffect(()=>{
        const onBodyClick=(event) =>{
            if(ref.current.contains(event.target)){
                return
            }
            setOpen(open)
        }
        document.body.addEventListener('click',onBodyClick, {capture:true})
        return()=>{
            document.body.removeEventListener('click',onBodyClick,{capture:true})

        }
    },[])

    const renderedColor= options.map((option) =>{
        if(option.title===selected.title){
            return null
        }
        return (
            <div key= {option.value}
                className="item"
                onClick={()=>onSelectionChange(option)}
            >
                {option.title}
            </div>

        )
    })
  
    return(
        <div>
            <div ref={ref} className="ui form">
                <div className="field">
                    <label className="label">{label}</label>
                    <div 
                        onClick={()=>setOpen(!open)}
                        className={`ui selection dropdown ${open?'visible active':''}`}
                        >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.title}</div>
                        <div 
                            className={`menu ${open?'visible transition':''}`}
                            >
                        {renderedColor}  
                        </div>
                    </div>


                </div>
            </div>
              
        </div>
    )
}
export default Dropdown