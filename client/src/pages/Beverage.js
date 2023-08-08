import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/FoodCard.css';
import cartIcon from '../assets/download.gif';

function BeverageCard() {
  const [beverages, setBeverages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParam] = useState(["name", "category"]);
  const [filterCategory, setFilterCategory] = useState("ALL");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchBeverages();
    loadCartFromLocalStorage(); 
  }, []);

  const fetchBeverages = () => {
    setLoading(true);
    setError(null);

    fetch("http://127.0.0.1:3000/beverages")
      .then(res => res.json())
      .then(data => {
        setBeverages(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  const filteredBeverages = beverages.filter(beverage => {
    const isMatchingSearch = searchParam.some(param =>
      beverage[param].toString().toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filterCategory === "ALL") {
      return isMatchingSearch;
    } else {
      return beverage.category === filterCategory && isMatchingSearch;
    }
  });

  const addToCart = (beverage) => {
    const cartItem = { ...beverage, quantity: 1 };
    setCart(prevCart => [...prevCart, cartItem]);
    saveCartToLocalStorage([...cart, cartItem]);
  };

  const loadCartFromLocalStorage = () => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData);
  };

  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  return (
    <div>
      
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search Beverage or category"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </label>
      </div>
      <div>
        <select
          onChange={e => setFilterCategory(e.target.value)}
          className="custom-select"
          aria-label='filter drinks category '
        >
          <option value="ALL">All Drinks</option>
          <option value="juice">Juice</option>
          <option value="soft drink">Soft drink</option>
          <option value="milk shake">Milk shake</option>
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
          <p>Loading beverages...</p>
        ) : error ? (
          <p>Error fetching beverages: {error.message}</p>
        ) : (
          <div className='card-container'>
            {filteredBeverages.map(beverage => (
              <div className='card-back' key={beverage.id}>
                <img className='card-image' src={beverage.image} alt={beverage.name}/>
                <div className='card-details'>
                  <h2 className='card-title'>
                    {beverage.restaurant?.name?.charAt(0).toUpperCase() + (beverage.restaurant?.name?.slice(1).toLowerCase() || '')} - {beverage.name?.charAt(0).toUpperCase() + (beverage.name?.slice(1).toLowerCase() || '')}
                  </h2>
                  <p className='card-category'>Category: {beverage.category?.charAt(0).toUpperCase() + (beverage.category?.slice(1).toLowerCase() || '')}</p>
                  <p className='card-price'>Price: KSH{beverage.price || 0}</p>
                </div>
                <button onClick={() => addToCart(beverage)} className='cart'>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BeverageCard;
