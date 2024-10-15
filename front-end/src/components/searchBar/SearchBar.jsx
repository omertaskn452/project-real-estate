import {useState} from 'react'
import "./searchBar.css"

const SearchBar = () => {
  
  const [isBuyActive, setIsBuyActive] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  
  const setActiveTrue = () => {
    if(!isBuyActive){
      setIsBuyActive(true)
    }
  }
  const setActiveFalse = () => {
    if(isBuyActive){
      setIsBuyActive(false)
    }
  }
 
  return (
    <div className="home-search">
      <div className="home-search-btns">
        <button 
          className={`home-search-btn buy-btn ${isBuyActive ? "active" : ""}`} 
          onClick={setActiveTrue}>
            Buy
        </button>
        <button 
          className={`home-search-btn rent-btn ${isBuyActive ? "" : "active"}`}
          onClick={setActiveFalse}>
            Rent
          </button>
      </div>
      <div className="home-search-container">
        <input 
          className={`home-search-input ${isFocused ? "right-hidden" : ""}`} placeholder='Location' type="text" />
        <input 
          className='home-search-input mid-input' 
          placeholder="Min price" type="number" min={0} max={10000000} 
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)}/>
        <input 
          className={`home-search-input ${isFocused ? "left-hidden" : ""}`} 
          placeholder='Max price' type="number" min={0} max={10000000}/>
        <div className="home-search-icon-wrapper">
          <img className='home-search-icon' src="/icons/search.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
