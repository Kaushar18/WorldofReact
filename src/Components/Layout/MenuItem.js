import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu'


function MenuItem({items}) {
    const [dropdown, setDropdown] = useState(false);
    useEffect(()=>{
        document.body.addEventListener('click',()=>{
            setDropdown(dropdown)
        }, {capture:true})

    },[])
    
    return (
        <li className="menu-items">
            {items.submenu ? (
                    
                        <>
                        <button type="button" className="item" 
                                aria-haspopup="menu" 
                                aria-expanded={dropdown ? "true" : "false"}
                                onClick={() => setDropdown((prev) => !prev)}
                                >
                             {items.title}{" "}
                          </button>
                        <DropDownMenu submenus={items.submenu} 
                                    dropdown={dropdown} 
                             />
                        </>
                        
                            
            ) : (
                <Link to={items.title} className="item">
                    {items.title}
                </Link>
                
            )}
        </li>
    
    );
}

export default MenuItem
