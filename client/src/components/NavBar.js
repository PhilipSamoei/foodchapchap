import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.css';

function NavBar(){
    return(
        <nav  className='nav'>
              <Link to="/"> Home </Link><br/>
              <Link to="/Restaurants"> Restaurants </Link><br/>
              <Link to="/Category"> Category </Link><br/>
              <Link to="/ContactUs"> Contact Us</Link><br/>
              <Link to="/dishes"> Menu</Link>
            
        </nav>
    )
}

export default NavBar