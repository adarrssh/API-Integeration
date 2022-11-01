import React, { useEffect, useState } from 'react'
import "./css/dashboard.css"
import girlBudget from "../../images/girlBudget.png"
import businessMan from "../../images/businessMan.png"
import cashCoin from "../../images/cashCoin.png"
import { ProgressBar } from 'react-loader-spinner'
import axios from 'axios'



const Dasboard = ({ Investment, setInvestment }) => {
  const investurl = "http://localhost:3500/invest/investment";

  const dashboardData = [
    {
      cardName: "Total Investment",
      cardValue: Investment,
      cardImg: girlBudget
    },
    {
      cardName: "Total Payout",
      cardValue: "₹7000",
      cardImg: cashCoin
    },
    {
      cardName: "Total Profit",
      cardValue: "₹2000",
      cardImg: businessMan
    }
  ]


  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getinvest(investurl)
  }, [])


  // api call function
  function getinvest(url) {

    setIsLoading(true)
    axios.get(url
      , { headers: { token: localStorage.getItem("token") } })
      .then(response => {

        console.log(response);

        let investArray = response.data.data;
        let sum = 0;
        investArray.forEach(element => {
          sum += element.Principal;
        });


        setInvestment(sum)

        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)

      });
  }


  return (

    <div>
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
        </div>) : (<div className="dashboard">
          <div className="dashboard-header">
            <h1>
              USERNAME, congratulations! <br />
              You now have access to your very own Dashboard.
            </h1>
            <div>
              <button className='dasboard-newInvest'>New Investment</button>
            </div>
          </div>
          <div className="dashboard-main-sec">
            <div className="dashboard-cards">
              {dashboardData.map((cardData, index) => {
                return (
                  <div className="dashboard-card" key={index}>
                    <div className="dashboard-card-inner">
                      <img src={cardData.cardImg} alt="" />
                      <h1>{cardData.cardName}</h1>
                      <p>{cardData.cardValue}</p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>)
      }



    </div>
  );
}
export default Dasboard