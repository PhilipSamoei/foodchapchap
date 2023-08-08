import React, { useState, useEffect } from 'react';
import { useParams ,Link } from 'react-router-dom';
import '../css/RestaurantDetails.css';
import cartIcon from '../assets/download.gif';

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3000/restaurants/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch restaurant details');
      }
      const data = await response.json();
      setRestaurant(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  };

  const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  useEffect(() => {
    saveCartToLocalStorage();
  }, [cart]);

  const addToCart = (dish) => {
    const existingItem = cart.find(item => item.id === dish.id);
    if (existingItem) {
      setCart(prevCart => prevCart.map(item => item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...dish, quantity: 1 }]);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!restaurant) {
    return <p>Restaurant not found.</p>;
  }

  const { name, address , image, ambience, dishes, beverages } = restaurant;

  return (
    <div>
      <div >
          <img className="image-container"  src={image} alt={name} />
     </div>
      <h2 className='name'>{name}</h2>
      <p className='address'>Address: {address}</p>
      <p className='address' > Ambience: {ambience}</p>
      <h3  className='address'>Dishes</h3>
      <div className="card-container">
        {dishes.map(dish => (
          <div className="card-dish" key={dish.id}>
            <img className="card-image" src={dish.image} alt={dish.name} />
            <div className="card-details">
              <h4 className="card-title">{dish.name}</h4>
              <p className="card-category">Category: {dish.category}</p>
              <p className="card-price">Price: {dish.price}</p>
            </div>
            <button className='cart' onClick={() => addToCart(dish)}>Add to cart</button>
          </div>
        ))}
      </div>
      <h3>Beverages</h3>
      <div className="card-container">
        {beverages.map(beverage => (
          <div className="card-beverage" key={beverage.id}>
            <img className="card-image" src={beverage.image} alt={beverage.name} />
            <div className="card-details">
              <h4 className="card-title">{beverage.name}</h4>
              <p className="card-category">Category: {beverage.category}</p>
              <p className="card-price">Price: {beverage.price}</p>
            </div>
            <button className='cart' onClick={() => addToCart(beverage)} >Add to cart</button>
          </div>
        ))}
      </div>
      <div className="cart-icon-container">
            <Link to="/cart" className="cart-icon-link">
              <img src={cartIcon} alt="Cart" className="cart-icon" />
            </Link>
          </div>
    </div>
  );
}

export default RestaurantDetails;
