import React from 'react'
import "./filter.css"

const Filter = () => {
  return (
    <div className='filter'>
      <p>Search results for London</p>
      <form action="" className='filter-form'>
        <label htmlFor="location" className='filter-form-label'>
          Location
          <input type="text" name="" id="location" placeholder='City Location' className='filter-form-input'/>
        </label>
        <label htmlFor="type" className='filter-form-label'>
          Type
         <select name="" id="type" className='filter-form-select'>
          <option value="Any">Any</option>
          <option value="Buy">Buy</option>
          <option value="Rent">Rent</option>
         </select>
        </label>
        <label htmlFor="property" className='filter-form-label'>
          Property
          <select name="" id="property" className='filter-form-select'>
            <option value="Any">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </label>
        <label htmlFor="minPrice" className='filter-form-label'>
          Min price
          <input type="number" name="" id="minPrice" placeholder='Min Price' className='filter-form-input'/>
        </label>
        <label htmlFor="maxPrice" className='filter-form-label'>
          Max price
          <input type="number" name="" id="maxPrice" placeholder='Max Price' className='filter-form-input'/>
        </label>
        <label htmlFor="bedroom" className='filter-form-label'>
          Bedroom
          <input type="number" name="" id="bedroom" placeholder='Bedroom' className='filter-form-input'/>
        </label>
        <div className='filter-icon-wrapper'>
          <img src="/public/icons/search.png" alt="" className='filter-search-icon'/>
        </div>
      </form>
    </div>
  )
}

export default Filter