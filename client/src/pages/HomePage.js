import React, { useState, useEffect } from 'react';
import '../css/Homepage.css';
import FoodGuide from '../layouts/FoodGuide';

function HomePage() {
  
  
  return (
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

    <div className='fav-container'>
        
    </div>


    <FoodGuide />
    </div>
  )
}

export default HomePage;
