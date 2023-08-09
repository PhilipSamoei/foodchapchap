import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../css/Login.css';

function LogIn({ setUserActive, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const loginMessage = location.state?.message; // Get the login message from location state

  function handleLogin(e) {
    e.preventDefault();

    const authorizeUser = {
      email: email,
      password: password,
    };

    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authorizeUser),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((resData) => {
            const { user, token } = resData;
            setUserActive(true);
            onLogin(user, token);
            navigate('/home');
          });
        } else {
          res.json().then((resData) => {
            console.log(`Failed: ${resData.error}`);
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // Handle error here, e.g., display error message to the user
      });
  }

  return (
    <div className="login-containers" style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {loginMessage && (
          <p style={{ fontWeight: 'bold', color: 'black' }}>{loginMessage}</p>
        )}
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Log in</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LogIn;
