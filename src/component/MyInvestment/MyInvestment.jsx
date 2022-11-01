import React, { useState, useEffect } from "react";
import './css/myInvestment.css'
import { ProgressBar } from 'react-loader-spinner'
import InvestMore from "./InvestMore";
import TotalInvestment from "./TotalInvestment";
import TotalProfit from "./TotalProfit";
import axios from "axios";


const MyInvestment = ({Investment}) => {
  const [isLoading, setIsLoading] = useState(false)

  // total amount invested 
  // const [Investment , setInvestment] = useState(0);

  // const url = "http://localhost:3500/invest/investment"

  useEffect(() => {

    // api call
    // axios.get(url
    //   , { headers: { token: localStorage.getItem("token") } })
    //   .then(response => {

    //     console.log(response);

    //     let investArray = response.data.data;
    //     let sum = 0;
    //     investArray.forEach(element => {
    //       sum += element.Principal;
    //     });


    //     setInvestment(sum)

    //     setIsLoading(false)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setIsLoading(false)

    //   });

      

  }, [])


  return (
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
        </div>) : (
          <div className="myInvestment-container">
            <div className="upperContainer">
              <p className="greeting">Hey there! You can find about your investment here.</p>
              <InvestMore />
            </div>
            <div className="total">
              <TotalInvestment Investment={Investment} />
              <TotalProfit />
            </div>
         
          </div>)
      }




    </>
  )
}

export default MyInvestment;