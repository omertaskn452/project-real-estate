import React from 'react'
import "./home.css"
import SearchBar from '../../components/searchBar/SearchBar'

const Home = () => {
  return (
    
      <div className="home-wrapper">
        <div className="home-left">
          <div className="home-title">
            <h1 className='home-title-header'>Find Real Estate & Get Your Dream Place</h1>
            <p className='home-title-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, deserunt, magnam provident blanditiis maiores quam consequatur exercitationem, est amet doloremque inventore quis ut temporibus?</p>
          </div>
          <SearchBar/>
          <div className="home-texts">
            <div className="home-texts-item">
              <h2>16+</h2>
              <span>Years of Experience</span>
            </div>
            <div className="home-texts-item">
              <h2>200</h2>
              <span>Award Gained</span>
            </div>
            <div className="home-texts-item">
              <h2>1200+</h2>
              <span>Property Ready</span>
            </div>
          </div>
        </div>
        <div className="home-right">
          <img className='home-bg-img' src="/bg.png" alt="" />
        </div>
      </div>
    
  )
}

export default Home