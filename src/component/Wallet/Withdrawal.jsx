import React from "react";
import './css/money.css';
import close from "../../images/close.svg";


const Withdrawal = () =>{
    const closeWithdrawModal =()=>{
        document.getElementById("withdrawal-modal-container").style.display="none"
    }
    return(
        <>
        <div className="withdrawal-modal-container" id="withdrawal-modal-container">
            <div className="withdrawal-modal">
                <div className="top">
            <h2>Withdraw Money</h2>
            <img src={close} alt="close" className="close-withdraw-modal" onClick={closeWithdrawModal } />
            </div>
            
            
            <div className="label">
            <label htmlFor="amount">Amount</label><br />
            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="please enter an amount" />
            </div>
            <div className="label">
            <label htmlFor="account">To Account</label><br />
            <div className="accountInput">
            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" contentEditable= 'false' disabled placeholder="your account number here" value={"12423454632145"} />
            
            </div>
            
            </div>
            <button type="button" className="btn btn-light withdrawal-money-modal-btn">Withdraw</button>
            </div>            
        </div>
        </>
    )
}

export default Withdrawal;