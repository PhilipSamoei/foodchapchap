import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/download.gif';
import '../css/FoodCard.css';

function Foodcard() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParam] = useState(["name", "category"]);
  const [filterCategory, setFilterCategory] = useState("All Categories");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchDishes();
    loadCartFromLocalStorage();
  }, []);

  const fetchDishes = () => {
    setLoading(true);
    setError(null);

    fetch("http://127.0.0.1:3000/dishes")
      .then(res => res.json())
      .then(data => {
        setDishes(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
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



  const filteredDishes = dishes.filter(dish => {
    const isMatchingSearch = searchParam.some(param =>
      dish[param].toString().toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filterCategory === "All Categories") {
      return isMatchingSearch;
    } else {
      return dish.category === filterCategory && isMatchingSearch;
    }
  });

  const categories = [
    "All Categories",
    "Pizza",
    "American food",
    "Fast food",
    "Swahili dishes",
    "Chinese dishes",
    "Italian dishes"
  ];

  return (
    <div className="main-content">
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search Dish or category"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </label>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="sidebar">
          <h3>Filter by Category</h3>
          <ul>
            {categories.map(category => (
              <li key={category}>
                <button
                  className={filterCategory === category ? 'active' : ''}
                  onClick={() => setFilterCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='cart-icon-container'>
        <Link to='/cart' className='cart-icon-link'>
          <img src={cartIcon} alt='Cart' className='cart-icon' />
        </Link>
      </div>
        <div>
          {loading ? (
            <p>Loading dishes...</p>
          ) : error ? (
            <p>Error fetching dishes: {error.message}</p>
          ) : (
            <div className='card-container'>
              {filteredDishes.map(dish => (
                <div className='card-back' key={dish.id}>
                  <img className='card-image' src={dish.image} alt={dish.name} />
                  <div className='card-details'>
                    <h2 className='card-title'>
                      {dish.restaurant?.name?.charAt(0).toUpperCase() + (dish.restaurant?.name?.slice(1).toLowerCase() || '')} - {dish.name?.charAt(0).toUpperCase() + (dish.name?.slice(1).toLowerCase() || '')}
                    </h2>
                    <p className='card-category'>Category: {dish.category?.charAt(0).toUpperCase() + (dish.category?.slice(1).toLowerCase() || '')}</p>
                    <p className='card-price'>Price: KSH {dish.price}</p>
                  </div>
                  <button className='cart' onClick={() => addToCart(dish)}>Add to cart</button>
                </div>

              ))}
            </div>

          )}
        </div>
      </div>
    </div>
  );
}

export default Foodcard;
