import React from "react";
import './css/totalInvestment.css'
import redWoman2 from '../../images/redSuitWoman2.png'

const totalProfit = 10000;

const TotalProfit = () => {
    return(
        <>
        <div className="container">
        <img src={redWoman2} alt="" className="redWoman"/>
        <div className="amount">
            <h2>Total Profit</h2>
            <p id="moneyProfited" className="totalMoney">&#8377;{totalProfit}</p>
        </div>
        </div>
        
        </>
    )
}

export default TotalProfit