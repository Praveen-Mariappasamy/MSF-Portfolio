import React from 'react';
import './Nav.css';
import imgg from './images/msflogo.png'
function Nav(){
    return(
        <nav className="navbar">
            <img src={imgg} className="logo" />
            <h1 className="nav-item-head">M.S.Forms and Print</h1>
            <h2 className="add">Moulivakkam, Chennai-600125</h2>
            <h2 className="nav-item1">Phone: 9840122784</h2>
            <h2 className="nav-item2">Email: msf1971@gmail.com</h2>
        </nav>
    )
}
export default Nav;