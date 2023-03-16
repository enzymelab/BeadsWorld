import React from 'react';
import './signup.css';
import { FaRegUserCircle } from 'react-icons/fa';
const Signup = () => {
    return (
        <div className='app_signup'>
            <div className="app_signup-icon">
                <FaRegUserCircle size={36} color="var(--color-logo)" />
                <h1>Sign Up</h1>
                <p>Please fill the information to create an account.</p>
            </div>
            <div className='app_signup-user'>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
            </div>
            <div className='app_signup-info'>
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Confirm Password' />
            </div>
            <div className="app_signup-checkbox">
                <label >
                    <input type="checkbox" />
                    I accept the <span>Terms of Use</span>&nbsp;&&nbsp;<span>Privacy Policy</span>
                </label>
            </div>
            <div className="app_signup-login">
                <a href="/newpage" className='p_opensans'>
                    <button type="button">Sign &nbsp;&nbsp;Up</button>
                </a>
            </div>
            <div className='app_signup_choice'>
                <a href="/signin">
                    <p>Already have an account?</p></a>

            </div>
        </div>

    )
}

export default Signup