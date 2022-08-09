import React from "react";
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {

  
    return ( 
    <div className="header">
      <ul className="nav-list">
        {/* <li><Link to="/customer">Customer</Link> </li>
        <li><Link to="/agent">Agend</Link> </li>
        <li><Link to="/Admin">Admin</Link> </li>
        <li><Link to="/counter">Counter</Link> </li>
        <li><Link to="/parent">Child-Parent</Link></li>
        <li><Link to="/student">Student</Link></li> */}
         <li><Link to="/form">Form</Link></li>
        <li><Link to="/collage">Collage</Link></li>
      </ul>
    </div> );
}

export default Header;