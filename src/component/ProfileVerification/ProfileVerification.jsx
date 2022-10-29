import React from "react";
import "./css/profileVerification.css"
import Verification from "./Verification";

const ProfileVerification = () => {
    return(
        <div className="bigContainer">
        
        <div className="verificationComponent">
            <p className="greeting">
                User,<br />
                Please complete your profile for a smooth investing experience.
            </p>
            <Verification />
        </div>
        </div>
    )
}

export default ProfileVerification
