import React from 'react';
import { Link } from "react-router-dom"
import '../css/SideNav.css';

function SideNav() {

    return (
        
        <div className="dashboard">
          <nav className="side-navbar">
            <ul>
            <li><Link to="/restaurants-admin" smooth={true}> Restaurants </Link></li>
                <li><Link to="/beverages-admin" smooth={true}> Beverages </Link></li>
                <li><Link to="/food-admin" smooth={true}> Explore </Link></li>
                <li><Link to="/users-admin" smooth={true}> Users </Link></li>
            </ul>
          </nav>
          </div>
          )
}

export default SideNav;



