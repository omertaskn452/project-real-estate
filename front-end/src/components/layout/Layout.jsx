import React from 'react'
import './layout.css'
import Navbar from '../navbar/Navbar'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Layout
