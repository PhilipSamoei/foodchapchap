import React from 'react'
import { Link } from "react-router-dom"
import '../css/NavBar.css';
// import ContactUs from '/components/ContactUs'
function NavBar(){
    return(
        <div  className='nav'>
              <Link to="/"> Home </Link><br/>
              <Link to="/Restaurant"> Restaurants </Link><br/>
              <Link to="/Category"> Category </Link><br/>
              <Link to="/ContactUs"> Contact Us</Link>
    
        </div>
    )
}

export default NavBar