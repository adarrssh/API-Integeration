import React from 'react';
import './css/navbar.css';
import Logo from '../../images/Logo.png'
import { useNavigate } from 'react-router-dom';

const LandingNavbar = () => {
  const navigate = useNavigate()
  return (
    <div className='landing-nav'>
      <nav>
        <img src={Logo} alt="" />
        <div className="button-grp">
          <button onClick={()=>navigate('/login')} className='login-btn'>Login</button>
          <button onClick={()=>navigate('/signup')}  className='signup-btn'>Signup</button>
        </div>
      </nav>
    </div>
  )
}

export default LandingNavbar;