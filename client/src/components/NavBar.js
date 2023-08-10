import React from 'react'
import '../css/NavBar.css';
import {Link, useNavigate } from 'react-router-dom';
// import ContactUs from '/components/ContactUs'

function NavBar({ userActive, setUserActive }) {
    const navigate = useNavigate();
  
    function handleLogout() {
      fetch('http://localhost:3000/auth/logout', {
        method: 'DELETE'
      })
      .then((res) => {
        if (res.ok) {
          // No need to parse JSON for a 204 response
          setUserActive(false);
          navigate('/login');
        } else {
          res.json().then((errorData) => {
            console.log(`Failed: ${errorData.error}`);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }

    return(
        <nav  className='nav'>
            <div className='link'>
                <li><Link to="/" smooth={true}></Link></li>
                <li><Link to="/Home" smooth={true}> Home </Link></li>
                <li><Link to="/Restaurants" smooth={true}> Restaurants </Link></li>
                {/* <li><Link to="/Beverages" smooth={true}> Beverages </Link></li> */}
                <li><Link className='menu' to="/menu" smooth={true}> Menu</Link></li>
                <li><Link to="/Blog" smooth={true}>View Blogs</Link></li>
                <li><Link to="/Dashboard" smooth={true}> Dashboard </Link></li>
                <li><Link to="/restaurants-admin" smooth={true}> Admin </Link></li>
            </div>


            {!userActive?
            <div className='btn-container'>
                <button
                    className='logout-login'
                ><a href='/signup'>Sign up</a></button>

                <button
                    className='logout-login'
                ><a href='/login'>Log in</a></button>
            </div>
            :
            <button
                className='logout-login'
                onClick={handleLogout}
            >Log out</button>
            }
        </nav>
    )
}

export default NavBar
