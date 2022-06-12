import React from 'react'
import { Link } from 'react-router-dom'
import "./DropDownMenu.css"

function DropDownMenu({submenus,dropdown}) {
    {/*<Link to="/Home" className="active item">Home</Link>
               <Link to="/SearchBar" className="item">Search</Link>
               <Link to="/About" className="item">About</Link>
               <Link to="/Contact" className="item">Contact</Link>*/} 
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
             {submenus.map((submenu, index) => (
                 <li key={index} className="menu-items">
                  <Link to={submenu.title}>{submenu.title}</Link>
                 </li>
             ))}
         </ul>
            
    )
    
}

export default DropDownMenu
