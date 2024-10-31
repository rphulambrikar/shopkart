import React, {useState, useEffect} from 'react'
import "../styles/Login.css"
import {useNavigate}  from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { users } from '../UserData/User';


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    // Redirect to payment if already logged in
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      dispatch({ type: 'LOGIN' });
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };


  return (
    <div class="login-container">
    <div class="login-card">
        <h1>Sign-In</h1>
        <form  onSubmit={handleLogin}>
            <label for="email">Email or mobile phone number</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />

            <label for="password">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Sign-In</button>

            <div class="links">
                <button>Forgot your password?</button>
                <button onClick={() => navigate("/signup")}>Create your Shopkart account</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login