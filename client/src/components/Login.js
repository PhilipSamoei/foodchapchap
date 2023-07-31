import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css';

function LogIn( {setUserActive, onLogin }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault()

        const authorizeUser = {
            email: email,
            password: password,
        }

        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(authorizeUser),
          })
            .then(res => {
                if (res.ok){
                    res.json().then((res) => {
                        setUserActive(true);
                        onLogin(res);
                        console.log(res);
                    })
                    navigate('/home');
                } else {
                    res.json().then(res => console.log(`failed ${res}`))
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="login-containers" style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%'
        }}>
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log in</button>
            <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      );
}

export default LogIn;