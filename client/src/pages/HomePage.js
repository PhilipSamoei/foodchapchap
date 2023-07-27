import React, { useState, useEffect } from 'react';
import '../css/Homepage.css';
import FoodGuide from '../layouts/FoodGuide';

function HomePage() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://static.independent.co.uk/2021/12/08/14/iStock-1305400666%20%281%29.jpg?width=1200",
    "https://media.istockphoto.com/id/1371385807/photo/pork-tacos-called-al-pastor-with-pineapple-and-sauce-mexican-food.jpg?s=612x612&w=0&k=20&c=tfyPA51NBDZ_10k7__VsMZpOf6Q0ZipWGUFPOSOCzfw=",
    "https://media.istockphoto.com/id/984290382/photo/traditional-tacos-al-pastor.webp?b=1&s=170667a&w=0&k=20&c=lIbDm4S9QvjsO76truITFPdNUNYluVA-k4wlq8aJ_4U=",
    "https://media.istockphoto.com/id/1318944371/photo/pork-tacos-called-al-pastor-with-pineapple-on-dark-background-mexican-tacos.jpg?s=612x612&w=0&k=20&c=MT-qMw7oXnP3fB84dqQ7zhCm5HwCMquWtndBgLe2hsU="
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 6500);

    return () => clearInterval(intervalId);
  }, []);

  return (
  <div>
    <div className='flex'>
      <p className='slogan'>
        Order ahead!, Time-smart timing,
        Dine Fast, Delight Last!
      <span className='span'>
        <li style={{listStyle:'none'}}>Pre order your food</li>
        </span>
      </p>
      
      <div className='img-box'>
        <img src={images[index]} className='images' alt='foods in restaurants' />
      </div>
    </div>
    <FoodGuide />
    </div>
  )
}

export default HomePage;
