import React, {useState,useEffect} from "react";
import './css/myInvestment.css'
import { ProgressBar } from  'react-loader-spinner'
import InvestMore from "./InvestMore";
import TotalInvestment from "./TotalInvestment";
import TotalProfit from "./TotalProfit";
import ActiveInvestments from "./ActiveInvestments"
import CompletedInvestments from "./CompletedInvestments";


const MyInvestment = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])


    return(
        <>
        {
            isLoading ? (<div className="loader">
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#FFA217'
                barColor='#CCA15F'
            />
        </div>): (     
        <div className="myInvestment-container">
            <div className="upperContainer">
            <p className="greeting">Hey there! You can find about your investment here.</p>
            <InvestMore />
            </div>
            <div className="total">
                <TotalInvestment />
                <TotalProfit />
            </div>
            <br />
            <div className="active-investment-container px-5">
              <ActiveInvestments/>
            </div>
            <br />
            <div className="completed-investment-container px-5">
              <CompletedInvestments/>
            </div>
            
        </div>)
        }
      
        
          
       
        </>
    )
}

export default MyInvestment;