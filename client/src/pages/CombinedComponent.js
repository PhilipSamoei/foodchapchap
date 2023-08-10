import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/FoodCard.css';
import cartIcon from '../assets/download.gif';

function CombinedComponent() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All Categories");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchItems();
    loadCartFromLocalStorage();
  }, []);

  const fetchItems = () => {
    setLoading(true);
    setError(null);

    Promise.all([
      fetch("http://127.0.0.1:3000/dishes").then(res => res.json()),
      fetch("http://127.0.0.1:3000/beverages").then(res => res.json())
    ])
      .then(([dishesData, beveragesData]) => {
        setItems([...dishesData, ...beveragesData]);
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

  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(prevCart => prevCart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const filteredItems = items.filter(item => {
    const isMatchingSearch = item.name.toString().toLowerCase().includes(searchQuery.toLowerCase());

    const isMatchingCategory = filterCategory === "All Categories" || item.category === filterCategory;

    return isMatchingSearch && isMatchingCategory;
  });

  const categories = [
    "All Categories",
    "Pizza",
    "American food",
    "Fast food",
    "Swahili dishes",
    "Chinese dishes",
    "italian dishes",
    "juice",
    "Milk shake",
    "Soft drink"
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
            placeholder="Search Dish or Beverage"
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
        <div>
          {loading ? (
            <p>Loading items...</p>
          ) : error ? (
            <p>Error fetching items: {error.message}</p>
          ) : (
            <div className="card-container">
              {filteredItems.map(item => (
                <div className="card-back" key={item.id}>
                  <img className="card-image" src={item.image} alt={item.name} />
                  <div className="card-details">
                    <h2 className="card-title">
                      {item.restaurant_name?.charAt(0).toUpperCase() + (item.restaurant_name?.slice(1).toLowerCase() || '')} - {item.name?.charAt(0).toUpperCase() + (item.name?.slice(1).toLowerCase() || '')}
                    </h2>
                    <p className="card-category">Category: {item.category?.charAt(0).toUpperCase() + (item.category?.slice(1).toLowerCase() || '')}</p>
                    <p className="card-price">Price: KSH{item.price || 0}</p>
                  </div>
                  <button onClick={() => addToCart(item)} className="cart">
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="cart-icon-container">
        <Link to="/cart" className="cart-icon-link">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
        </Link>
      </div>
    </div>
  );
}

export default CombinedComponent;
