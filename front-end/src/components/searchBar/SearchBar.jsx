import React from 'react'
import "./searchBar.css"

const SearchBar = () => {
  return (
    <div className="home-search">
      <div className="home-search-btns">
        <button className='home-search-btn buy-btn'>Buy</button>
        <button className='home-search-btn rent-btn'>Rent</button>
      </div>
      <div className="home-search-container">
        <input className='home-search-input' placeholder='Max-price' type="text" />
        <input className='home-search-input mid-input' placeholder="Min-price" type="text" />
        <input className='home-search-input' type="text" />
        <div className="home-search-icon-wrapper">
          <img className='home-search-icon' src="/icons/search.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
