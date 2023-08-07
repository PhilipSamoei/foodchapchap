import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!restaurant) {
    return <p>Restaurant not found.</p>;
  }

  const { name, address, ambience, dishes, beverages } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>Address: {address}</p>
      <p>Ambience: {ambience}</p>
      <h3>Dishes</h3>
      <div className="card-container">
        {dishes.map(dish => (
          <div className="card-dish" key={dish.id}>
            <img className="card-image" src={dish.image} alt={dish.name} />
            <div className="card-details">
              <h4 className="card-title">{dish.name}</h4>
              <p className="card-category">Category: {dish.category}</p>
              <p className="card-price">Price: {dish.price}</p>
            </div>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantDetails;
