import React from "react";
import './css/money.css'
import close from "../../images/close.svg"

const AddMoney = () =>{
    const closeAddMoneyModal=()=>{
        document.getElementById("addMoney-modal-container").style.display="none"
    }

    return(
        <>
        <div className="addMoney-modal-container" id="addMoney-modal-container">
            <div className="addMoney-modal">
                <div className="top">
            <h2>Add Money</h2>
            <img src={close} alt="close" className="close-addMoney-modal" onClick={closeAddMoneyModal}/>
            </div>
            
            
            <div className="label">
            <label htmlFor="amount">Amount</label><br />
            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="please enter an amount"/>
            </div>
            <div className="label">
            <label htmlFor="account">From Account</label><br />
            <div className="accountInput">
            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled value="34567898765456756789" />
            
            </div>
            
            </div>
            <button type="button" className="btn addMoney-btn">Add Money</button>
            </div>
            
        </div>
        </>
    )
}

export default AddMoney;