import React from "react";
import { useNavigate } from "react-router-dom";
import './css/investMore.css'

const InvestMore = () => {
    const navigate = useNavigate()
return(
    <>
    <button type="button" className="btn  my-btn" onClick={()=>navigate("/newInvestment")}>Invest More</button>
    </>
)
}

export default InvestMore;