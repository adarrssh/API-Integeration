import React,{useState,useEffect} from 'react'
import ContactUs from './ContactUs'
import { ProgressBar } from  'react-loader-spinner'


const FullContactUs = () => {
  const [isLoading, setIsLoading]= useState(false)
 

  useEffect(()=>{
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])

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
            borderColor = '#FFA217'
            barColor = '#CCA15F'
          />
        </div>): (<ContactUs/>)
      }
    
    </div>
  )
}

export default FullContactUs