import React,{useContext} from 'react'
import { Outlet , Link } from 'react-router-dom'
import { loginContext } from '../../App';
import { menuItems } from './MenuItems';
import MenuItem from './MenuItem';
import "./DropDownMenu.css"

function Layout1() {
    
    return (
     <div>
           <ul className="menus">
               <>
               {menuItems.map((menu,index) =>{
                   return <MenuItem items={menu} key={index} />
               })}

               </>
               
           </ul>
           <Outlet />
        </div>
    )
}

export default Layout1
