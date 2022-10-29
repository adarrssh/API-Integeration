import React, { useState } from 'react'
import './css/Register.css';
// import userCredentials from '../../userCredentials/userCredentials';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
var validator = require("email-validator");




function Login({ isLoggedIn, setIsLoggedIn }) {

    // const changeLoggedInState = (value) => {

    // }

    const url = 'https://growpital.herokuapp.com/auth/login';

    const navigate = useNavigate()

    const [IsRight, setIsRight] = useState(true)
    const [userMail, setuserMail] = useState("");
    const [password, setpassword] = useState("");

    // eslint-disable-next-line no-unused-vars
    // const [authenticated, setauthenticated] = useState((localStorage.getItem("authenticated") || false));

    const handleSubmit = (e) => {

        e.preventDefault();
        // if email and password is present
        console.log("clicked");

        if (validator.validate(userMail)) {
            axios.post(url, {
                Email: userMail,
                Password: password
            })
                .then((response) => {
                    console.log(response.data.token);
                    setIsLoggedIn(true)
                    localStorage.setItem("token", response.data.token)
                })
                .catch((err) => {
                    console.log(err);
                    setIsLoggedIn(false)

                    alert("some error occured")
                })

        } else {
            alert("Invalid email")
        }


    };
    return (
        <>
            {/* <nav>
                <NavRegister />
            </nav> */}
            <div className='login register'>
                <p className="greet">Welcome Back!</p>
                <div className="login-component register-component">
                    <h1>Login</h1>
                    <form onSubmit={(e) => { handleSubmit(e) }} >
                        <div className="login-input register-input">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" id='login-email' required value={userMail}
                                onChange={(e) => setuserMail(e.target.value)} />
                        </div>
                        <div className="login-input register-input">
                            <label htmlFor="password">Password</label><br />
                            <input type="password" value={password} id='login-password' required onChange={(e) => setpassword(e.target.value)} />
                            <span id='incorrect-creds' style={{ display: IsRight ? 'none' : 'block' }}>Email id or password is incorrect</span>
                        </div>
                        <input className='btn login-Btn' id='btn-login' value="Login" type="submit" />
                    </form>
                </div>
                <p className='logOrSign' onClick={() => {
                    navigate("/signup")
                }}>Want to register? Signup</p>
            </div>
        </>

    )

}

export default Login;