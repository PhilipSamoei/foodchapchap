import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/download.gif';
import '../css/Restaurant.css';
import RatingComponent from './RatingComponent';


function RestaurantCard() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name", "address"]);
  const [filterParam, setFilterParam] = useState("ALL");
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = () => {
    setLoading(true);
    setError(null);
    fetch("http://127.0.0.1:3000/restaurants")
      .then(res => res.json())
      .then(data => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleRatingChange = async (restaurantId, newRating) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/restaurants/${restaurantId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ambience: newRating })
      });
      if (response.ok) {
        setRestaurants(prevRestaurants =>
          prevRestaurants.map(restaurant =>
            restaurant.id === restaurantId ? { ...restaurant, ambience: newRating } : restaurant
          )
        );
      } else {
        throw new Error('Failed to update rating');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to update rating');
    }
  };

  const filteredRestaurants = restaurants.filter(item => {
    const isMatchingSearch = searchParam.some(newItem =>
      item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
    );
    if (filterParam === "ALL") {
      return isMatchingSearch;
    } else {
      return item.ambience === parseInt(filterParam) && isMatchingSearch;
    }
  });

  return (
    <div>
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search Restaurant or location"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </label>
      </div>
      <div>
        <select
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
          className="custom-select"
          aria-label='filter restaurants by ambience'
        >
          <option value="ALL">All Ambiences</option>
          <option value="5">Five star</option>
          <option value="4">Four star</option>
          <option value="3">Three star</option>
        </select>
        <span className='focus'></span>
      </div>
      <div className='cart-icon-container'>
        <Link to='/cart' className='cart-icon-link'>
          <img src={cartIcon} alt='Cart' className='cart-icon' />
        </Link>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error occurred: {error}</p>
        ) : (
          <div className="card-container">
            {filteredRestaurants.map(restaurant=> (
              <div className="card-restaurant" key={restaurant.id}>
                <img className="card-image" src={restaurant.image} alt={restaurant.name} />
                <div className="card-details">
                  <h2 className="card-title">{restaurant.name}</h2>
                  <p className="card-address">Address: {restaurant.address}</p>
                  <p className="card-ambience">Ambience: {restaurant.ambience} Star</p>
                  <div className="rating-container">
                    <p className="card-rating">Rate </p>
                    <RatingComponent
                      restaurantId={restaurant.id}
                      currentRating={restaurant.ambience}
                      onRatingChange={handleRatingChange}
                    />
                  </div>
                  <Link to={`/restaurants/${restaurant.id}`}>
                    <button className='cart'>View Menu</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>

      </div>
    </div>
  );
}

export default RestaurantCard

