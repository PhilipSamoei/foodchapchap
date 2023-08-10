import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';

function TableDishes() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [editUserId, setEditUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
    console.log("welcome");
  }, []);

  const getUsers = async () => {
    try {
      const users = await axios.get("http://127.0.0.1:3000/dishes");
      setUserList(users.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure do you want to delete the data?");
      if (confirmDelete) {
        await axios.delete(`http://127.0.0.1:3000/dishes/${id}`);
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = (id) => {
    setEditUserId(id);
  };

  const handleCancelEdit = () => {
    setEditUserId(null);
  };

  const handleUpdate = async (values) => {
    try {
      setLoading(true);
      await axios.put(`http://127.0.0.1:3000/dishes/${editUserId}`, values);
      setLoading(false);
      getUsers();
      setEditUserId(null);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  return (
    <>
      <div className="card-body">
        {isLoading ? (
          <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' alt="loading" />
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Restaurant Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.category}</td>
                    <td>{user.restaurant_name}</td>
                    <td>{user.price}</td>
                    <td>
                      {editUserId === user.id ? (
                        <UserEditForm initialValues={user} onCancel={handleCancelEdit} onSubmit={handleUpdate} isLoading={isLoading} />
                      ) : (
                        <>
                          <button onClick={() => handleEdit(user.id)} className='btn btn-info btn-sm mr-1'>Edit</button>
                          <button onClick={() => handleDelete(user.id)} className='btn btn-danger btn-sm mr-1'>Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

function UserEditForm({ initialValues, onCancel, onSubmit, isLoading }) {
    const navigate = useNavigate();
    const myFormik = useFormik({
      initialValues: {
        name: initialValues.name || "",
        category: initialValues.category || "",
        restaurant_id: initialValues.restaurant_id || "",
        price: initialValues.price || "",
      },
    validate: (values) => {
      let errors = {};
      return errors;
    },

    onSubmit: async (values) => {
      onSubmit(values);
    }
  });

  return (
    <form onSubmit={myFormik.handleSubmit}>
      <div className='row'>
        <div className="col-lg-6">
          <label>Name</label>
          <input
            name='name'
            value={myFormik.values.name}
            onChange={myFormik.handleChange}
            type="text"
            className={`form-control ${myFormik.errors.name ? "is-invalid" : ""} `}
          />
          <span style={{ color: "red" }}>{myFormik.errors.name}</span>
        </div>

        <div className="col-lg-6">
          <label>Category</label>
          <input
            name='category'
            value={myFormik.values.category}
            onChange={myFormik.handleChange}
            type="text"
            className={`form-control ${myFormik.errors.category ? "is-invalid" : ""} `}
          />
          <span style={{ color: "red" }}>{myFormik.errors.category}</span>
        </div>

        <div className='col-lg-4'>
        <label>Restaurant Name</label>
        <input
          name='restaurant_id.name'
          value={myFormik.values.restaurant_id?.name || ""} 
          onChange={myFormik.handleChange}
          type="text"
          className={`form-control ${myFormik.errors.restaurant_id?.name ? "is-invalid" : ""} `}
        />
        <span style={{ color: "red" }}>{myFormik.errors.restaurant_id?.name}</span>
      </div>

        <div className="col-lg-6">
          <label>Price</label>
          <input
            name='price'
            value={myFormik.values.price}
            onChange={myFormik.handleChange}
            type="number"
            className={`form-control ${myFormik.errors.price ? "is-invalid" : ""} `}
          />
          <span style={{ color: "red" }}>{myFormik.errors.price}</span>
        </div>


        <div className='col-lg-4 mt-3'>
          <input
            disabled={isLoading}
            type="submit"
            value={isLoading ? "Updating..." : "Update"}
            className='btn btn-primary'
          />
          <button type="button" onClick={onCancel} className="btn btn-secondary ml-2">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default TableDishes;
