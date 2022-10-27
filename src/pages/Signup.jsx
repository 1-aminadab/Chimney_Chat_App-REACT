import React, {useRef} from 'react'
// import { useAuth } from '../context/AuthContext'
import './Signup.css'


function Signup() {
    const userNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()

    // const {signup} = useAuth
  return (
    <div className='signup'>
        <div className="description">
            <h1>Chimney</h1>
            <p>Lorem ipsum dolor sit amet 
                consectetur, adipisicing elit.
                 Dolorum voluptate ipsam, 
                 repudiandae vel doloribus provident
                 reiciendis maxime non a id.</p>
        </div>
    <div className="signup_box">
        <form className="form">
            <h2>Sign up</h2>
            <div className="inputBox">
                <input type="text" required = "required" ref={userNameRef} />
                <span>Username</span>
                <hr></hr>
            </div>
            <div className="inputBox">
                <input type="email" required = "required" ref={emailRef} />
                <span>Email</span>
                <hr></hr>
            </div>
            <div className="inputBox">
                <input type="password" required = "required" ref={passwordRef}  />
                <span>Password</span>
                <hr></hr>
            </div>
            <div className="inputBox">
                <input type="password" required = "required" ref={passwordConfirmationRef}  />
                <span>Confirm Password</span>
                <hr></hr>
            </div>
            <div className="links">
                <a href="#">have an account</a>
                <a href="#">Login</a>
            </div>
            <input type="submit" value="SignUp" />
        </form>
    </div>
</div>
  )
}

export default Signup