import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard"
import Login from "./component/Login-signup/Login"
import Signup from "./component/Login-signup/Signup"
import Landing from "./component/Landing_Page/Landing";
import FullContactUs from "./component/contactUs/fullContactUs";
import NewInvestment from "./component/new_investment/NewInvestment";
import Profile from "./component/Profile_page/Profile";
import Protected from "./component/Protected/Protected";
import Wallet from "./component/Wallet/Wallet";
import ProfileVerification from "./component/ProfileVerification/ProfileVerification";
import MyInvestment from "./component/MyInvestment/MyInvestment";
import MainNavbar from './component/Navbar/MainNavbar'
import { ProgressBar } from 'react-loader-spinner'

import { useEffect } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(false)
  const [signupDetails, setsignupDetails] = useState({
    Name: "",
    Email: "",
    Password: "",
    Phone: "",
    Balance: "1000",
    Aadhaar_Number: "",
    Account_No: "",
    IFSC_Code: "",
  })


  // useEffect(() => {
  //   console.log(isLoggedIn);
  // }, [isLoggedIn])



  return (
    <div className="App">

      <BrowserRouter>

        <MainNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} signupDetails={signupDetails} />


        <Routes>
          <Route index path="/" element={<Landing isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="signup" element={<Signup signupDetails={signupDetails} setsignupDetails={setsignupDetails} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="dashboard" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Dashboard />
            </Protected>
          } />
          <Route path="contactUs" element={
            <Protected isLoggedIn={isLoggedIn}>
              <FullContactUs />
            </Protected>} />

          <Route path="newInvestment" element={
            <Protected isLoggedIn={isLoggedIn}>
              <NewInvestment />
            </Protected>
          } />

          <Route path="profile" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile signupDetails={signupDetails}
                setsignupDetails={setsignupDetails} />
            </Protected>
          } />

          <Route path="wallet" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Wallet />
            </Protected>
          } />

          <Route path="profileVerification" element={
            <Protected isLoggedIn={isLoggedIn}>
              <ProfileVerification
                signupDetails={signupDetails}
                setsignupDetails={setsignupDetails}
                setIsLoggedIn={setIsLoggedIn} />
            </Protected>
          } />

          <Route path="myInvestments" element={
            <Protected isLoggedIn={isLoggedIn}>
              <MyInvestment />
            </Protected>
          } />

        </Routes>
      </BrowserRouter>


    </div>
  );
}
export default App;
