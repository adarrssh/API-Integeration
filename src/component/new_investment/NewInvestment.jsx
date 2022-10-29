import React, {useState,useEffect} from 'react'
import "./css/newInvestment.css"
import { ProgressBar } from  'react-loader-spinner'
import PlanCards from './Plan_cards'
import Payment from '../Payment/Payment'

const NewInvestment = () => {
    // eslint-disable-next-line no-unused-vars
    const [IsPlanSelected, setIsPlanSelected] = useState(false)
    const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)

   
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])


  return (
    <div>
        {loading ? (<div className="loader">
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#FFA217'
            barColor = '#CCA15F'
          />
        </div>): (
            <>
    <div className="new-investment-sec">
        <h1 className='new-investment-heading'>
            Hey USERNAME,<br />
           Multiplying your money isn't as difficult as you think.
        </h1>
        <div className='new-investment-plans'>
            <p className='landing-para landing-plan-para'>We Currently have three plans avialable  <br />
            Choose wisely as per your needs and investment capacity</p><br />
            <div className="investment-plans">
                <PlanCards/>
            </div>
        </div>
        
    </div>
            </>
        )}
        <Payment/>
    </div>
  )}
    

export default NewInvestment;