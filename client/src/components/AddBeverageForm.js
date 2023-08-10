import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CreateBeverages.css';

function CreateBeverages() {
  const [isLoading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await axios.get("http://127.0.0.1:3000/restaurants");
        setRestaurants(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRestaurants();
  }, []);

  const myFormik = useFormik(
    {
      initialValues: {
        name: "",
        category: "",
        price: "",
        image: "",
        restaurant_id: "",
      },
      validate: (values) => {
        let errors = {};
        return errors;
      },
      onSubmit: async (values) => {
        try {
          setLoading(true);
          await axios.post("http://127.0.0.1:3000/beverages", values);
          navigate("/beverages-admin");
        } catch (error) {
          console.log(error);
          alert("Validation failed");
          setLoading(false);
        }
      }
    });

  return (
    <div className='container'>
      <form onSubmit={myFormik.handleSubmit}>
        <div className='col-lg-4'>
          <label>Image</label>
          <input name='image' value={myFormik.values.image} onChange={myFormik.handleChange} type={"url"}
            className={`form-control ${myFormik.errors.image ? "is-invalid" : ""} `} />
          <span style={{ color: "red" }}>{myFormik.errors.image}</span>
        </div>

        <div className='row'>
          <div className="col-lg-6">
            <label>Name</label>
            <input name='name' value={myFormik.values.name} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.name ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.name}</span>
          </div>

          <div className="col-lg-6">
            <label>Category</label>
            <input name='category' value={myFormik.values.category} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.category ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.category}</span>
          </div>

          <div className='col-lg-4'>
          <label>Restaurant</label>
          <select
            name='restaurant_id'
            value={myFormik.values.restaurant_id}
            onChange={myFormik.handleChange}
            className={`form-control ${myFormik.errors.restaurant_id ? "is-invalid" : ""} `}
          >
            <option value="">Select a restaurant</option>
            {restaurants.map(restaurant => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            ))}
          </select>
          <span style={{ color: "red" }}>{myFormik.errors.restaurant_id}</span>
        </div>

          <div className='col-lg-4'>
            <label>Price</label>
            <input name='price' value={myFormik.values.price} onChange={myFormik.handleChange} type={"number"}
              className={`form-control ${myFormik.errors.price ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.price}</span>
          </div>

          <div className='col-lg-4 mt-3'>
          <input disabled={isLoading} type="submit" value={isLoading ? "Submitting..." : "Create"} className=' btn btn-primary' />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateBeverages;
