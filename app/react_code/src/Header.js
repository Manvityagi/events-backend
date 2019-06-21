import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Header = () => {
    
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
            <a className="left">Logo</a>
            <ul className="right">
                 
                <li><NavLink to="/about">About Us</NavLink></li>      
                <li><NavLink to="/contact">contact</NavLink></li>
                <li><NavLink to="/signout">Sign Out</NavLink></li>
            </ul>
            </div>
        </nav>

    )
}


export default withRouter(Header)