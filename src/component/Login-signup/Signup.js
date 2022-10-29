import React, { useState } from 'react';
import './css/Register.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
var validator = require("email-validator")
// import userCredentials from '../../userCredentials/userCredentials';


function Signup({ signupDetails, setsignupDetails }) {
    const navigate = useNavigate()

    const handleChange = e => {
        const { name, value } = e.target

        setsignupDetails({
            ...signupDetails,//spread operator 
            [name]: value
        })
    }


    const url = 'https://growpital.herokuapp.com/auth/signup';



    const submitSignupForm = (e) => {

        e.preventDefault();
        console.log(signupDetails.Email);
        if (validator.validate(signupDetails.Email)) {
            navigate("/profileVerification")
        } else {
            alert("valid email required")
        }




        // navigate("/login")
    }
    return (
        <>
            {/* <nav>
                <NavRegister />
            </nav> */}
            <div className='signup register'>
                <p className='greet'>Hey!</p>
                <div className="signup-component register-component">
                    <h1>Signup</h1>
                    <form className='signup-form' onSubmit={(e) => { submitSignupForm(e) }}>
                        <div className="signup-input register-input">
                            <label htmlFor="Email">Email</label><br />
                            <input name='Email' type="email" required value={signupDetails.Email || ""}
                                onChange={handleChange} />
                        </div>
                        <div className="signup-input register-input">
                            <label htmlFor="Password">Password</label><br />
                            <input name='Password' type="password" required value={signupDetails.Password || ""}
                                onChange={handleChange} />
                        </div>
                        <input className='btn signupBtn' id='btn-signup' value="submit" type='submit' />
                    </form>
                </div>
                <p className='logOrSign' onClick={() => {
                    navigate("/login")
                }}>
                    Already registered? Login
                </p>

            </div>
        </>

    )
}

export default Signup
