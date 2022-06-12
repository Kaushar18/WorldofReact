import React,{useContext} from 'react'
import { Outlet , Link } from 'react-router-dom'
import { loginContext } from '../../App';

function Layout() {
    
    return (
     <div>
           <nav className="ui secondary menu">
               <Link to="/Home" className="active item">Home</Link>
               <Link to="/SearchBar" className="item">Search-Images</Link>
               <Link to="/SearchVideo" className="item">Search-Video</Link>
               <Link to="/About" className="item">About</Link>
               <Link to="/Contact" className="item">Contact</Link>
               <div className="right menu">
                     <div className="item">
                         <div className="ui icon input">
                             <input type="text" placeholder="Search..." />
                                 <i className="search link icon"></i>
                         </div>
                     </div>
                     <a href="/" className="ui item"> Login
                     </a>
                </div>
           </nav>
           <Outlet />
        </div>
    )
}

export default Layout
