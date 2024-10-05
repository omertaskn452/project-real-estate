import './navbar.css'

import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <a href="#" className="navbar-logo">
              <img className='navbar-logo-img' src="/icons/logo.png" alt="" />
              <h3 className='navbar-logo-text'>Qua-Estate</h3>
            </a>
            <ul className='navbar-link'>
              <li className='navbar-link-item'><a href="" className='navbar-link-a'>Home</a></li>
              <li className='navbar-link-item'><a href="" className='navbar-link-a'>About</a></li>
              <li className='navbar-link-item'><a href="" className='navbar-link-a'>Contacts</a></li>
              <li className='navbar-link-item'><a href="" className='navbar-link-a'>Agents</a></li>
            </ul>
          </div>
          <div className="navbar-right">
            <a className='navbar-btn'>Sign in</a>
            <a className='navbar-btn sign-up'>Sign up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
