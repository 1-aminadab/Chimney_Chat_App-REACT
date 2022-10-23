import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='login'>
        <div className="login_box">
            <form className="form">
                <h2>Sign in</h2>
                <div className="inputBox">
                    <input type="text" required = "reaquired" name="" id="" />
                    <span>Username</span>
                    <hr></hr>
                </div>
                <div className="inputBox">
                    <input type="password" required = "reaquired" name="" id="" />
                    <span>Password</span>
                    <hr></hr>
                </div>
                <div className="links">
                    <a href="#">Forgot Password?</a>
                    <a href="#">Signup</a>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    </div>
  )
}

export default Login