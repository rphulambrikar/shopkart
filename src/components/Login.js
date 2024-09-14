import React from 'react'
import "../styles/Login.css"

const Login = () => {
  return (
    <div class="login-container">
    <div class="login-card">
        <h1>Sign-In</h1>
        <form>
            <label for="email">Email or mobile phone number</label>
            <input type="text" id="email" name="email" placeholder="Email or mobile phone number" required />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" required />

            <button type="submit">Sign-In</button>

            <div class="links">
                <a href="#">Forgot your password?</a>
                <a href="#">Create your Amazon account</a>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login