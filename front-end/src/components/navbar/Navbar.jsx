import {useState} from 'react'
import './navbar.css'

const Navbar = () => {
  
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpened(prevState => !prevState)
  }

  console.log(isMenuOpened)

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
            <a className='navbar-btn navbar-link-a'>Sign in</a>
            <a className='navbar-btn navbar-link-a sign-up'>Sign up</a>
          </div>
          <img className='navbar-menu-icon' src="/icons/menu.png" alt="" onClick={toggleMenu}/>
          <ul className={`navbar-menu ${isMenuOpened ? 'opened' : ''}`}>
              <li className='navbar-menu-item'><a href="" className='navbar-menu-a'>Home</a></li>
              <li className='navbar-menu-item'><a href="" className='navbar-menu-a'>About</a></li>
              <li className='navbar-menu-item'><a href="" className='navbar-menu-a'>Contacts</a></li>
              <li className='navbar-menu-item'><a href="" className='navbar-menu-a'>Agents</a></li>
              <li className='navbar-menu-item'><a href="" className='navbar-menu-a'>Sign in</a></li>
              <li className='navbar-menu-item'><a href="" className='navbar-menu-a'>Sign up</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
