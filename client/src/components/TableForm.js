import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateRestaurant() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik(
    {
      initialValues: {
        name: "",
        address: "",
        ambience: "",
        image: "",
      },
      validate: (values) => {
        let errors = {};

        if (!values.name) {
          errors.name = "Please enter name";
        }

        if (!values.address) {
          errors.address = "Please enter address";
        }

        if (!values.ambience) {
          errors.ambience = "Please enter ambience";
        }

        if (!values.image) {
          errors.image = "Please enter image";
        }

        return errors;
      },

      onSubmit: async (values) => {
        try {
          setLoading(true);
          await axios.post("http://127.0.0.1:3000/restaurants", values);
          navigate("/restaurants-admin");
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
            <label>Address</label>
            <input name='address' value={myFormik.values.address} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.address ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.address}</span>
          </div>

          <div className='col-lg-4'>
            <label>Ambience</label>
            <input name='ambience' value={myFormik.values.ambience} onChange={myFormik.handleChange} type={"number"}
              className={`form-control ${myFormik.errors.ambience ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.ambience}</span>
          </div>

          <div className='col-lg-4 mt-3'>
          <input disabled={isLoading} type="submit" value={isLoading ? "Submitting..." : "Create"} className=' btn btn-primary' />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateRestaurant;
