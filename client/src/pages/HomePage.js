import React from 'react';
import '../css/Homepage.css';
import FoodGuide from '../layouts/FoodGuide';
// import cartIcon from '../assets/download.gif';
// import { Link } from 'react-router-dom';

function HomePage( 
  // {itemCount} 
  ) {


  return (
    <div>
    <div id='scroll-container'>
      <div id='scroll-text'>
      Welcome to foodChapChap! 🍔🍕🍜
      Explore culinary delights, all in one place. Connect with the best restaurants near you.
      </div>
    </div>
    <div className='container' id='homepage'>
    <div className='flex'>
      <p className='slogan'>
        Order ahead!, Time-smart timing,
        Dine Fast, Delight Last!
      <span className='span'>
        <li style={{listStyle:'none'}}>Pre order your food</li>
        </span>
      </p>
    </div>
    {/* <div className='cart-icon-container'>
      <Link to='/cart' className='cart-icon-link'>
        <img src={cartIcon} alt='Cart' className='cart-icon' />
        {itemCount > 0 && <span className='item-count'>{itemCount}</span>}
      </Link>
    </div> */}
    <div className='fav-container'>
        
    </div>


    <FoodGuide />
    </div>
    </div>
  )
}

export default HomePage;


