import React, { useState, useEffect } from 'react';
import '../css/FoodCard.css';

function BeverageCard() {
  const [beverages, setBeverages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name", "category"]);
  const [filterParam, setFilterParam] = useState("ALL");

  useEffect(() => {
    fetchBeverages();
  }, []);

  const fetchBeverages = () => {
    setLoading(true);
    setError(null);

    fetch("http://127.0.0.1:3000/beverages")
      .then(res => res.json())
      .then(data => {
        setBeverages(data);
        setLoading(false)
    })
      .catch(error => {
        setError("error");
        setLoading(false);
      });
  };
  const filteredBeverages = beverages.filter(item => {
    const isMatchingSearch = searchParam.some(newItem =>
      item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
    );

    if (filterParam === "ALL") {
      return isMatchingSearch;
    } else {
      return item.category === parseInt(filterParam) && isMatchingSearch;
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
            placeholder="Search Beverage or category"
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
          aria-label='filter drinks category '>
          <option value="ALL">All Drinks</option>
          <option value="juice"> Juice</option>
          <option value="soft drink">Soft drink</option>
          <option value="milk shake">milk shake</option>
        </select>
        <span className='focus'></span>
      </div>
    <div>
      
        <div className='card-container'>
          {filteredBeverages.map(beverage => (
            <div className='card-back' key={beverage.id}>
              <img className='card-image' src={beverage.image} alt={beverage.name}/>
              <div className='card-details'>
                <h2 className='card-title'>
                  {beverage.restaurant?.name?.charAt(0) + (beverage.restaurant?.name?.slice(1) || '')} - {beverage.name?.charAt(0)  + (beverage.name?.slice(1) || '')}
                </h2>
                <p className='card-category'>Category: {beverage.category + (beverage.category || '')}</p>
                <p className='card-price'>Price: ${beverage.price || 0}</p>
              </div>
            </div>
          ))}
        </div>
      
    </div>
    </div>
  );
}

export default BeverageCard;
