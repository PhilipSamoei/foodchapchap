import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/UserDataTable.css'; 


const UserDataTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:3000/users'); 
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="user-data-table">
      <h2>User Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataTable;
