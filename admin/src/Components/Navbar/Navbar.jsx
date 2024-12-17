import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo_big.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
           <div className="left-one">
           <img src={navlogo} alt="" className="nav-logo" />
           </div>
           <div className="left-second">
            <p><b>APNA BAZAR</b></p>
            <p className='p2'>Admin Panel</p>
           </div>
        </div>
      
      <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar
