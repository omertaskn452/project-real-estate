import './navbar.css'

import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <div className="navbar-logo">
              <div className="navbar-logo-img-wrapper">
                <img className='navbar-logo-img' src="/icons/logo.png" alt="" />
              </div>
              <h3 className='navbar-logo-text'>Qua-Estate</h3>
            </div>
            <ul className='navbar-link'>
              <li className='navbar-link-item'><a href="" className='navbar-link-a'>Home</a></li>
              <li className='navbar-link-item'><a href="" className='navbar-link-a'>About</a></li>
              <li className='navbar-link-item'><a href="" className='navbar-link-a'>Contacts</a></li>
              <li className='navbar-link-item'><a href="" className='navbar-link-a'>Agents</a></li>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="navbar-btns">
              <button className='navbar-btn'>Sign in</button>
              <button className='navbar-btn sign-up'>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
