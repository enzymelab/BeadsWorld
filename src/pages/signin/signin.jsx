import React from 'react';
import './signin.css';
import { GrUserSettings } from 'react-icons/gr';
import { GiPadlock } from 'react-icons/gi';
import { FaRegUserCircle } from 'react-icons/fa';
const Signin = () => {
    return (
        <div className='app_signin'>
            <div className="app_signin-icon">
                <FaRegUserCircle size={36} color="var(--color-logo)" />
                <h1>Login In</h1>
            </div>
            <div className='app_signin-user'>
                <GrUserSettings size={27} style={{ marginLeft: "1rem", position: "relative" }} />
                <input type="text" placeholder='User Name' />
            </div>
            <div className='app_signin-user'>
                <GiPadlock size={27} style={{ marginLeft: "1rem", position: "relative" }} />
                <input type="text" placeholder='Password' />
            </div>
            <div className="app_signin-checkbox">
                <label >
                    <input type="checkbox" />
                    Remember Me
                </label>
            </div>
            <div className="app_signin-login">
                <a href="/newpage" className='p_opensans'>
                    <button type="button">Login &nbsp;&nbsp;In</button>
                </a>
            </div>
            <div>
                <p>Forgot Username?</p>
                <p>Forgot Password?</p>
            </div>
        </div>

    )
}

export default Signin