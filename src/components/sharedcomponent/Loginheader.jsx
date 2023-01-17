import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    BrowserRouter,
    Route,
    useNavigate,
    useHistory,
    Redirect,
    Link
} from "react-router-dom";
import logo from '../../assets/images/logo.png';

function Loginheader(props) {

    let navigate = useNavigate();

    // useEffect(() => {
    // }, [])

    return (
        <div className='loginHeader clearfix'>
            <div>
                <a className='logo'><img src={logo} alt="" /></a>
                <ul>
                    {/* <li><Link to="/Forgetpassword">Forgetpassword</Link> </li> */}
                    <li><Link to="/Signup">Signup</Link> </li>
                    <li><Link to="/">Login</Link> </li>
                </ul>
            </div>
        </div>
    );
}

export default Loginheader;