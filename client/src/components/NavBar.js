import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.css';

function NavBar(){
    return(
        <nav  className='nav'>
                <ol><Link to="/" smooth={true}> Home </Link></ol>
                <ol><Link to="/Restaurants" smooth={true}> Restaurants </Link></ol>
                <ol><Link to="/Category" smooth={true}> Category </Link></ol>
                <ol><Link to="/ContactUs" smooth={true}> Contact Us</Link></ol>
                <ol><Link to="/dishes" smooth={true}> Menu</Link></ol>
        </nav>
    )
}

export default NavBar