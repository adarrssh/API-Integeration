import React from "react";
import "./css/profileVerification.css"
import { useNavigate } from "react-router-dom";


const Verification = ({signupDetails, setsignupDetails}) => {

    const navigate= useNavigate()
    const submitVerificationForm=(e)=>{
        e.preventDefault()
        navigate("/dashboard")

    }

    
    const handleChange = e => {
        const { name, value } = e.target
        signupDetails({
            ...signupDetails,//spread operator 
            [name]: value
        })
    }


  

    return(
        <div className="verifi">
        <form className="dataComponent" onSubmit={submitVerificationForm}>
            <div className="data">
                <label htmlFor="name">Name</label><br />
                <input required name="Email"  type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Full Name"
               
                />
            </div>
            <div className="data">
                <label htmlFor="contact">Contact No.</label><br />
                <input required type="tel" className="form-control" name="Phone" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="+91"
                 />
            </div>
            <div className="data">
                <label htmlFor="email">Email</label><br />
                <input required type="email" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter your email"  />
            </div>
            <div className="data">
                <label htmlFor="account">Account No.</label><br />
                <input required type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter your acc. no." />
            </div>
            <div className="data">
                <label htmlFor="adhaar">Adhaar No.</label><br />
                <input required type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter your adhaar no." />
            </div>
            <div className="data">
                <label htmlFor="ifsc">IFSC Code</label><br />
                <input required type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter IFSC code"  value={"fakeiscecode"} readOnly/>
            </div>
            <button id="submit" type="submit" className="btn btn-light my-btn" style={{color:"white"}} >Submit</button>
        </form>
        
        </div>
    )
}

export default Verification