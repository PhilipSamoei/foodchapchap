import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';


function TableRestaurant() {
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
      const users = await axios.get("http://127.0.0.1:3000/restaurants");
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
        await axios.delete(`http://127.0.0.1:3000/restaurants/${id}`);
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
      await axios.put(`http://127.0.0.1:3000/restaurants/${editUserId}`, values);
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
                  <th>Address</th>
                  <th>Ambience</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.address}</td>
                    <td>{user.ambience}</td>
                    <td>
                      {editUserId === user.id ? (
                        <UserEditForm initialValues={user} onCancel={handleCancelEdit} onSubmit={handleUpdate} isLoading={isLoading} />
                      ) : (
                        <div className="btn-group">
                        <button onClick={() => handleEdit(user.id)} className='btn btn-info btn-sm edit-button'>Edit</button>
                        <button onClick={() => handleDelete(user.id)} className='btn btn-danger btn-sm delete-button'>Delete</button>
                      </div>
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
      address: initialValues.address || "",
      ambience: initialValues.ambience || "",
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
          <label>Address</label>
          <input
            name='address'
            value={myFormik.values.address}
            onChange={myFormik.handleChange}
            type="text"
            className={`form-control ${myFormik.errors.address ? "is-invalid" : ""} `}
          />
          <span style={{ color: "red" }}>{myFormik.errors.address}</span>
        </div>

        <div className='col-lg-4'>
          <label>Ambience</label>
          <input
          name='ambience'
         value={myFormik.values.ambience}
         onChange={myFormik.handleChange}
         type="number"
        className={`form-control ${myFormik.errors.ambience ? "is-invalid" : ""} `}
          />
          <span style={{ color: "red" }}>{myFormik.errors.ambience}</span>
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

export default TableRestaurant;
