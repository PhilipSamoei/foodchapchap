import React,{ useState, useEffect} from 'react'
import '../css/Restaurant.css';

function RestaurantCard() {
  const [restaurant,setrestaurant] = useState([]);

  useEffect (() => {
    fetchrestaurant();
  },[]);

const fetchrestaurant = () =>{
  return fetch("http://127.0.0.1:3000/restaurants")
  .then (res => res.json())
  .then((data) => setrestaurant(data));
}

  return (
    <div>
        <div className="card-container">
    {restaurant.map((restaurant) => (
      <div className="card-restaurant" key={restaurant.id}>
        <img className="card-image" src={restaurant.image} alt={restaurant.name} />
        <div className="card-details">
          <h2 className="card-title">{restaurant.name}</h2>
          <p className="card-address">Address: {restaurant.address}</p>
          <p className="card-ambience">Ambience: {restaurant.ambience}</p>
          {/* <p className="card-restaurant" key={restaurant.id} >restaurant: {restaurant.restaurant.name}</p> */}
        </div>
      </div>
    ))}
  </div>
    </div>
  )
}

export default RestaurantCard