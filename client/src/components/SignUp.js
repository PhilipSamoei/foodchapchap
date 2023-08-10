import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/SignUp.css';

function SignUp (){
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
      email: email,
    };

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(res =>{
        if ( res.ok){
            res.json().then(console.log(res))
            navigate('/login');
        } else {
            res.json().then(res => console.log(res))
        }
      })
  }

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button  onclick={handleSignup} type="submit">Sign up</button>
        <p>
        Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;